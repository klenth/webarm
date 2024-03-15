import antlr4 from 'antlr4';
import ARM32Lexer from './grammar/ARM32Lexer';
import ARM32Parser from './grammar/ARM32Parser';
import AST from './grammar/arm32Ast';
import counter from './counter';
import { step } from './arm32sim/Simulator.js';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { SimulatorMemory } from './arm32sim/SimulatorMemory.js';
import { Instruction } from './grammar/arm32Ast.js';
import { AssemblyError, realize } from './arm32sim/Realizer.js';

class ParseError extends Error {
    constructor(message, line, column) {
        super(message);
        this.line = line;
        this.column = column;
    }
}

//function main() {
(function() {
    let debugCode = null, debugStateStack = null, debugLineMap = null;

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
        const r = doParseAndRealize(params.code);
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
            });
        }
    }

    function doParseAndRealize(code) {
        try {
            const ast = parse(code);
            if (ast !== null)
                return doRealize(ast);
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
            const r = doParseAndRealize(params.code);
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

    function parse(code) {
        code += '\n'; // Make sure it ends in a newline
        let ast;
        const chars = new antlr4.InputStream(code);
        const lexer = new ARM32Lexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ARM32Parser(tokens);

        const errorListener = {
            syntaxError: (recognizer, token, line, column, message, error) => {
                throw new ParseError(message, line, column);
            },
            reportAttemptingFullContext: () => {},
            reportAmbiguity: () => {},
        };

        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        parser.addErrorListener(errorListener);

        ast = parser.program().p;

        return ast;
    }

    function doRealize(ast) {
        try {
            const { code, addressLineMap } = realize(ast);
            return {
                result: 'success',
                code: code,
                addressLineMap: addressLineMap,
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

    function runProgram(realized, options) {
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
            debugLineMap = realized.addressLineMap;
            state = new SimulatorState();
            state.memory = realized.code;
            state.memory.resetWrittenAddressesRecord();
            debugStateStack.push(state);
        }

        try {
            while (state.running && !options.stopImmediately) {
                if (options.direction === 'backward') {
                    if (debugStateStack.length === 1)
                        break;
                    debugStateStack.pop();
                    state = debugStateStack.peek();
                } else {
                    state = step(state);
                    debugStateStack.push(state);
                }

                if (state.interrupted && options.stopOnInterrupt
                        || state.broken && options.stopOnBreak
                        || options.stopAfterEveryInstruction)
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
        }
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
