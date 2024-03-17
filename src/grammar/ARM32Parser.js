// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,33,388,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,5,0,50,8,0,10,0,12,0,53,9,0,
1,0,5,0,56,8,0,10,0,12,0,59,9,0,1,0,1,0,1,0,1,1,1,1,1,1,4,1,67,8,1,11,1,
12,1,68,1,1,1,1,1,2,1,2,1,2,4,2,76,8,2,11,2,12,2,77,1,2,1,2,1,3,3,3,83,8,
3,1,3,4,3,86,8,3,11,3,12,3,87,1,3,1,3,3,3,92,8,3,1,3,1,3,4,3,96,8,3,11,3,
12,3,97,1,3,1,3,1,3,3,3,103,8,3,1,3,1,3,4,3,107,8,3,11,3,12,3,108,1,3,1,
3,3,3,113,8,3,1,4,1,4,1,5,1,5,1,5,1,5,5,5,121,8,5,10,5,12,5,124,9,5,3,5,
126,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,3,6,149,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,159,
8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,188,8,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,3,6,198,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,206,8,6,1,6,1,6,1,6,
3,6,211,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,219,8,6,1,6,1,6,1,6,1,6,1,6,3,6,
226,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
3,6,244,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
260,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,273,
8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,286,8,12,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,3,13,304,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
5,13,316,8,13,10,13,12,13,319,9,13,1,14,1,14,1,14,1,14,1,14,3,14,326,8,14,
1,14,1,14,1,14,1,14,1,14,3,14,333,8,14,1,14,1,14,3,14,337,8,14,1,15,1,15,
1,15,1,15,5,15,343,8,15,10,15,12,15,346,9,15,1,15,1,15,1,15,1,15,1,15,1,
15,5,15,354,8,15,10,15,12,15,357,9,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,
365,8,15,1,15,1,15,1,15,3,15,370,8,15,1,15,3,15,373,8,15,1,16,1,16,1,16,
1,16,1,16,3,16,380,8,16,1,17,1,17,1,17,1,17,3,17,386,8,17,1,17,0,1,26,18,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,2,1,0,8,9,1,0,10,12,430,
0,39,1,0,0,0,2,63,1,0,0,0,4,72,1,0,0,0,6,112,1,0,0,0,8,114,1,0,0,0,10,116,
1,0,0,0,12,243,1,0,0,0,14,245,1,0,0,0,16,248,1,0,0,0,18,259,1,0,0,0,20,272,
1,0,0,0,22,274,1,0,0,0,24,285,1,0,0,0,26,303,1,0,0,0,28,336,1,0,0,0,30,372,
1,0,0,0,32,379,1,0,0,0,34,385,1,0,0,0,36,38,5,28,0,0,37,36,1,0,0,0,38,41,
1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,45,1,0,0,0,41,39,1,0,0,0,42,44,3,
2,1,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,51,1,0,
0,0,47,45,1,0,0,0,48,50,3,4,2,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,
0,51,52,1,0,0,0,52,57,1,0,0,0,53,51,1,0,0,0,54,56,3,6,3,0,55,54,1,0,0,0,
56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,
61,5,0,0,1,61,62,6,0,-1,0,62,1,1,0,0,0,63,64,5,25,0,0,64,66,5,27,0,0,65,
67,5,28,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,70,
1,0,0,0,70,71,6,1,-1,0,71,3,1,0,0,0,72,73,5,26,0,0,73,75,5,27,0,0,74,76,
5,28,0,0,75,74,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,79,1,
0,0,0,79,80,6,2,-1,0,80,5,1,0,0,0,81,83,3,8,4,0,82,81,1,0,0,0,82,83,1,0,
0,0,83,85,1,0,0,0,84,86,5,28,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,
0,87,88,1,0,0,0,88,89,1,0,0,0,89,113,6,3,-1,0,90,92,3,8,4,0,91,90,1,0,0,
0,91,92,1,0,0,0,92,93,1,0,0,0,93,95,3,10,5,0,94,96,5,28,0,0,95,94,1,0,0,
0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,6,3,-1,
0,100,113,1,0,0,0,101,103,3,8,4,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,
1,0,0,0,104,106,3,30,15,0,105,107,5,28,0,0,106,105,1,0,0,0,107,108,1,0,0,
0,108,106,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,6,3,-1,0,111,113,
1,0,0,0,112,82,1,0,0,0,112,91,1,0,0,0,112,102,1,0,0,0,113,7,1,0,0,0,114,
115,5,27,0,0,115,9,1,0,0,0,116,125,5,16,0,0,117,122,3,12,6,0,118,119,5,2,
0,0,119,121,3,12,6,0,120,118,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,
123,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,125,117,1,0,0,0,125,126,1,0,
0,0,126,127,1,0,0,0,127,128,6,5,-1,0,128,11,1,0,0,0,129,130,5,3,0,0,130,
131,3,14,7,0,131,132,5,4,0,0,132,133,5,2,0,0,133,134,3,22,11,0,134,135,6,
6,-1,0,135,244,1,0,0,0,136,137,5,3,0,0,137,138,3,14,7,0,138,139,5,4,0,0,
139,140,5,2,0,0,140,141,3,26,13,0,141,142,6,6,-1,0,142,244,1,0,0,0,143,144,
5,3,0,0,144,145,3,14,7,0,145,146,5,4,0,0,146,148,5,2,0,0,147,149,7,0,0,0,
148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,3,14,7,0,151,152,
6,6,-1,0,152,244,1,0,0,0,153,154,5,3,0,0,154,155,3,14,7,0,155,156,5,4,0,
0,156,158,5,2,0,0,157,159,7,0,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,
1,0,0,0,160,161,3,14,7,0,161,162,5,2,0,0,162,163,3,18,9,0,163,164,6,6,-1,
0,164,244,1,0,0,0,165,166,3,14,7,0,166,167,5,2,0,0,167,168,3,18,9,0,168,
169,6,6,-1,0,169,244,1,0,0,0,170,171,3,16,8,0,171,172,6,6,-1,0,172,244,1,
0,0,0,173,174,3,14,7,0,174,175,6,6,-1,0,175,244,1,0,0,0,176,177,5,3,0,0,
177,178,3,14,7,0,178,179,5,4,0,0,179,180,6,6,-1,0,180,244,1,0,0,0,181,182,
5,3,0,0,182,183,3,14,7,0,183,184,5,2,0,0,184,185,3,22,11,0,185,187,5,4,0,
0,186,188,5,7,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,
6,6,-1,0,190,244,1,0,0,0,191,192,5,3,0,0,192,193,3,14,7,0,193,194,5,2,0,
0,194,195,3,26,13,0,195,197,5,4,0,0,196,198,5,7,0,0,197,196,1,0,0,0,197,
198,1,0,0,0,198,199,1,0,0,0,199,200,6,6,-1,0,200,244,1,0,0,0,201,202,5,3,
0,0,202,203,3,14,7,0,203,205,5,2,0,0,204,206,7,0,0,0,205,204,1,0,0,0,205,
206,1,0,0,0,206,207,1,0,0,0,207,208,3,14,7,0,208,210,5,4,0,0,209,211,5,7,
0,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,0,212,213,6,6,-1,0,213,
244,1,0,0,0,214,215,5,3,0,0,215,216,3,14,7,0,216,218,5,2,0,0,217,219,7,0,
0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,3,14,7,0,221,
222,5,2,0,0,222,223,3,18,9,0,223,225,5,4,0,0,224,226,5,7,0,0,225,224,1,0,
0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,228,6,6,-1,0,228,244,1,0,0,0,229,
230,3,22,11,0,230,231,6,6,-1,0,231,244,1,0,0,0,232,233,3,24,12,0,233,234,
6,6,-1,0,234,244,1,0,0,0,235,236,3,26,13,0,236,237,6,6,-1,0,237,244,1,0,
0,0,238,239,5,5,0,0,239,240,3,28,14,0,240,241,5,6,0,0,241,242,6,6,-1,0,242,
244,1,0,0,0,243,129,1,0,0,0,243,136,1,0,0,0,243,143,1,0,0,0,243,153,1,0,
0,0,243,165,1,0,0,0,243,170,1,0,0,0,243,173,1,0,0,0,243,176,1,0,0,0,243,
181,1,0,0,0,243,191,1,0,0,0,243,201,1,0,0,0,243,214,1,0,0,0,243,229,1,0,
0,0,243,232,1,0,0,0,243,235,1,0,0,0,243,238,1,0,0,0,244,13,1,0,0,0,245,246,
5,17,0,0,246,247,6,7,-1,0,247,15,1,0,0,0,248,249,5,17,0,0,249,250,5,7,0,
0,250,251,6,8,-1,0,251,17,1,0,0,0,252,253,5,16,0,0,253,254,4,9,0,1,254,255,
5,18,0,0,255,260,5,20,0,0,256,257,5,16,0,0,257,258,4,9,1,1,258,260,3,14,
7,0,259,252,1,0,0,0,259,256,1,0,0,0,260,19,1,0,0,0,261,262,3,14,7,0,262,
263,6,10,-1,0,263,273,1,0,0,0,264,265,3,14,7,0,265,266,5,2,0,0,266,267,3,
18,9,0,267,268,6,10,-1,0,268,273,1,0,0,0,269,270,3,22,11,0,270,271,6,10,
-1,0,271,273,1,0,0,0,272,261,1,0,0,0,272,264,1,0,0,0,272,269,1,0,0,0,273,
21,1,0,0,0,274,275,5,18,0,0,275,276,5,20,0,0,276,277,6,11,-1,0,277,23,1,
0,0,0,278,279,5,19,0,0,279,280,5,20,0,0,280,286,6,12,-1,0,281,282,5,19,0,
0,282,283,3,26,13,0,283,284,6,12,-1,0,284,286,1,0,0,0,285,278,1,0,0,0,285,
281,1,0,0,0,286,25,1,0,0,0,287,288,6,13,-1,0,288,289,5,13,0,0,289,290,3,
26,13,0,290,291,5,14,0,0,291,292,6,13,-1,0,292,304,1,0,0,0,293,294,5,8,0,
0,294,295,3,26,13,6,295,296,6,13,-1,0,296,304,1,0,0,0,297,298,5,15,0,0,298,
304,6,13,-1,0,299,300,5,27,0,0,300,304,6,13,-1,0,301,302,5,20,0,0,302,304,
6,13,-1,0,303,287,1,0,0,0,303,293,1,0,0,0,303,297,1,0,0,0,303,299,1,0,0,
0,303,301,1,0,0,0,304,317,1,0,0,0,305,306,10,5,0,0,306,307,7,1,0,0,307,308,
3,26,13,6,308,309,6,13,-1,0,309,316,1,0,0,0,310,311,10,4,0,0,311,312,7,0,
0,0,312,313,3,26,13,5,313,314,6,13,-1,0,314,316,1,0,0,0,315,305,1,0,0,0,
315,310,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,0,318,27,1,
0,0,0,319,317,1,0,0,0,320,321,3,14,7,0,321,322,5,8,0,0,322,325,3,14,7,0,
323,324,5,2,0,0,324,326,3,28,14,0,325,323,1,0,0,0,325,326,1,0,0,0,326,327,
1,0,0,0,327,328,6,14,-1,0,328,337,1,0,0,0,329,332,3,14,7,0,330,331,5,2,0,
0,331,333,3,28,14,0,332,330,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,
335,6,14,-1,0,335,337,1,0,0,0,336,320,1,0,0,0,336,329,1,0,0,0,337,29,1,0,
0,0,338,339,5,21,0,0,339,344,3,32,16,0,340,341,5,2,0,0,341,343,3,32,16,0,
342,340,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,347,
1,0,0,0,346,344,1,0,0,0,347,348,6,15,-1,0,348,373,1,0,0,0,349,350,5,22,0,
0,350,355,3,34,17,0,351,352,5,2,0,0,352,354,3,34,17,0,353,351,1,0,0,0,354,
357,1,0,0,0,355,353,1,0,0,0,355,356,1,0,0,0,356,358,1,0,0,0,357,355,1,0,
0,0,358,359,6,15,-1,0,359,373,1,0,0,0,360,361,5,23,0,0,361,364,5,20,0,0,
362,363,5,2,0,0,363,365,5,20,0,0,364,362,1,0,0,0,364,365,1,0,0,0,365,366,
1,0,0,0,366,373,6,15,-1,0,367,369,5,24,0,0,368,370,5,20,0,0,369,368,1,0,
0,0,369,370,1,0,0,0,370,371,1,0,0,0,371,373,6,15,-1,0,372,338,1,0,0,0,372,
349,1,0,0,0,372,360,1,0,0,0,372,367,1,0,0,0,373,31,1,0,0,0,374,375,5,20,
0,0,375,380,6,16,-1,0,376,377,3,26,13,0,377,378,6,16,-1,0,378,380,1,0,0,
0,379,374,1,0,0,0,379,376,1,0,0,0,380,33,1,0,0,0,381,382,5,20,0,0,382,386,
6,17,-1,0,383,384,5,32,0,0,384,386,6,17,-1,0,385,381,1,0,0,0,385,383,1,0,
0,0,386,35,1,0,0,0,40,39,45,51,57,68,77,82,87,91,97,102,108,112,122,125,
148,158,187,197,205,210,218,225,243,259,272,285,303,315,317,325,332,336,
344,355,364,369,372,379,385];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, "';'", "','", "'['", "']'", "'{'", "'}'", 
                            "'!'", "'-'", "'+'", "'*'", "'/'", "'%'", "'('", 
                            "')'", "'.'", null, null, "'#'", "'='", null, 
                            "'DCD'", "'DCB'", "'FILL'", "'ALIGN'", "'EXTERN'", 
                            "'EXPORT'" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "BANG", "HYPHEN", "PLUS", 
                             "ASTERISK", "SLASH", "PERCENT", "LPAREN", "RPAREN", 
                             "DOT", "OPCODE", "REGISTER", "POUND", "EQUALS", 
                             "INT", "DCD", "DCB", "FILL", "ALIGN", "EXTERN", 
                             "EXPORT", "ID", "NEWLINE", "WS", "INVALID", 
                             "COMMENT_TEXT", "STRING", "DOUBLE_QUOTE" ];
    static ruleNames = [ "program", "extern", "export", "line", "label", 
                         "instruction", "operand", "register", "writebackRegister", 
                         "flexOperandSpec", "offset", "immediate", "pseudoImmediate", 
                         "symbolic", "registerSet", "directive", "dcd_value", 
                         "dcb_value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ARM32Parser.ruleNames;
        this.literalNames = ARM32Parser.literalNames;
        this.symbolicNames = ARM32Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.flexOperandSpec_sempred(localctx, predIndex);
    	case 13:
    	    		return this.symbolic_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    flexOperandSpec_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0;
    		case 1:
    			return ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    symbolic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ARM32Parser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 36;
	                this.match(ARM32Parser.NEWLINE); 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 42;
	            localctx._extern = this.extern();
	            localctx.externs.push(localctx._extern);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 48;
	            localctx._export = this.export_();
	            localctx.exports.push(localctx._export);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 434176000) !== 0)) {
	            this.state = 54;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.match(ARM32Parser.EOF);

	                localctx.p =  new AST.Program(localctx.externs.map(e => e.l), localctx.exports.map(e => e.l), localctx.lines.map(l => l.l))
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extern() {
	    let localctx = new ExternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ARM32Parser.RULE_extern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(ARM32Parser.EXTERN);
	        this.state = 64;
	        localctx._ID = this.match(ARM32Parser.ID);
	        this.state = 66; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 65;
	        		this.match(ARM32Parser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 68; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                localctx.l =  new AST.Line(localctx.start.line, '', new AST.Extern((localctx._ID == null ? null : localctx._ID.text)));
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	export_() {
	    let localctx = new ExportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ARM32Parser.RULE_export);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(ARM32Parser.EXPORT);
	        this.state = 73;
	        localctx._ID = this.match(ARM32Parser.ID);
	        this.state = 75; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 74;
	        		this.match(ARM32Parser.NEWLINE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 77; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                localctx.l =  new AST.Line(localctx.start.line, '', new AST.Export((localctx._ID == null ? null : localctx._ID.text)))
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ARM32Parser.RULE_line);
	    var _la = 0;
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 81;
	                localctx.lab = this.label();
	            }

	            this.state = 85; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 84;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 87; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 90;
	                localctx.lab = this.label();
	            }

	            this.state = 93;
	            localctx.inst = this.instruction();
	            this.state = 95; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 94;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 97; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 101;
	                localctx.lab = this.label();
	            }

	            this.state = 104;
	            localctx.dir = this.directive();
	            this.state = 106; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 105;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 108; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.dir.d);
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ARM32Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(ARM32Parser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ARM32Parser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        localctx.op = this.match(ARM32Parser.OPCODE);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 136225064) !== 0)) {
	            this.state = 117;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 118;
	                this.match(ARM32Parser.COMMA);
	                this.state = 119;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 124;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }


	                localctx.i =  new AST.Instruction((localctx.op == null ? null : localctx.op.text), localctx.operands.map(o => o.op));
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ARM32Parser.RULE_operand);
	    var _la = 0;
	    try {
	        this.state = 243;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 130;
	            localctx.r = this.register();
	            this.state = 131;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 132;
	            this.match(ARM32Parser.COMMA);
	            this.state = 133;
	            localctx.i = this.immediate();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.i.value);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 137;
	            localctx.r = this.register();
	            this.state = 138;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 139;
	            this.match(ARM32Parser.COMMA);
	            this.state = 140;
	            localctx.s = this.symbolic(0);

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.e);
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 143;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 144;
	            localctx.r = this.register();
	            this.state = 145;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 146;
	            this.match(ARM32Parser.COMMA);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 147;
	                localctx.sign = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                    localctx.sign = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 150;
	            localctx.roff = this.register();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 153;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 154;
	            localctx.r = this.register();
	            this.state = 155;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 156;
	            this.match(ARM32Parser.COMMA);
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 157;
	                localctx.sign = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                    localctx.sign = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 160;
	            localctx.roff = this.register();
	            this.state = 161;
	            this.match(ARM32Parser.COMMA);
	            this.state = 162;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.PostindexedOperand(
	                        localctx.r.reg,
	                        new AST.FlexOperand(
	                            new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name),
	                            localctx.f.op.text,
	                            localctx.f.amount !== null ? localctx.f.amount.text : null,
	                            localctx.f.register() !== null ? localctx.f.register().reg : null
	                        )
	                    );
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 165;
	            localctx.r = this.register();
	            this.state = 166;
	            this.match(ARM32Parser.COMMA);
	            this.state = 167;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 170;
	            localctx.wr = this.writebackRegister();

	                    localctx.op =  localctx.wr.reg;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 173;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 176;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 177;
	            localctx.r = this.register();
	            this.state = 178;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, null, null);
	                
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 181;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 182;
	            localctx.r = this.register();
	            this.state = 183;
	            this.match(ARM32Parser.COMMA);
	            this.state = 184;
	            localctx.i = this.immediate();
	            this.state = 185;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 186;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.i.value, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 191;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 192;
	            localctx.r = this.register();
	            this.state = 193;
	            this.match(ARM32Parser.COMMA);
	            this.state = 194;
	            localctx.s = this.symbolic(0);
	            this.state = 195;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 196;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.e, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 201;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 202;
	            localctx.r = this.register();
	            this.state = 203;
	            this.match(ARM32Parser.COMMA);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 204;
	                localctx.sign = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                    localctx.sign = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 207;
	            localctx.roff = this.register();
	            this.state = 208;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 209;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 214;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 215;
	            localctx.r = this.register();
	            this.state = 216;
	            this.match(ARM32Parser.COMMA);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 217;
	                localctx.sign = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===9)) {
	                    localctx.sign = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 220;
	            localctx.roff = this.register();
	            this.state = 221;
	            this.match(ARM32Parser.COMMA);
	            this.state = 222;
	            localctx.f = this.flexOperandSpec();
	            this.state = 223;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 224;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(
	                        localctx.r.reg,
	                        new AST.FlexOperand(
	                            new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name),
	                            localctx.f.op.text,
	                            localctx.f.amount !== null ? localctx.f.amount.text : null,
	                            localctx.f.register() !== null ? localctx.f.register().reg : null
	                        ),
	                        !!(localctx._BANG == null ? null : localctx._BANG.text)
	                    );
	                
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 229;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 232;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 235;
	            localctx.s = this.symbolic(0);

	                    localctx.op =  localctx.s.e;
	                
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 238;
	            this.match(ARM32Parser.LBRACE);
	            this.state = 239;
	            localctx.rs = this.registerSet();
	            this.state = 240;
	            this.match(ARM32Parser.RBRACE);

	                    localctx.op =  localctx.rs.registers;
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	register() {
	    let localctx = new RegisterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ARM32Parser.RULE_register);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        localctx.r = this.match(ARM32Parser.REGISTER);

	                localctx.reg =  new AST.Register((localctx.r == null ? null : localctx.r.text));
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	writebackRegister() {
	    let localctx = new WritebackRegisterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ARM32Parser.RULE_writebackRegister);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        localctx.r = this.match(ARM32Parser.REGISTER);
	        this.state = 249;
	        this.match(ARM32Parser.BANG);

	                localctx.reg =  new AST.WritebackRegister((localctx.r == null ? null : localctx.r.text));
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flexOperandSpec() {
	    let localctx = new FlexOperandSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ARM32Parser.RULE_flexOperandSpec);
	    try {
	        this.state = 259;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 253;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 254;
	            this.match(ARM32Parser.POUND);
	            this.state = 255;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 256;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 257;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 258;
	            this.register();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offset() {
	    let localctx = new OffsetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ARM32Parser.RULE_offset);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            localctx.r = this.register();
	            this.state = 265;
	            this.match(ARM32Parser.COMMA);
	            this.state = 266;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 269;
	            localctx.i = this.immediate();

	                    localctx.off =  localctx.i.value;
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	immediate() {
	    let localctx = new ImmediateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ARM32Parser.RULE_immediate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(ARM32Parser.POUND);
	        this.state = 275;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.Immediate((localctx.v == null ? null : localctx.v.text));
	            
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pseudoImmediate() {
	    let localctx = new PseudoImmediateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ARM32Parser.RULE_pseudoImmediate);
	    try {
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.match(ARM32Parser.EQUALS);
	            this.state = 279;
	            localctx.v = this.match(ARM32Parser.INT);

	                    localctx.value =  new AST.PseudoImmediate((localctx.v == null ? null : localctx.v.text));
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
	            this.match(ARM32Parser.EQUALS);
	            this.state = 282;
	            localctx.s = this.symbolic(0);

	                    localctx.value =  new AST.PseudoImmediate(localctx.s.e);
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	symbolic(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SymbolicContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, ARM32Parser.RULE_symbolic, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 288;
	            this.match(ARM32Parser.LPAREN);
	            this.state = 289;
	            localctx.expr = this.symbolic(0);
	            this.state = 290;
	            this.match(ARM32Parser.RPAREN);

	                    localctx.e =  localctx.expr.e;
	                
	            break;
	        case 8:
	            this.state = 293;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 294;
	            localctx.expr = this.symbolic(6);

	                    localctx.e =  new AST.BinaryOp('-', new AST.NumberExpression('0'), localctx.expr.e);
	                
	            break;
	        case 15:
	            this.state = 297;
	            this.match(ARM32Parser.DOT);

	                    localctx.e =  new AST.CurrentAddressExpression();
	                
	            break;
	        case 27:
	            this.state = 299;
	            localctx._ID = this.match(ARM32Parser.ID);

	                    localctx.e =  new AST.SymbolExpression((localctx._ID == null ? null : localctx._ID.text))
	                
	            break;
	        case 20:
	            this.state = 301;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.e =  new AST.NumberExpression((localctx._INT == null ? null : localctx._INT.text))
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 317;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 315;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new SymbolicContext(this, _parentctx, _parentState);
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ARM32Parser.RULE_symbolic);
	                    this.state = 305;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 306;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 307;
	                    localctx.r = this.symbolic(6);

	                                      localctx.e =  new AST.BinaryOp((localctx.op == null ? null : localctx.op.text), localctx.l.e, localctx.r.e);
	                                  
	                    break;

	                case 2:
	                    localctx = new SymbolicContext(this, _parentctx, _parentState);
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ARM32Parser.RULE_symbolic);
	                    this.state = 310;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 311;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 312;
	                    localctx.r = this.symbolic(5);

	                                      localctx.e =  new AST.BinaryOp((localctx.op == null ? null : localctx.op.text), localctx.l.e, localctx.r.e);
	                                  
	                    break;

	                } 
	            }
	            this.state = 319;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	registerSet() {
	    let localctx = new RegisterSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ARM32Parser.RULE_registerSet);
	    var _la = 0;
	    try {
	        this.state = 336;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 320;
	            localctx.r1 = this.register();
	            this.state = 321;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 322;
	            localctx.r2 = this.register();
	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 323;
	                this.match(ARM32Parser.COMMA);
	                this.state = 324;
	                localctx.child = this.registerSet();
	            }


	                    localctx.registers =  new AST.RegisterSet(localctx.r1.reg, localctx.r2.reg, localctx.child ? localctx.child.registers : null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            localctx.r1 = this.register();
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 330;
	                this.match(ARM32Parser.COMMA);
	                this.state = 331;
	                localctx.child = this.registerSet();
	            }


	                    localctx.registers =  new AST.RegisterSet(localctx.r1.reg, localctx.r1.reg, localctx.child ? localctx.child.registers : null);
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ARM32Parser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 372;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 338;
	            this.match(ARM32Parser.DCD);

	            this.state = 339;
	            localctx._dcd_value = this.dcd_value();
	            localctx.dcd_values.push(localctx._dcd_value);
	            this.state = 344;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 340;
	                this.match(ARM32Parser.COMMA);
	                this.state = 341;
	                localctx._dcd_value = this.dcd_value();
	                localctx.dcd_values.push(localctx._dcd_value);
	                this.state = 346;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.dcd_values.map(node => node.n));
	                
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            this.match(ARM32Parser.DCB);

	            this.state = 350;
	            localctx._dcb_value = this.dcb_value();
	            localctx.dcb_values.push(localctx._dcb_value);
	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 351;
	                this.match(ARM32Parser.COMMA);
	                this.state = 352;
	                localctx._dcb_value = this.dcb_value();
	                localctx.dcb_values.push(localctx._dcb_value);
	                this.state = 357;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCB(localctx.dcb_values.map(node => node.n));
	                
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 360;
	            this.match(ARM32Parser.FILL);
	            this.state = 361;
	            localctx.bytes = this.match(ARM32Parser.INT);
	            this.state = 364;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 362;
	                this.match(ARM32Parser.COMMA);
	                this.state = 363;
	                localctx.value = this.match(ARM32Parser.INT);
	            }


	                    localctx.d =  new AST.FillDirective((localctx.bytes == null ? null : localctx.bytes.text), (localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 367;
	            this.match(ARM32Parser.ALIGN);
	            this.state = 369;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 368;
	                localctx.value = this.match(ARM32Parser.INT);
	            }


	                    localctx.d =  new AST.AlignDirective((localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dcd_value() {
	    let localctx = new Dcd_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ARM32Parser.RULE_dcd_value);
	    try {
	        this.state = 379;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            localctx._symbolic = this.symbolic(0);

	                    localctx.n =  localctx._symbolic.e;
	                
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dcb_value() {
	    let localctx = new Dcb_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ARM32Parser.RULE_dcb_value);
	    try {
	        this.state = 385;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 381;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 383;
	            localctx._STRING = this.match(ARM32Parser.STRING);

	                    localctx.n =  (localctx._STRING == null ? null : localctx._STRING.text);
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ARM32Parser.EOF = antlr4.Token.EOF;
ARM32Parser.COMMENT = 1;
ARM32Parser.COMMA = 2;
ARM32Parser.LBRACK = 3;
ARM32Parser.RBRACK = 4;
ARM32Parser.LBRACE = 5;
ARM32Parser.RBRACE = 6;
ARM32Parser.BANG = 7;
ARM32Parser.HYPHEN = 8;
ARM32Parser.PLUS = 9;
ARM32Parser.ASTERISK = 10;
ARM32Parser.SLASH = 11;
ARM32Parser.PERCENT = 12;
ARM32Parser.LPAREN = 13;
ARM32Parser.RPAREN = 14;
ARM32Parser.DOT = 15;
ARM32Parser.OPCODE = 16;
ARM32Parser.REGISTER = 17;
ARM32Parser.POUND = 18;
ARM32Parser.EQUALS = 19;
ARM32Parser.INT = 20;
ARM32Parser.DCD = 21;
ARM32Parser.DCB = 22;
ARM32Parser.FILL = 23;
ARM32Parser.ALIGN = 24;
ARM32Parser.EXTERN = 25;
ARM32Parser.EXPORT = 26;
ARM32Parser.ID = 27;
ARM32Parser.NEWLINE = 28;
ARM32Parser.WS = 29;
ARM32Parser.INVALID = 30;
ARM32Parser.COMMENT_TEXT = 31;
ARM32Parser.STRING = 32;
ARM32Parser.DOUBLE_QUOTE = 33;

ARM32Parser.RULE_program = 0;
ARM32Parser.RULE_extern = 1;
ARM32Parser.RULE_export = 2;
ARM32Parser.RULE_line = 3;
ARM32Parser.RULE_label = 4;
ARM32Parser.RULE_instruction = 5;
ARM32Parser.RULE_operand = 6;
ARM32Parser.RULE_register = 7;
ARM32Parser.RULE_writebackRegister = 8;
ARM32Parser.RULE_flexOperandSpec = 9;
ARM32Parser.RULE_offset = 10;
ARM32Parser.RULE_immediate = 11;
ARM32Parser.RULE_pseudoImmediate = 12;
ARM32Parser.RULE_symbolic = 13;
ARM32Parser.RULE_registerSet = 14;
ARM32Parser.RULE_directive = 15;
ARM32Parser.RULE_dcd_value = 16;
ARM32Parser.RULE_dcb_value = 17;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_program;
        this.p = null
        this._extern = null;
        this.externs = [];
        this._export = null;
        this.exports = [];
        this._line = null;
        this.lines = [];
    }

	EOF() {
	    return this.getToken(ARM32Parser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NEWLINE);
	    } else {
	        return this.getToken(ARM32Parser.NEWLINE, i);
	    }
	};


	extern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExternContext);
	    } else {
	        return this.getTypedRuleContext(ExternContext,i);
	    }
	};

	export_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExportContext);
	    } else {
	        return this.getTypedRuleContext(ExportContext,i);
	    }
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};


}



class ExternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_extern;
        this.l = null
        this._ID = null;
    }

	EXTERN() {
	    return this.getToken(ARM32Parser.EXTERN, 0);
	};

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NEWLINE);
	    } else {
	        return this.getToken(ARM32Parser.NEWLINE, i);
	    }
	};



}



class ExportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_export;
        this.l = null
        this._ID = null;
    }

	EXPORT() {
	    return this.getToken(ARM32Parser.EXPORT, 0);
	};

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NEWLINE);
	    } else {
	        return this.getToken(ARM32Parser.NEWLINE, i);
	    }
	};



}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_line;
        this.l = null
        this.lab = null;
        this.inst = null;
        this.dir = null;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NEWLINE);
	    } else {
	        return this.getToken(ARM32Parser.NEWLINE, i);
	    }
	};


	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_label;
    }

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
	};


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_instruction;
        this.i = null
        this.op = null;
        this._operand = null;
        this.operands = [];
    }

	OPCODE() {
	    return this.getToken(ARM32Parser.OPCODE, 0);
	};

	operand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperandContext);
	    } else {
	        return this.getTypedRuleContext(OperandContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.COMMA);
	    } else {
	        return this.getToken(ARM32Parser.COMMA, i);
	    }
	};



}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_operand;
        this.op = null
        this.r = null;
        this.i = null;
        this.s = null;
        this.sign = null;
        this.roff = null;
        this.f = null;
        this.wr = null;
        this._BANG = null;
        this.pi = null;
        this.rs = null;
    }

	LBRACK() {
	    return this.getToken(ARM32Parser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(ARM32Parser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.COMMA);
	    } else {
	        return this.getToken(ARM32Parser.COMMA, i);
	    }
	};


	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	symbolic() {
	    return this.getTypedRuleContext(SymbolicContext,0);
	};

	PLUS() {
	    return this.getToken(ARM32Parser.PLUS, 0);
	};

	HYPHEN() {
	    return this.getToken(ARM32Parser.HYPHEN, 0);
	};

	flexOperandSpec() {
	    return this.getTypedRuleContext(FlexOperandSpecContext,0);
	};

	writebackRegister() {
	    return this.getTypedRuleContext(WritebackRegisterContext,0);
	};

	BANG() {
	    return this.getToken(ARM32Parser.BANG, 0);
	};

	pseudoImmediate() {
	    return this.getTypedRuleContext(PseudoImmediateContext,0);
	};

	LBRACE() {
	    return this.getToken(ARM32Parser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ARM32Parser.RBRACE, 0);
	};

	registerSet() {
	    return this.getTypedRuleContext(RegisterSetContext,0);
	};


}



class RegisterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_register;
        this.reg = null
        this.r = null;
    }

	REGISTER() {
	    return this.getToken(ARM32Parser.REGISTER, 0);
	};


}



class WritebackRegisterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_writebackRegister;
        this.reg = null
        this.r = null;
    }

	BANG() {
	    return this.getToken(ARM32Parser.BANG, 0);
	};

	REGISTER() {
	    return this.getToken(ARM32Parser.REGISTER, 0);
	};


}



class FlexOperandSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_flexOperandSpec;
        this.op = null;
        this.amount = null;
    }

	POUND() {
	    return this.getToken(ARM32Parser.POUND, 0);
	};

	OPCODE() {
	    return this.getToken(ARM32Parser.OPCODE, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};


}



class OffsetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_offset;
        this.off = null
        this.r = null;
        this.f = null;
        this.i = null;
    }

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	COMMA() {
	    return this.getToken(ARM32Parser.COMMA, 0);
	};

	flexOperandSpec() {
	    return this.getTypedRuleContext(FlexOperandSpecContext,0);
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};


}



class ImmediateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_immediate;
        this.value = null
        this.v = null;
    }

	POUND() {
	    return this.getToken(ARM32Parser.POUND, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};


}



class PseudoImmediateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_pseudoImmediate;
        this.value = null
        this.v = null;
        this.s = null;
    }

	EQUALS() {
	    return this.getToken(ARM32Parser.EQUALS, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	symbolic() {
	    return this.getTypedRuleContext(SymbolicContext,0);
	};


}



class SymbolicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_symbolic;
        this.e = null
        this.l = null;
        this.expr = null;
        this._ID = null;
        this._INT = null;
        this.op = null;
        this.r = null;
    }

	LPAREN() {
	    return this.getToken(ARM32Parser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ARM32Parser.RPAREN, 0);
	};

	symbolic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SymbolicContext);
	    } else {
	        return this.getTypedRuleContext(SymbolicContext,i);
	    }
	};

	HYPHEN() {
	    return this.getToken(ARM32Parser.HYPHEN, 0);
	};

	DOT() {
	    return this.getToken(ARM32Parser.DOT, 0);
	};

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	ASTERISK() {
	    return this.getToken(ARM32Parser.ASTERISK, 0);
	};

	SLASH() {
	    return this.getToken(ARM32Parser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(ARM32Parser.PERCENT, 0);
	};

	PLUS() {
	    return this.getToken(ARM32Parser.PLUS, 0);
	};


}



class RegisterSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_registerSet;
        this.registers = null
        this.r1 = null;
        this.r2 = null;
        this.child = null;
    }

	HYPHEN() {
	    return this.getToken(ARM32Parser.HYPHEN, 0);
	};

	register = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RegisterContext);
	    } else {
	        return this.getTypedRuleContext(RegisterContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(ARM32Parser.COMMA, 0);
	};

	registerSet() {
	    return this.getTypedRuleContext(RegisterSetContext,0);
	};


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_directive;
        this.d = null
        this._dcd_value = null;
        this.dcd_values = [];
        this._dcb_value = null;
        this.dcb_values = [];
        this.bytes = null;
        this.value = null;
    }

	DCD() {
	    return this.getToken(ARM32Parser.DCD, 0);
	};

	dcd_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dcd_valueContext);
	    } else {
	        return this.getTypedRuleContext(Dcd_valueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.COMMA);
	    } else {
	        return this.getToken(ARM32Parser.COMMA, i);
	    }
	};


	DCB() {
	    return this.getToken(ARM32Parser.DCB, 0);
	};

	dcb_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dcb_valueContext);
	    } else {
	        return this.getTypedRuleContext(Dcb_valueContext,i);
	    }
	};

	FILL() {
	    return this.getToken(ARM32Parser.FILL, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.INT);
	    } else {
	        return this.getToken(ARM32Parser.INT, i);
	    }
	};


	ALIGN() {
	    return this.getToken(ARM32Parser.ALIGN, 0);
	};


}



