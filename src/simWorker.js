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

    function sendToApp(message) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(message);
    }

    function doParse(params, command) {
        try {
            const ast = parse(params.code);
            if (ast !== null) {
                return realize(ast);
            }
        } catch (ex) {
            if (ex instanceof ParseError) {
                sendToApp({
                    command: command,
                    status: 'error',
                    params: {
                        error_context: 'parse',
                        message: ex.message,
                        line: ex.line,
                        column: ex.column
                    }
                });
                return null;
            } else if (ex instanceof AssemblyError) {
                sendToApp({
                    command: command,
                    status: 'error',
                    params: {
                        error_context: 'assembly',
                        message: ex.message,
                        ...(ex.node ? { 'line': ex.node.lineNumber } : {})
                    }
                });
                return null;
            } else
                console.error(ex);
        }

        sendToApp({
            command: command,
            status: 'error',
            params: {
                error_context: 'parse',
                message: 'Unable to parse assembly code',
            }
        });
        return null;
    }

    function handleParseMessage(params) {
        if (doParse(params, 'parse'))
            sendToApp({
                command: 'parse',
                status: 'complete',
                params: {}
            });
    }

    function handleRunMessage(params) {
        const parsed = doParse(params, 'run');
        if (parsed) {
            const finalState = runProgram(parsed.code, parsed.addressLineMap);
            sendToApp({
                command: 'run',
                status: 'complete',
                finalState: finalState,
            });
        }
    }

    function handleDebugMessage(params) {
        const parsed = doParse(params, 'debug');
        if (parsed) {
            debugCode = parsed.code;
            debugLineMap = parsed.addressLineMap;
            debugStateStack = [];
            debugStateStack.push(new SimulatorState());
            debugStateStack.peek = function() {
                return this[this.length - 1];
            };

            let instrAddr = 0;
            for (const instr of debugCode) {
                debugStateStack.peek().memory.writeWord(instrAddr, instr.encode());
                instrAddr += 4;
            }

            sendToApp({
                command: 'debug',
                status: 'ready',
                state: debugStateStack.peek(),
                line: lineForAddress(0),
            });
        }
    }

    function handleStepMessage(params) {
        if (!params.direction || params.direction !== 'backward') {
            // Step forward
            const initState = debugStateStack.peek() || new SimulatorState();
            if (debugStateStack.length === 0)
                debugStateStack.push(initState);
            if (initState.running) {
                const newState = step(initState);
                debugStateStack.push(newState);
                sendToApp({
                    command: 'debug/step',
                    status: 'success',
                    state: newState,
                    line: lineForAddress(newState.PC)
                });
            } else
                sendToApp({
                    command: 'debug/step',
                    status: 'error',
                    message: 'Program has ended.',
                });
        } else {
            // Step back
            if (debugStateStack.length === 1)
                sendToApp({
                    command: 'debug/step',
                    status: 'error',
                    message: 'No further history is available.'
                });
            else {
                const lastState = debugStateStack.pop();
                sendToApp({
                    command: 'debug/step',
                    status: 'success',
                    state: debugStateStack.peek(),
                    line: lineForAddress(debugStateStack.peek().PC)
                });
            }
        }
    }

    function handleContinueMessage(params) {
        let state = debugStateStack.peek();

        if (!state.running) {
            sendToApp({
                command: 'debug/continue',
                status: 'error',
                message: 'Program has ended.'
            });
            return;
        }

        do {
            state = step(state);
            debugStateStack.push(state);
        } while (state.running && !state.broken);

        sendToApp({
            command: 'debug/continue',
            status: 'success',
            state: state,
            ...(state.broken ? { line: lineForAddress(state.PC) } : {})
        });
    }

    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', e => {
        if (e.data.command === 'parse')
            handleParseMessage(e.data.params);
        else if (e.data.command === 'run')
            handleRunMessage(e.data.params);
        else if (e.data.command === 'debug')
            handleDebugMessage(e.data.params);
        else if (e.data.command === 'debug/step')
            handleStepMessage(e.data.params);
        else if (e.data.command === 'debug/continue')
            handleContinueMessage(e.data.params);
        else
            console.error('Unknown message received by worker: ', e.data);
    });

    function parse(code) {
        code = code + '\nSTOP\n'; // Make sure it ends in a newline and STOP instruction!
        let valid = true;
        let ast = null;
        //try {
        const chars = new antlr4.InputStream(code);
        const lexer = new ARM32Lexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ARM32Parser(tokens);
        let error = null;

        const errorListener = {
            syntaxError: (recognizer, token, line, column, message, error) => {
                console.debug('syntaxError');
                error = new ParseError(message, line, column);
                valid = false;
                throw error;
            },
            reportAmbiguity: (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) => {
                //console.assert(false, 'Ambiguity');
                //valid = false;
            },
            reportAttemptingFullContext: (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) => {
                //console.assert(false, 'Attempting full context');
                //valid = false;
            },
            reportContextSensitivity: (recognizer, dfa, startIndex, stopIndex, prediction, configs) => {
                console.assert(false, 'Context sensitivity');
                valid = false;
            },
        };

        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        parser.addErrorListener(errorListener);

        ast = parser.program().p;
        /*} catch (e) {
            console.log('Exception thrown: ' + e);
            valid = false;
        }*/

        if (error)
            throw error;

        return valid ? ast : error;
    }

    function runProgram(code) {
        let state = new SimulatorState();

        let instrAddr = 0;
        for (const instr of code) {
            state.memory.writeWord(instrAddr, instr.encode());
            instrAddr += 4;
        }

        while (state.running) {
            state = step(state);
        }

        return state;
    }

    function lineForAddress(addr) {
        while (addr > 0 && !(addr in debugLineMap))
            --addr;
        return debugLineMap[addr];
    }

//}
})();
//main();

//export default main;
