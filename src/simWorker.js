import { parse, ParseError } from './arm32sim/Parser.js';
import { step } from './arm32sim/Simulator.js';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { SimulatorMemory } from './arm32sim/SimulatorMemory.js';
import { AssemblyError, assemble } from './arm32sim/Assembler.js';

(function() {
    let debugCode = null, debugStateStack = null, debugLineMap = null, debugSymbols = null, debugOptions = null;

    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', e => {
        if (e.data.command === 'assemble')
            handleAssembleMessage(e.data.seq, e.data.params);
        else if (e.data.command === 'run')
            handleRunMessage(e.data.seq, e.data.params);
        else
            console.error('Unknown message received by worker: ', e.data);
    });

    function sendToApp(seq, message) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage({
            seq: seq,
            message: message,
        });
    }

    function handleAssembleMessage(seq, params) {
        const r = doParseAndAssemble(params.code);
        if (r.error)
            sendToApp(seq,{
                result: r.result,
                error: r.error,
            });
        else {
            const state = new SimulatorState();
            state.memory = r.code;
            sendToApp(seq, {
                result: r.result,
                state: state,
                symbols: r.symbols,
            });
        }
    }

    function doParseAndAssemble(code) {
        try {
            const ast = parse(code);
            if (ast !== null)
                return doAssemble(ast);
        } catch (ex) {
            if (ex instanceof ParseError) {
                return {
                    result: 'error',
                    error: {
                        line: ex.line,
                        text: ex.message,
                    },
                };
            } else if (ex instanceof AssemblyError) {
                return {
                    result: 'error',
                    error: {
                        line: ex.node ? ex.node.lineNumber : null,
                        text: ex.message,
                    }
                };
            } else {
                console.error(`Unhandled error on parse or assembly: ${ex}`);
                return {
                    result: 'error',
                    error: {
                        line: null,
                        text: `[Internal error - please report!] ${ex.message}`,
                    }
                };
            }
        }
    }

    function handleRunMessage(seq, params) {
        let runResult;
        if (params.options.resume)
            runResult = runProgram(null, params.options);
        else {
            const r = doParseAndAssemble(params.code);
            if (r.error) {
                sendToApp(seq, {
                    result: r.result,
                    error: r.error,
                });
                return;
            }

            runResult = runProgram(r, params.options);
        }

        sendToApp(seq, runResult);
    }

    function doAssemble(ast) {
        try {
            const { code, addressLineMap, symbols } = assemble(ast);
            return {
                result: 'success',
                code: code,
                addressLineMap: addressLineMap,
                symbols: symbols,
            };
        } catch (ex) {
            return {
                result: 'error',
                error: {
                    line: ex.node?.lineNumber,
                    text: ex.message,
                }
            }
        }
    }

    function runProgram(assembled, options) {
        console.debug(`runProgram: options=`, options);
        const startTime = new Date().getTime();
        const checkZero = options.stopOnZero ? state => state.memory.readWord(state.PC) !== 0 : () => true;
        const checkTime = (options.stopAfterTime !== undefined) ? () => new Date().getTime() < options.stopAfterTime + startTime : () => true;
        const checkInstructions = (options.stopAfterInstructions !== undefined) ? i => i < options.stopAfterInstructions : () => true;
        let numInstructions = 0;
        let state;
        if (options.resume) {
            state = debugStateStack.peek().clone();
            if (options.resetWrittenAddressRecord)
                state.memory.resetWrittenAddressesRecord();
            state.continue();
            if (!state) {
                return {
                    result: 'error',
                    error: {
                        text: 'Continue requested when there was no existing state!'
                    }
                };
            }
        } else {
            debugStateStack = newStateStack();
            debugLineMap = assembled.addressLineMap;
            state = new SimulatorState();
            state.memory = assembled.code;
            state.memory.resetWrittenAddressesRecord();
            debugStateStack.push(state);
            debugSymbols = assembled.symbols;
        }

        try {
            while (state.running
                    && !options.stopImmediately) {
                if (options.direction === 'backward') {
                    if (debugStateStack.length === 1)
                        break;
                    debugStateStack.pop();
                    state = debugStateStack.peek();
                } else if (!checkZero(state)) {
                    state = state.clone();
                    state.advancePC();
                    state.stop();
                    debugStateStack.push(state);
                } else {
                    state = step(state);
                    debugStateStack.push(state);
                }

                if (state.interrupted && options.stopOnInterrupt
                        || state.broken && options.stopOnBreak
                        || options.stopAfterEveryInstruction
                        || !checkTime()
                        || !checkInstructions(++numInstructions))
                    break;
            }
        } catch (ex) {
            return {
                result: 'error',
                state: state,
                line: lineForAddress(state.PC),
                error: {
                    text: ex.message,
                }
            };
        }

        return {
            result: 'success',
            state: state,
            line: lineForAddress(state.PC),
            symbols: debugSymbols,
            executionTime: new Date().getTime() - startTime,
        };
    }

    function lineForAddress(addr) {
        while (addr > 0 && !(addr in debugLineMap))
            --addr;
        return debugLineMap[addr];
    }

    function newStateStack() {
        const stack = [];
        stack.peek = function() {
            return stack[stack.length - 1];
        };
        return stack;
    }

//}
})();
//main();

//export default main;