class Dcd_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_dcd_value;
        this.n = null
        this._INT = null;
        this._symbolic = null;
    }

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	symbolic() {
	    return this.getTypedRuleContext(SymbolicContext,0);
	};


}



class Dcb_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_dcb_value;
        this.n = null
        this._INT = null;
        this._STRING = null;
    }

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	STRING() {
	    return this.getToken(ARM32Parser.STRING, 0);
	};


}




ARM32Parser.ProgramContext = ProgramContext; 
ARM32Parser.ExternContext = ExternContext; 
ARM32Parser.ExportContext = ExportContext; 
ARM32Parser.LineContext = LineContext; 
ARM32Parser.LabelContext = LabelContext; 
ARM32Parser.InstructionContext = InstructionContext; 
ARM32Parser.OperandContext = OperandContext; 
ARM32Parser.RegisterContext = RegisterContext; 
ARM32Parser.WritebackRegisterContext = WritebackRegisterContext; 
ARM32Parser.FlexOperandSpecContext = FlexOperandSpecContext; 
ARM32Parser.OffsetContext = OffsetContext; 
ARM32Parser.ImmediateContext = ImmediateContext; 
ARM32Parser.PseudoImmediateContext = PseudoImmediateContext; 
ARM32Parser.SymbolicContext = SymbolicContext; 
ARM32Parser.RegisterSetContext = RegisterSetContext; 
ARM32Parser.DirectiveContext = DirectiveContext; 
ARM32Parser.Dcd_valueContext = Dcd_valueContext; 
ARM32Parser.Dcb_valueContext = Dcb_valueContext; 
