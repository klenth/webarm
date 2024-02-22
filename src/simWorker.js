import antlr4 from 'antlr4';
import ARM32Lexer from './grammar/ARM32Lexer';
import ARM32Parser from './grammar/ARM32Parser';
import AST from './grammar/arm32Ast';
import counter from './counter';
import { step } from './arm32sim/Simulator.js';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { SimulatorMemory } from './arm32sim/SimulatorMemory.js';
import { Instruction } from './grammar/arm32Ast.js';

//function main() {
(function() {
    function sendToApp(message) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(message);
    }

    function handleParseMessage(params) {
        console.log(params.code);
        const ast = parse(params.code);
        sendToApp({
            command: 'parse',
            status: ast ? 'complete' : 'error',
            params: {
                ast: ast,
            }
        });
    }

    function handleRunMessage(params) {
        const ast = parse(params.code);
        runProgram(ast);
        sendToApp({
            command: 'run',
            status: 'complete',
        });
    }

    console.log('Worker: adding event listener (' + counter.count() + ')');
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', e => {
        if (e.data.command === 'parse') {
            handleParseMessage(e.data.params);
        } if (e.data.command === 'run') {
            handleRunMessage(e.data.params);
        }
    });

    function parse(code) {
        let valid = true;
        let ast = null;
        //try {
        const chars = new antlr4.InputStream(code);
        const lexer = new ARM32Lexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ARM32Parser(tokens);

        const errorListener = {
            syntaxError: (recognizer, token, line, column, message, error) => {
                console.log('Syntax error');
                valid = false;
            },
            reportAmbiguity: (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) => {
                console.log('Ambiguity');
                valid = false;
            },
            reportAttemptingFullContext: (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) => {
                console.log('Attempting full context');
                valid = false;
            },
            reportContextSensitivity: (recognizer, dfa, startIndex, stopIndex, prediction, configs) => {
                console.log('Context sensitivity');
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

        return valid ? ast : null;
    }

    function runProgram(ast) {
        console.log("In runProgram()");
        let state = new SimulatorState();

        console.log("Program has " + ast.lines.length + " lines");
        for (const line of ast.lines) {
            if (line.item instanceof Instruction) {
                console.log(line.item.opcode);
            } else
                console.log("[Non-instruction]");
        }

        while (state.memory.readWord(state.getPC()) !== 0) {
            state = step(state);
        }
    }

//}
})();
//main();

//export default main;
