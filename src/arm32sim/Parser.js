import antlr4 from 'antlr4';
import ARM32Lexer from '../grammar/ARM32Lexer';
import ARM32Parser from '../grammar/ARM32Parser';
import { logAst } from '../grammar/arm32Ast.js';

export class ParseError extends Error {
    constructor(message, line, column) {
        super(message);
        this.line = line;
        this.column = column;
    }
}

export function parse(code) {
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
    //logAst(ast);
    return ast;
}
