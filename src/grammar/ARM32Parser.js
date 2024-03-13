// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,25,326,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
1,10,3,10,252,8,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,262,8,12,
1,12,1,12,1,12,1,12,1,12,3,12,269,8,12,1,12,1,12,3,12,273,8,12,1,13,1,13,
1,13,1,13,5,13,279,8,13,10,13,12,13,282,9,13,1,13,1,13,1,13,1,13,1,13,1,
13,5,13,290,8,13,10,13,12,13,293,9,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,3,13,303,8,13,1,13,1,13,1,13,3,13,308,8,13,1,13,3,13,311,8,13,1,14,
1,14,1,14,1,14,1,14,3,14,318,8,14,1,15,1,15,1,15,1,15,3,15,324,8,15,1,15,
0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,0,361,0,35,1,0,0,0,2,
78,1,0,0,0,4,80,1,0,0,0,6,82,1,0,0,0,8,209,1,0,0,0,10,211,1,0,0,0,12,214,
1,0,0,0,14,225,1,0,0,0,16,238,1,0,0,0,18,240,1,0,0,0,20,251,1,0,0,0,22,253,
1,0,0,0,24,272,1,0,0,0,26,310,1,0,0,0,28,317,1,0,0,0,30,323,1,0,0,0,32,34,
5,20,0,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,41,1,
0,0,0,37,35,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,
0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,46,6,0,-1,
0,46,1,1,0,0,0,47,49,3,4,2,0,48,47,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,
52,5,20,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,55,
1,0,0,0,55,79,6,1,-1,0,56,58,3,4,2,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,
0,0,0,59,61,3,6,3,0,60,62,5,20,0,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,
0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,6,1,-1,0,66,79,1,0,0,0,67,69,3,4,2,
0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,72,3,26,13,0,71,73,5,20,0,
0,72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,
76,77,6,1,-1,0,77,79,1,0,0,0,78,48,1,0,0,0,78,57,1,0,0,0,78,68,1,0,0,0,79,
3,1,0,0,0,80,81,5,19,0,0,81,5,1,0,0,0,82,91,5,9,0,0,83,88,3,8,4,0,84,85,
5,2,0,0,85,87,3,8,4,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,
0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,0,
0,0,93,94,6,3,-1,0,94,7,1,0,0,0,95,96,5,3,0,0,96,97,3,10,5,0,97,98,5,4,0,
0,98,99,5,2,0,0,99,100,3,18,9,0,100,101,6,4,-1,0,101,210,1,0,0,0,102,103,
5,3,0,0,103,104,3,10,5,0,104,105,5,4,0,0,105,106,5,2,0,0,106,107,3,22,11,
0,107,108,6,4,-1,0,108,210,1,0,0,0,109,110,5,3,0,0,110,111,3,10,5,0,111,
112,5,4,0,0,112,114,5,2,0,0,113,115,5,8,0,0,114,113,1,0,0,0,114,115,1,0,
0,0,115,116,1,0,0,0,116,117,3,10,5,0,117,118,6,4,-1,0,118,210,1,0,0,0,119,
120,5,3,0,0,120,121,3,10,5,0,121,122,5,4,0,0,122,124,5,2,0,0,123,125,5,8,
0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,3,10,5,0,127,
128,5,2,0,0,128,129,3,14,7,0,129,130,6,4,-1,0,130,210,1,0,0,0,131,132,3,
10,5,0,132,133,5,2,0,0,133,134,3,14,7,0,134,135,6,4,-1,0,135,210,1,0,0,0,
136,137,3,12,6,0,137,138,6,4,-1,0,138,210,1,0,0,0,139,140,3,10,5,0,140,141,
6,4,-1,0,141,210,1,0,0,0,142,143,5,3,0,0,143,144,3,10,5,0,144,145,5,4,0,
0,145,146,6,4,-1,0,146,210,1,0,0,0,147,148,5,3,0,0,148,149,3,10,5,0,149,
150,5,2,0,0,150,151,3,18,9,0,151,153,5,4,0,0,152,154,5,7,0,0,153,152,1,0,
0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,156,6,4,-1,0,156,210,1,0,0,0,157,
158,5,3,0,0,158,159,3,10,5,0,159,160,5,2,0,0,160,161,3,22,11,0,161,163,5,
4,0,0,162,164,5,7,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,
166,6,4,-1,0,166,210,1,0,0,0,167,168,5,3,0,0,168,169,3,10,5,0,169,171,5,
2,0,0,170,172,5,8,0,0,171,170,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,
174,3,10,5,0,174,176,5,4,0,0,175,177,5,7,0,0,176,175,1,0,0,0,176,177,1,0,
0,0,177,178,1,0,0,0,178,179,6,4,-1,0,179,210,1,0,0,0,180,181,5,3,0,0,181,
182,3,10,5,0,182,184,5,2,0,0,183,185,5,8,0,0,184,183,1,0,0,0,184,185,1,0,
0,0,185,186,1,0,0,0,186,187,3,10,5,0,187,188,5,2,0,0,188,189,3,14,7,0,189,
191,5,4,0,0,190,192,5,7,0,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,
0,0,193,194,6,4,-1,0,194,210,1,0,0,0,195,196,3,18,9,0,196,197,6,4,-1,0,197,
210,1,0,0,0,198,199,3,20,10,0,199,200,6,4,-1,0,200,210,1,0,0,0,201,202,3,
22,11,0,202,203,6,4,-1,0,203,210,1,0,0,0,204,205,5,5,0,0,205,206,3,24,12,
0,206,207,5,6,0,0,207,208,6,4,-1,0,208,210,1,0,0,0,209,95,1,0,0,0,209,102,
1,0,0,0,209,109,1,0,0,0,209,119,1,0,0,0,209,131,1,0,0,0,209,136,1,0,0,0,
209,139,1,0,0,0,209,142,1,0,0,0,209,147,1,0,0,0,209,157,1,0,0,0,209,167,
1,0,0,0,209,180,1,0,0,0,209,195,1,0,0,0,209,198,1,0,0,0,209,201,1,0,0,0,
209,204,1,0,0,0,210,9,1,0,0,0,211,212,5,10,0,0,212,213,6,5,-1,0,213,11,1,
0,0,0,214,215,5,10,0,0,215,216,5,7,0,0,216,217,6,6,-1,0,217,13,1,0,0,0,218,
219,5,9,0,0,219,220,4,7,0,1,220,221,5,11,0,0,221,226,5,13,0,0,222,223,5,
9,0,0,223,224,4,7,1,1,224,226,3,10,5,0,225,218,1,0,0,0,225,222,1,0,0,0,226,
15,1,0,0,0,227,228,3,10,5,0,228,229,6,8,-1,0,229,239,1,0,0,0,230,231,3,10,
5,0,231,232,5,2,0,0,232,233,3,14,7,0,233,234,6,8,-1,0,234,239,1,0,0,0,235,
236,3,18,9,0,236,237,6,8,-1,0,237,239,1,0,0,0,238,227,1,0,0,0,238,230,1,
0,0,0,238,235,1,0,0,0,239,17,1,0,0,0,240,241,5,11,0,0,241,242,5,13,0,0,242,
243,6,9,-1,0,243,19,1,0,0,0,244,245,5,12,0,0,245,246,5,13,0,0,246,252,6,
10,-1,0,247,248,5,12,0,0,248,249,3,22,11,0,249,250,6,10,-1,0,250,252,1,0,
0,0,251,244,1,0,0,0,251,247,1,0,0,0,252,21,1,0,0,0,253,254,5,19,0,0,254,
255,6,11,-1,0,255,23,1,0,0,0,256,257,3,10,5,0,257,258,5,8,0,0,258,261,3,
10,5,0,259,260,5,2,0,0,260,262,3,24,12,0,261,259,1,0,0,0,261,262,1,0,0,0,
262,263,1,0,0,0,263,264,6,12,-1,0,264,273,1,0,0,0,265,268,3,10,5,0,266,267,
5,2,0,0,267,269,3,24,12,0,268,266,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,
0,270,271,6,12,-1,0,271,273,1,0,0,0,272,256,1,0,0,0,272,265,1,0,0,0,273,
25,1,0,0,0,274,275,5,14,0,0,275,280,3,28,14,0,276,277,5,2,0,0,277,279,3,
28,14,0,278,276,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,
281,283,1,0,0,0,282,280,1,0,0,0,283,284,6,13,-1,0,284,311,1,0,0,0,285,286,
5,15,0,0,286,291,3,30,15,0,287,288,5,2,0,0,288,290,3,30,15,0,289,287,1,0,
0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,
291,1,0,0,0,294,295,6,13,-1,0,295,311,1,0,0,0,296,297,5,16,0,0,297,298,5,
13,0,0,298,311,6,13,-1,0,299,300,5,17,0,0,300,302,5,13,0,0,301,303,5,13,
0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,311,6,13,-1,0,305,
307,5,18,0,0,306,308,5,13,0,0,307,306,1,0,0,0,307,308,1,0,0,0,308,309,1,
0,0,0,309,311,6,13,-1,0,310,274,1,0,0,0,310,285,1,0,0,0,310,296,1,0,0,0,
310,299,1,0,0,0,310,305,1,0,0,0,311,27,1,0,0,0,312,313,5,13,0,0,313,318,
6,14,-1,0,314,315,3,22,11,0,315,316,6,14,-1,0,316,318,1,0,0,0,317,312,1,
0,0,0,317,314,1,0,0,0,318,29,1,0,0,0,319,320,5,13,0,0,320,324,6,15,-1,0,
321,322,5,24,0,0,322,324,6,15,-1,0,323,319,1,0,0,0,323,321,1,0,0,0,324,31,
1,0,0,0,33,35,41,48,53,57,63,68,74,78,88,91,114,124,153,163,171,176,184,
191,209,225,238,251,261,268,272,280,291,302,307,310,317,323];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, "';'", "','", "'['", "']'", "'{'", "'}'", 
                            "'!'", "'-'", null, null, "'#'", "'='", null, 
                            "'DCD'", "'DCB'", "'EQU'", "'FILL'", "'ALIGN'" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "BANG", "HYPHEN", "OPCODE", 
                             "REGISTER", "POUND", "EQUALS", "INT", "DCD", 
                             "DCB", "EQU", "FILL", "ALIGN", "ID", "NEWLINE", 
                             "WS", "INVALID", "COMMENT_TEXT", "STRING", 
                             "DOUBLE_QUOTE" ];
    static ruleNames = [ "program", "line", "label", "instruction", "operand", 
                         "register", "writebackRegister", "flexOperandSpec", 
                         "offset", "immediate", "pseudoImmediate", "symbol", 
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
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2081280) !== 0)) {
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
	            if(_la===19) {
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
	            if(_la===19) {
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
	            if(_la===19) {
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
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 531496) !== 0)) {
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
	            localctx.s = this.symbol();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.text);
	                
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
	            if(_la===8) {
	                this.state = 113;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
	            }

	            this.state = 116;
	            localctx.roff = this.register();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name));
	                
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
	            if(_la===8) {
	                this.state = 123;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
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
	                            new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name),
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
	            localctx.s = this.symbol();
	            this.state = 161;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 162;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.text, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
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
	            if(_la===8) {
	                this.state = 170;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
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


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
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
	            if(_la===8) {
	                this.state = 183;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
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
	                            new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name),
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
	            localctx.s = this.symbol();

	                    localctx.op =  localctx.s.text;
	                
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
	            localctx.s = this.symbol();

	                    localctx.value =  new AST.PseudoImmediate(localctx.s.text);
	                
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ARM32Parser.RULE_symbol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        localctx.t = this.match(ARM32Parser.ID);

	                localctx.text =  (localctx.t == null ? null : localctx.t.text);
	            
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



	registerSet() {
	    let localctx = new RegisterSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ARM32Parser.RULE_registerSet);
	    var _la = 0;
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            localctx.r1 = this.register();
	            this.state = 257;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 258;
	            localctx.r2 = this.register();
	            this.state = 261;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 259;
	                this.match(ARM32Parser.COMMA);
	                this.state = 260;
	                localctx.child = this.registerSet();
	            }


	                    localctx.registers =  new AST.RegisterSet(localctx.r1.reg, localctx.r2.reg, localctx.child ? localctx.child.registers : null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 265;
	            localctx.r1 = this.register();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 266;
	                this.match(ARM32Parser.COMMA);
	                this.state = 267;
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
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(ARM32Parser.DCD);

	            this.state = 275;
	            localctx._dcd_value = this.dcd_value();
	            localctx.dcd_values.push(localctx._dcd_value);
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 276;
	                this.match(ARM32Parser.COMMA);
	                this.state = 277;
	                localctx._dcd_value = this.dcd_value();
	                localctx.dcd_values.push(localctx._dcd_value);
	                this.state = 282;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.dcd_values.map(node => node.n));
	                
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            this.match(ARM32Parser.DCB);

	            this.state = 286;
	            localctx._dcb_value = this.dcb_value();
	            localctx.dcb_values.push(localctx._dcb_value);
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 287;
	                this.match(ARM32Parser.COMMA);
	                this.state = 288;
	                localctx._dcb_value = this.dcb_value();
	                localctx.dcb_values.push(localctx._dcb_value);
	                this.state = 293;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCB(localctx.dcb_values.map(node => node.n));
	                
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 296;
	            this.match(ARM32Parser.EQU);
	            this.state = 297;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective((localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 299;
	            this.match(ARM32Parser.FILL);
	            this.state = 300;
	            localctx.bytes = this.match(ARM32Parser.INT);
	            this.state = 302;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 301;
	                localctx.value = this.match(ARM32Parser.INT);
	            }


	                    localctx.d =  new AST.FillDirective((localctx.bytes == null ? null : localctx.bytes.text), (localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 305;
	            this.match(ARM32Parser.ALIGN);
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 306;
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
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 314;
	            localctx._symbol = this.symbol();

	                    localctx.n =  localctx._symbol.text;
	                
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



	dcb_value() {
	    let localctx = new Dcb_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ARM32Parser.RULE_dcb_value);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 321;
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
ARM32Parser.OPCODE = 9;
ARM32Parser.REGISTER = 10;
ARM32Parser.POUND = 11;
ARM32Parser.EQUALS = 12;
ARM32Parser.INT = 13;
ARM32Parser.DCD = 14;
ARM32Parser.DCB = 15;
ARM32Parser.EQU = 16;
ARM32Parser.FILL = 17;
ARM32Parser.ALIGN = 18;
ARM32Parser.ID = 19;
ARM32Parser.NEWLINE = 20;
ARM32Parser.WS = 21;
ARM32Parser.INVALID = 22;
ARM32Parser.COMMENT_TEXT = 23;
ARM32Parser.STRING = 24;
ARM32Parser.DOUBLE_QUOTE = 25;

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
ARM32Parser.RULE_symbol = 11;
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
        this._HYPHEN = null;
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

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
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

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_symbol;
        this.text = null
        this.t = null;
    }

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
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
        this._symbol = null;
    }

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
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
ARM32Parser.SymbolContext = SymbolContext; 
ARM32Parser.RegisterSetContext = RegisterSetContext; 
ARM32Parser.DirectiveContext = DirectiveContext; 
ARM32Parser.Dcd_valueContext = Dcd_valueContext; 
ARM32Parser.Dcb_valueContext = Dcb_valueContext; 
