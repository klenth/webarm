// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,32,357,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,5,0,40,
8,0,10,0,12,0,43,9,0,1,0,1,0,1,0,1,1,3,1,49,8,1,1,1,4,1,52,8,1,11,1,12,1,
53,1,1,1,1,3,1,58,8,1,1,1,1,1,4,1,62,8,1,11,1,12,1,63,1,1,1,1,1,1,3,1,69,
8,1,1,1,1,1,4,1,73,8,1,11,1,12,1,74,1,1,1,1,3,1,79,8,1,1,2,1,2,1,3,1,3,1,
3,1,3,5,3,87,8,3,10,3,12,3,90,9,3,3,3,92,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,115,8,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,125,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,3,4,154,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,164,8,4,1,4,1,4,1,4,
1,4,1,4,1,4,3,4,172,8,4,1,4,1,4,1,4,3,4,177,8,4,1,4,1,4,1,4,1,4,1,4,1,4,
3,4,185,8,4,1,4,1,4,1,4,1,4,1,4,3,4,192,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,210,8,4,1,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,226,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,3,8,239,8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,252,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,3,11,270,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,5,11,282,8,11,10,11,12,11,285,9,11,1,12,1,12,1,12,1,12,1,
12,3,12,292,8,12,1,12,1,12,1,12,1,12,1,12,3,12,299,8,12,1,12,1,12,3,12,303,
8,12,1,13,1,13,1,13,1,13,5,13,309,8,13,10,13,12,13,312,9,13,1,13,1,13,1,
13,1,13,1,13,1,13,5,13,320,8,13,10,13,12,13,323,9,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,334,8,13,1,13,1,13,1,13,3,13,339,8,13,1,13,
3,13,342,8,13,1,14,1,14,1,14,1,14,1,14,3,14,349,8,14,1,15,1,15,1,15,1,15,
3,15,355,8,15,1,15,0,1,22,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
0,2,1,0,8,9,1,0,10,12,398,0,35,1,0,0,0,2,78,1,0,0,0,4,80,1,0,0,0,6,82,1,
0,0,0,8,209,1,0,0,0,10,211,1,0,0,0,12,214,1,0,0,0,14,225,1,0,0,0,16,238,
1,0,0,0,18,240,1,0,0,0,20,251,1,0,0,0,22,269,1,0,0,0,24,302,1,0,0,0,26,341,
1,0,0,0,28,348,1,0,0,0,30,354,1,0,0,0,32,34,5,27,0,0,33,32,1,0,0,0,34,37,
1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,41,1,0,0,0,37,35,1,0,0,0,38,40,3,
2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,
0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,46,6,0,-1,0,46,1,1,0,0,0,47,49,3,4,2,
0,48,47,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,52,5,27,0,0,51,50,1,0,0,0,
52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,79,6,1,-1,0,56,
58,3,4,2,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,3,6,3,0,60,62,
5,27,0,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,65,1,
0,0,0,65,66,6,1,-1,0,66,79,1,0,0,0,67,69,3,4,2,0,68,67,1,0,0,0,68,69,1,0,
0,0,69,70,1,0,0,0,70,72,3,26,13,0,71,73,5,27,0,0,72,71,1,0,0,0,73,74,1,0,
0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,6,1,-1,0,77,79,1,0,0,
0,78,48,1,0,0,0,78,57,1,0,0,0,78,68,1,0,0,0,79,3,1,0,0,0,80,81,5,26,0,0,
81,5,1,0,0,0,82,91,5,16,0,0,83,88,3,8,4,0,84,85,5,2,0,0,85,87,3,8,4,0,86,
84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,92,1,0,0,0,90,88,
1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,6,3,-1,0,94,7,1,
0,0,0,95,96,5,3,0,0,96,97,3,10,5,0,97,98,5,4,0,0,98,99,5,2,0,0,99,100,3,
18,9,0,100,101,6,4,-1,0,101,210,1,0,0,0,102,103,5,3,0,0,103,104,3,10,5,0,
104,105,5,4,0,0,105,106,5,2,0,0,106,107,3,22,11,0,107,108,6,4,-1,0,108,210,
1,0,0,0,109,110,5,3,0,0,110,111,3,10,5,0,111,112,5,4,0,0,112,114,5,2,0,0,
113,115,7,0,0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,117,
3,10,5,0,117,118,6,4,-1,0,118,210,1,0,0,0,119,120,5,3,0,0,120,121,3,10,5,
0,121,122,5,4,0,0,122,124,5,2,0,0,123,125,7,0,0,0,124,123,1,0,0,0,124,125,
1,0,0,0,125,126,1,0,0,0,126,127,3,10,5,0,127,128,5,2,0,0,128,129,3,14,7,
0,129,130,6,4,-1,0,130,210,1,0,0,0,131,132,3,10,5,0,132,133,5,2,0,0,133,
134,3,14,7,0,134,135,6,4,-1,0,135,210,1,0,0,0,136,137,3,12,6,0,137,138,6,
4,-1,0,138,210,1,0,0,0,139,140,3,10,5,0,140,141,6,4,-1,0,141,210,1,0,0,0,
142,143,5,3,0,0,143,144,3,10,5,0,144,145,5,4,0,0,145,146,6,4,-1,0,146,210,
1,0,0,0,147,148,5,3,0,0,148,149,3,10,5,0,149,150,5,2,0,0,150,151,3,18,9,
0,151,153,5,4,0,0,152,154,5,7,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,155,
1,0,0,0,155,156,6,4,-1,0,156,210,1,0,0,0,157,158,5,3,0,0,158,159,3,10,5,
0,159,160,5,2,0,0,160,161,3,22,11,0,161,163,5,4,0,0,162,164,5,7,0,0,163,
162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,6,4,-1,0,166,210,1,0,
0,0,167,168,5,3,0,0,168,169,3,10,5,0,169,171,5,2,0,0,170,172,7,0,0,0,171,
170,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,174,3,10,5,0,174,176,5,4,
0,0,175,177,5,7,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,
179,6,4,-1,0,179,210,1,0,0,0,180,181,5,3,0,0,181,182,3,10,5,0,182,184,5,
2,0,0,183,185,7,0,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,
187,3,10,5,0,187,188,5,2,0,0,188,189,3,14,7,0,189,191,5,4,0,0,190,192,5,
7,0,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,6,4,-1,0,194,
210,1,0,0,0,195,196,3,18,9,0,196,197,6,4,-1,0,197,210,1,0,0,0,198,199,3,
20,10,0,199,200,6,4,-1,0,200,210,1,0,0,0,201,202,3,22,11,0,202,203,6,4,-1,
0,203,210,1,0,0,0,204,205,5,5,0,0,205,206,3,24,12,0,206,207,5,6,0,0,207,
208,6,4,-1,0,208,210,1,0,0,0,209,95,1,0,0,0,209,102,1,0,0,0,209,109,1,0,
0,0,209,119,1,0,0,0,209,131,1,0,0,0,209,136,1,0,0,0,209,139,1,0,0,0,209,
142,1,0,0,0,209,147,1,0,0,0,209,157,1,0,0,0,209,167,1,0,0,0,209,180,1,0,
0,0,209,195,1,0,0,0,209,198,1,0,0,0,209,201,1,0,0,0,209,204,1,0,0,0,210,
9,1,0,0,0,211,212,5,17,0,0,212,213,6,5,-1,0,213,11,1,0,0,0,214,215,5,17,
0,0,215,216,5,7,0,0,216,217,6,6,-1,0,217,13,1,0,0,0,218,219,5,16,0,0,219,
220,4,7,0,1,220,221,5,18,0,0,221,226,5,20,0,0,222,223,5,16,0,0,223,224,4,
7,1,1,224,226,3,10,5,0,225,218,1,0,0,0,225,222,1,0,0,0,226,15,1,0,0,0,227,
228,3,10,5,0,228,229,6,8,-1,0,229,239,1,0,0,0,230,231,3,10,5,0,231,232,5,
2,0,0,232,233,3,14,7,0,233,234,6,8,-1,0,234,239,1,0,0,0,235,236,3,18,9,0,
236,237,6,8,-1,0,237,239,1,0,0,0,238,227,1,0,0,0,238,230,1,0,0,0,238,235,
1,0,0,0,239,17,1,0,0,0,240,241,5,18,0,0,241,242,5,20,0,0,242,243,6,9,-1,
0,243,19,1,0,0,0,244,245,5,19,0,0,245,246,5,20,0,0,246,252,6,10,-1,0,247,
248,5,19,0,0,248,249,3,22,11,0,249,250,6,10,-1,0,250,252,1,0,0,0,251,244,
1,0,0,0,251,247,1,0,0,0,252,21,1,0,0,0,253,254,6,11,-1,0,254,255,5,13,0,
0,255,256,3,22,11,0,256,257,5,14,0,0,257,258,6,11,-1,0,258,270,1,0,0,0,259,
260,5,8,0,0,260,261,3,22,11,6,261,262,6,11,-1,0,262,270,1,0,0,0,263,264,
5,15,0,0,264,270,6,11,-1,0,265,266,5,26,0,0,266,270,6,11,-1,0,267,268,5,
20,0,0,268,270,6,11,-1,0,269,253,1,0,0,0,269,259,1,0,0,0,269,263,1,0,0,0,
269,265,1,0,0,0,269,267,1,0,0,0,270,283,1,0,0,0,271,272,10,5,0,0,272,273,
7,1,0,0,273,274,3,22,11,6,274,275,6,11,-1,0,275,282,1,0,0,0,276,277,10,4,
0,0,277,278,7,0,0,0,278,279,3,22,11,5,279,280,6,11,-1,0,280,282,1,0,0,0,
281,271,1,0,0,0,281,276,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,
1,0,0,0,284,23,1,0,0,0,285,283,1,0,0,0,286,287,3,10,5,0,287,288,5,8,0,0,
288,291,3,10,5,0,289,290,5,2,0,0,290,292,3,24,12,0,291,289,1,0,0,0,291,292,
1,0,0,0,292,293,1,0,0,0,293,294,6,12,-1,0,294,303,1,0,0,0,295,298,3,10,5,
0,296,297,5,2,0,0,297,299,3,24,12,0,298,296,1,0,0,0,298,299,1,0,0,0,299,
300,1,0,0,0,300,301,6,12,-1,0,301,303,1,0,0,0,302,286,1,0,0,0,302,295,1,
0,0,0,303,25,1,0,0,0,304,305,5,21,0,0,305,310,3,28,14,0,306,307,5,2,0,0,
307,309,3,28,14,0,308,306,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,311,
1,0,0,0,311,313,1,0,0,0,312,310,1,0,0,0,313,314,6,13,-1,0,314,342,1,0,0,
0,315,316,5,22,0,0,316,321,3,30,15,0,317,318,5,2,0,0,318,320,3,30,15,0,319,
317,1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,0,321,322,1,0,0,0,322,324,1,0,
0,0,323,321,1,0,0,0,324,325,6,13,-1,0,325,342,1,0,0,0,326,327,5,23,0,0,327,
328,5,20,0,0,328,342,6,13,-1,0,329,330,5,24,0,0,330,333,5,20,0,0,331,332,
5,2,0,0,332,334,5,20,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,
335,342,6,13,-1,0,336,338,5,25,0,0,337,339,5,20,0,0,338,337,1,0,0,0,338,
339,1,0,0,0,339,340,1,0,0,0,340,342,6,13,-1,0,341,304,1,0,0,0,341,315,1,
0,0,0,341,326,1,0,0,0,341,329,1,0,0,0,341,336,1,0,0,0,342,27,1,0,0,0,343,
344,5,20,0,0,344,349,6,14,-1,0,345,346,3,22,11,0,346,347,6,14,-1,0,347,349,
1,0,0,0,348,343,1,0,0,0,348,345,1,0,0,0,349,29,1,0,0,0,350,351,5,20,0,0,
351,355,6,15,-1,0,352,353,5,31,0,0,353,355,6,15,-1,0,354,350,1,0,0,0,354,
352,1,0,0,0,355,31,1,0,0,0,36,35,41,48,53,57,63,68,74,78,88,91,114,124,153,
163,171,176,184,191,209,225,238,251,269,281,283,291,298,302,310,321,333,
338,341,348,354];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, "';'", "','", "'['", "']'", "'{'", "'}'", 
                            "'!'", "'-'", "'+'", "'*'", "'/'", "'%'", "'('", 
                            "')'", "'.'", null, null, "'#'", "'='", null, 
                            "'DCD'", "'DCB'", "'EQU'", "'FILL'", "'ALIGN'" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "BANG", "HYPHEN", "PLUS", 
                             "ASTERISK", "SLASH", "PERCENT", "LPAREN", "RPAREN", 
                             "DOT", "OPCODE", "REGISTER", "POUND", "EQUALS", 
                             "INT", "DCD", "DCB", "EQU", "FILL", "ALIGN", 
                             "ID", "NEWLINE", "WS", "INVALID", "COMMENT_TEXT", 
                             "STRING", "DOUBLE_QUOTE" ];
    static ruleNames = [ "program", "line", "label", "instruction", "operand", 
                         "register", "writebackRegister", "flexOperandSpec", 
                         "offset", "immediate", "pseudoImmediate", "symbolic", 
                         "registerSet", "directive", "dcd_value", "dcb_value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ARM32Parser.ruleNames;
        this.literalNames = ARM32Parser.literalNames;
        this.symbolicNames = ARM32Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.flexOperandSpec_sempred(localctx, predIndex);
    	case 11:
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
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 32;
	                this.match(ARM32Parser.NEWLINE); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 266403840) !== 0)) {
	            this.state = 38;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(ARM32Parser.EOF);

	                localctx.p =  new AST.Program(localctx.lines.map(l => l.l))
	            
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
	    this.enterRule(localctx, 2, ARM32Parser.RULE_line);
	    var _la = 0;
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 47;
	                localctx.lab = this.label();
	            }

	            this.state = 51; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 50;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 53; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 56;
	                localctx.lab = this.label();
	            }

	            this.state = 59;
	            localctx.inst = this.instruction();
	            this.state = 61; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 60;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 63; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 67;
	                localctx.lab = this.label();
	            }

	            this.state = 70;
	            localctx.dir = this.directive();
	            this.state = 72; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 71;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 74; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
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
	    this.enterRule(localctx, 4, ARM32Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
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
	    this.enterRule(localctx, 6, ARM32Parser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        localctx.op = this.match(ARM32Parser.OPCODE);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 69116200) !== 0)) {
	            this.state = 83;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 84;
	                this.match(ARM32Parser.COMMA);
	                this.state = 85;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 90;
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
	    this.enterRule(localctx, 8, ARM32Parser.RULE_operand);
	    var _la = 0;
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 96;
	            localctx.r = this.register();
	            this.state = 97;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 98;
	            this.match(ARM32Parser.COMMA);
	            this.state = 99;
	            localctx.i = this.immediate();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.i.value);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 103;
	            localctx.r = this.register();
	            this.state = 104;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 105;
	            this.match(ARM32Parser.COMMA);
	            this.state = 106;
	            localctx.s = this.symbolic(0);

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.e);
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 110;
	            localctx.r = this.register();
	            this.state = 111;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 112;
	            this.match(ARM32Parser.COMMA);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 113;
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

	            this.state = 116;
	            localctx.roff = this.register();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 120;
	            localctx.r = this.register();
	            this.state = 121;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 122;
	            this.match(ARM32Parser.COMMA);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 123;
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

	            this.state = 126;
	            localctx.roff = this.register();
	            this.state = 127;
	            this.match(ARM32Parser.COMMA);
	            this.state = 128;
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
	            this.state = 131;
	            localctx.r = this.register();
	            this.state = 132;
	            this.match(ARM32Parser.COMMA);
	            this.state = 133;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 136;
	            localctx.wr = this.writebackRegister();

	                    localctx.op =  localctx.wr.reg;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 139;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 142;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 143;
	            localctx.r = this.register();
	            this.state = 144;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, null, null);
	                
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 147;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 148;
	            localctx.r = this.register();
	            this.state = 149;
	            this.match(ARM32Parser.COMMA);
	            this.state = 150;
	            localctx.i = this.immediate();
	            this.state = 151;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 152;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.i.value, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 157;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 158;
	            localctx.r = this.register();
	            this.state = 159;
	            this.match(ARM32Parser.COMMA);
	            this.state = 160;
	            localctx.s = this.symbolic(0);
	            this.state = 161;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 162;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.e, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 167;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 168;
	            localctx.r = this.register();
	            this.state = 169;
	            this.match(ARM32Parser.COMMA);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 170;
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

	            this.state = 173;
	            localctx.roff = this.register();
	            this.state = 174;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 175;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx.sign == null ? null : localctx.sign.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 180;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 181;
	            localctx.r = this.register();
	            this.state = 182;
	            this.match(ARM32Parser.COMMA);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===9) {
	                this.state = 183;
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

	            this.state = 186;
	            localctx.roff = this.register();
	            this.state = 187;
	            this.match(ARM32Parser.COMMA);
	            this.state = 188;
	            localctx.f = this.flexOperandSpec();
	            this.state = 189;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 190;
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
	            this.state = 195;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 198;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 201;
	            localctx.s = this.symbolic(0);

	                    localctx.op =  localctx.s.e;
	                
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 204;
	            this.match(ARM32Parser.LBRACE);
	            this.state = 205;
	            localctx.rs = this.registerSet();
	            this.state = 206;
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
	    this.enterRule(localctx, 10, ARM32Parser.RULE_register);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
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
	    this.enterRule(localctx, 12, ARM32Parser.RULE_writebackRegister);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        localctx.r = this.match(ARM32Parser.REGISTER);
	        this.state = 215;
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
	    this.enterRule(localctx, 14, ARM32Parser.RULE_flexOperandSpec);
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 219;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 220;
	            this.match(ARM32Parser.POUND);
	            this.state = 221;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 223;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 224;
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
	    this.enterRule(localctx, 16, ARM32Parser.RULE_offset);
	    try {
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            localctx.r = this.register();
	            this.state = 231;
	            this.match(ARM32Parser.COMMA);
	            this.state = 232;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
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
	    this.enterRule(localctx, 18, ARM32Parser.RULE_immediate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(ARM32Parser.POUND);
	        this.state = 241;
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
	    this.enterRule(localctx, 20, ARM32Parser.RULE_pseudoImmediate);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.match(ARM32Parser.EQUALS);
	            this.state = 245;
	            localctx.v = this.match(ARM32Parser.INT);

	                    localctx.value =  new AST.PseudoImmediate((localctx.v == null ? null : localctx.v.text));
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.match(ARM32Parser.EQUALS);
	            this.state = 248;
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
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, ARM32Parser.RULE_symbolic, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 254;
	            this.match(ARM32Parser.LPAREN);
	            this.state = 255;
	            localctx.expr = this.symbolic(0);
	            this.state = 256;
	            this.match(ARM32Parser.RPAREN);

	                    localctx.e =  localctx.expr.e;
	                
	            break;
	        case 8:
	            this.state = 259;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 260;
	            localctx.expr = this.symbolic(6);

	                    localctx.e =  new AST.BinaryOp('-', new AST.NumberExpression('0'), localctx.expr.e);
	                
	            break;
	        case 15:
	            this.state = 263;
	            this.match(ARM32Parser.DOT);

	                    localctx.e =  new AST.CurrentAddressExpression();
	                
	            break;
	        case 26:
	            this.state = 265;
	            localctx._ID = this.match(ARM32Parser.ID);

	                    localctx.e =  new AST.SymbolExpression((localctx._ID == null ? null : localctx._ID.text))
	                
	            break;
	        case 20:
	            this.state = 267;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.e =  new AST.NumberExpression((localctx._INT == null ? null : localctx._INT.text))
	                
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 283;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 281;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new SymbolicContext(this, _parentctx, _parentState);
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ARM32Parser.RULE_symbolic);
	                    this.state = 271;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 272;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 273;
	                    localctx.r = this.symbolic(6);

	                                      localctx.e =  new AST.BinaryOp((localctx.op == null ? null : localctx.op.text), localctx.l.e, localctx.r.e);
	                                  
	                    break;

	                case 2:
	                    localctx = new SymbolicContext(this, _parentctx, _parentState);
	                    localctx.l = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ARM32Parser.RULE_symbolic);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 277;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 278;
	                    localctx.r = this.symbolic(5);

	                                      localctx.e =  new AST.BinaryOp((localctx.op == null ? null : localctx.op.text), localctx.l.e, localctx.r.e);
	                                  
	                    break;

	                } 
	            }
	            this.state = 285;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
	    this.enterRule(localctx, 24, ARM32Parser.RULE_registerSet);
	    var _la = 0;
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            localctx.r1 = this.register();
	            this.state = 287;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 288;
	            localctx.r2 = this.register();
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 289;
	                this.match(ARM32Parser.COMMA);
	                this.state = 290;
	                localctx.child = this.registerSet();
	            }


	                    localctx.registers =  new AST.RegisterSet(localctx.r1.reg, localctx.r2.reg, localctx.child ? localctx.child.registers : null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            localctx.r1 = this.register();
	            this.state = 298;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 296;
	                this.match(ARM32Parser.COMMA);
	                this.state = 297;
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
	    this.enterRule(localctx, 26, ARM32Parser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 341;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(ARM32Parser.DCD);

	            this.state = 305;
	            localctx._dcd_value = this.dcd_value();
	            localctx.dcd_values.push(localctx._dcd_value);
	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 306;
	                this.match(ARM32Parser.COMMA);
	                this.state = 307;
	                localctx._dcd_value = this.dcd_value();
	                localctx.dcd_values.push(localctx._dcd_value);
	                this.state = 312;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.dcd_values.map(node => node.n));
	                
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.match(ARM32Parser.DCB);

	            this.state = 316;
	            localctx._dcb_value = this.dcb_value();
	            localctx.dcb_values.push(localctx._dcb_value);
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 317;
	                this.match(ARM32Parser.COMMA);
	                this.state = 318;
	                localctx._dcb_value = this.dcb_value();
	                localctx.dcb_values.push(localctx._dcb_value);
	                this.state = 323;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCB(localctx.dcb_values.map(node => node.n));
	                
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 326;
	            this.match(ARM32Parser.EQU);
	            this.state = 327;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective((localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 329;
	            this.match(ARM32Parser.FILL);
	            this.state = 330;
	            localctx.bytes = this.match(ARM32Parser.INT);
	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 331;
	                this.match(ARM32Parser.COMMA);
	                this.state = 332;
	                localctx.value = this.match(ARM32Parser.INT);
	            }


	                    localctx.d =  new AST.FillDirective((localctx.bytes == null ? null : localctx.bytes.text), (localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 336;
	            this.match(ARM32Parser.ALIGN);
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 337;
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
	    this.enterRule(localctx, 28, ARM32Parser.RULE_dcd_value);
	    try {
	        this.state = 348;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 343;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 345;
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
	    this.enterRule(localctx, 30, ARM32Parser.RULE_dcb_value);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
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
ARM32Parser.EQU = 23;
ARM32Parser.FILL = 24;
ARM32Parser.ALIGN = 25;
ARM32Parser.ID = 26;
ARM32Parser.NEWLINE = 27;
ARM32Parser.WS = 28;
ARM32Parser.INVALID = 29;
ARM32Parser.COMMENT_TEXT = 30;
ARM32Parser.STRING = 31;
ARM32Parser.DOUBLE_QUOTE = 32;

ARM32Parser.RULE_program = 0;
ARM32Parser.RULE_line = 1;
ARM32Parser.RULE_label = 2;
ARM32Parser.RULE_instruction = 3;
ARM32Parser.RULE_operand = 4;
ARM32Parser.RULE_register = 5;
ARM32Parser.RULE_writebackRegister = 6;
ARM32Parser.RULE_flexOperandSpec = 7;
ARM32Parser.RULE_offset = 8;
ARM32Parser.RULE_immediate = 9;
ARM32Parser.RULE_pseudoImmediate = 10;
ARM32Parser.RULE_symbolic = 11;
ARM32Parser.RULE_registerSet = 12;
ARM32Parser.RULE_directive = 13;
ARM32Parser.RULE_dcd_value = 14;
ARM32Parser.RULE_dcb_value = 15;

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
        this.value = null;
        this.bytes = null;
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

	EQU() {
	    return this.getToken(ARM32Parser.EQU, 0);
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


	FILL() {
	    return this.getToken(ARM32Parser.FILL, 0);
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
