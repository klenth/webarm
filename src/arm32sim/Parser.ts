import antlr4 from 'antlr4';
// @ts-ignore
import ARM32Lexer from '../grammar/ARM32Lexer';
// @ts-ignore
import ARM32Parser from '../grammar/ARM32Parser';
import { Program } from '../grammar/arm32Ast.js';

export class ParseError extends Error {
    line: number | null;
    column: number | null;

    constructor(message: string, line: number | null, column: number | null) {
        super(message);
        this.line = line;
        this.column = column;
    }
}

export function parse(code: string): Program {
    code += '\n'; // Make sure it ends in a newline
    let ast;
    const chars = new antlr4.InputStream(code);
    const lexer = new ARM32Lexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ARM32Parser(tokens);

    const errorListener = {
        syntaxError: (recognizer: any, token: any, line: any, column: any, message: any, error: any) => {
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
