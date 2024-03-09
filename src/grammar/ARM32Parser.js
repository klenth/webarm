// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,28,319,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,0,1,1,3,1,51,8,1,1,1,4,1,54,8,
1,11,1,12,1,55,1,1,1,1,3,1,60,8,1,1,1,1,1,4,1,64,8,1,11,1,12,1,65,1,1,1,
1,1,1,3,1,71,8,1,1,1,1,1,4,1,75,8,1,11,1,12,1,76,1,1,1,1,3,1,81,8,1,1,2,
1,2,1,3,1,3,3,3,87,8,3,1,3,3,3,90,8,3,1,3,1,3,1,3,5,3,95,8,3,10,3,12,3,98,
9,3,3,3,100,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,125,8,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,3,5,135,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,164,8,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,174,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,182,
8,5,1,5,1,5,1,5,3,5,187,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,195,8,5,1,5,1,5,
1,5,1,5,1,5,3,5,202,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,3,5,220,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,3,8,236,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
249,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,3,13,267,8,13,1,13,1,13,1,13,1,13,1,13,3,13,274,8,13,1,13,
1,13,3,13,278,8,13,1,14,1,14,1,14,1,14,5,14,284,8,14,10,14,12,14,287,9,14,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,295,8,14,10,14,12,14,298,9,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,308,8,14,1,15,1,15,1,15,1,16,1,16,
1,16,1,16,3,16,317,8,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,0,0,350,0,37,1,0,0,0,2,80,1,0,0,0,4,82,1,0,0,0,6,84,1,0,0,0,8,103,
1,0,0,0,10,219,1,0,0,0,12,221,1,0,0,0,14,224,1,0,0,0,16,235,1,0,0,0,18,248,
1,0,0,0,20,250,1,0,0,0,22,254,1,0,0,0,24,258,1,0,0,0,26,277,1,0,0,0,28,307,
1,0,0,0,30,309,1,0,0,0,32,316,1,0,0,0,34,36,5,20,0,0,35,34,1,0,0,0,36,39,
1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,43,1,0,0,0,39,37,1,0,0,0,40,42,3,
2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,
0,0,45,43,1,0,0,0,46,47,5,0,0,1,47,48,6,0,-1,0,48,1,1,0,0,0,49,51,3,4,2,
0,50,49,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,54,5,20,0,0,53,52,1,0,0,0,
54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,81,6,1,-1,0,58,
60,3,4,2,0,59,58,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,63,3,6,3,0,62,64,
5,20,0,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,67,1,
0,0,0,67,68,6,1,-1,0,68,81,1,0,0,0,69,71,3,4,2,0,70,69,1,0,0,0,70,71,1,0,
0,0,71,72,1,0,0,0,72,74,3,28,14,0,73,75,5,20,0,0,74,73,1,0,0,0,75,76,1,0,
0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,79,6,1,-1,0,79,81,1,0,0,
0,80,50,1,0,0,0,80,59,1,0,0,0,80,70,1,0,0,0,81,3,1,0,0,0,82,83,5,19,0,0,
83,5,1,0,0,0,84,86,3,8,4,0,85,87,5,24,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,
89,1,0,0,0,88,90,5,25,0,0,89,88,1,0,0,0,89,90,1,0,0,0,90,99,1,0,0,0,91,96,
3,10,5,0,92,93,5,2,0,0,93,95,3,10,5,0,94,92,1,0,0,0,95,98,1,0,0,0,96,94,
1,0,0,0,96,97,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,99,91,1,0,0,0,99,100,
1,0,0,0,100,101,1,0,0,0,101,102,6,3,-1,0,102,7,1,0,0,0,103,104,5,9,0,0,104,
9,1,0,0,0,105,106,5,3,0,0,106,107,3,12,6,0,107,108,5,4,0,0,108,109,5,2,0,
0,109,110,3,20,10,0,110,111,6,5,-1,0,111,220,1,0,0,0,112,113,5,3,0,0,113,
114,3,12,6,0,114,115,5,4,0,0,115,116,5,2,0,0,116,117,3,24,12,0,117,118,6,
5,-1,0,118,220,1,0,0,0,119,120,5,3,0,0,120,121,3,12,6,0,121,122,5,4,0,0,
122,124,5,2,0,0,123,125,5,8,0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,
1,0,0,0,126,127,3,12,6,0,127,128,6,5,-1,0,128,220,1,0,0,0,129,130,5,3,0,
0,130,131,3,12,6,0,131,132,5,4,0,0,132,134,5,2,0,0,133,135,5,8,0,0,134,133,
1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,3,12,6,0,137,138,5,2,0,0,
138,139,3,16,8,0,139,140,6,5,-1,0,140,220,1,0,0,0,141,142,3,12,6,0,142,143,
5,2,0,0,143,144,3,16,8,0,144,145,6,5,-1,0,145,220,1,0,0,0,146,147,3,14,7,
0,147,148,6,5,-1,0,148,220,1,0,0,0,149,150,3,12,6,0,150,151,6,5,-1,0,151,
220,1,0,0,0,152,153,5,3,0,0,153,154,3,12,6,0,154,155,5,4,0,0,155,156,6,5,
-1,0,156,220,1,0,0,0,157,158,5,3,0,0,158,159,3,12,6,0,159,160,5,2,0,0,160,
161,3,20,10,0,161,163,5,4,0,0,162,164,5,7,0,0,163,162,1,0,0,0,163,164,1,
0,0,0,164,165,1,0,0,0,165,166,6,5,-1,0,166,220,1,0,0,0,167,168,5,3,0,0,168,
169,3,12,6,0,169,170,5,2,0,0,170,171,3,24,12,0,171,173,5,4,0,0,172,174,5,
7,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,6,5,-1,0,176,
220,1,0,0,0,177,178,5,3,0,0,178,179,3,12,6,0,179,181,5,2,0,0,180,182,5,8,
0,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,184,3,12,6,0,184,
186,5,4,0,0,185,187,5,7,0,0,186,185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,
0,0,188,189,6,5,-1,0,189,220,1,0,0,0,190,191,5,3,0,0,191,192,3,12,6,0,192,
194,5,2,0,0,193,195,5,8,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,
0,0,196,197,3,12,6,0,197,198,5,2,0,0,198,199,3,16,8,0,199,201,5,4,0,0,200,
202,5,7,0,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,204,6,5,
-1,0,204,220,1,0,0,0,205,206,3,20,10,0,206,207,6,5,-1,0,207,220,1,0,0,0,
208,209,3,22,11,0,209,210,6,5,-1,0,210,220,1,0,0,0,211,212,3,24,12,0,212,
213,6,5,-1,0,213,220,1,0,0,0,214,215,5,5,0,0,215,216,3,26,13,0,216,217,5,
6,0,0,217,218,6,5,-1,0,218,220,1,0,0,0,219,105,1,0,0,0,219,112,1,0,0,0,219,
119,1,0,0,0,219,129,1,0,0,0,219,141,1,0,0,0,219,146,1,0,0,0,219,149,1,0,
0,0,219,152,1,0,0,0,219,157,1,0,0,0,219,167,1,0,0,0,219,177,1,0,0,0,219,
190,1,0,0,0,219,205,1,0,0,0,219,208,1,0,0,0,219,211,1,0,0,0,219,214,1,0,
0,0,220,11,1,0,0,0,221,222,5,10,0,0,222,223,6,6,-1,0,223,13,1,0,0,0,224,
225,5,10,0,0,225,226,5,7,0,0,226,227,6,7,-1,0,227,15,1,0,0,0,228,229,5,9,
0,0,229,230,4,8,0,1,230,231,5,11,0,0,231,236,5,13,0,0,232,233,5,9,0,0,233,
234,4,8,1,1,234,236,3,12,6,0,235,228,1,0,0,0,235,232,1,0,0,0,236,17,1,0,
0,0,237,238,3,12,6,0,238,239,6,9,-1,0,239,249,1,0,0,0,240,241,3,12,6,0,241,
242,5,2,0,0,242,243,3,16,8,0,243,244,6,9,-1,0,244,249,1,0,0,0,245,246,3,
20,10,0,246,247,6,9,-1,0,247,249,1,0,0,0,248,237,1,0,0,0,248,240,1,0,0,0,
248,245,1,0,0,0,249,19,1,0,0,0,250,251,5,11,0,0,251,252,5,13,0,0,252,253,
6,10,-1,0,253,21,1,0,0,0,254,255,5,12,0,0,255,256,5,13,0,0,256,257,6,11,
-1,0,257,23,1,0,0,0,258,259,5,19,0,0,259,260,6,12,-1,0,260,25,1,0,0,0,261,
262,3,12,6,0,262,263,5,8,0,0,263,266,3,12,6,0,264,265,5,2,0,0,265,267,3,
26,13,0,266,264,1,0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,269,6,13,-1,
0,269,278,1,0,0,0,270,273,3,12,6,0,271,272,5,2,0,0,272,274,3,26,13,0,273,
271,1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,276,6,13,-1,0,276,278,1,
0,0,0,277,261,1,0,0,0,277,270,1,0,0,0,278,27,1,0,0,0,279,280,5,14,0,0,280,
285,3,30,15,0,281,282,5,2,0,0,282,284,3,30,15,0,283,281,1,0,0,0,284,287,
1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,285,1,0,0,0,
288,289,6,14,-1,0,289,308,1,0,0,0,290,291,5,15,0,0,291,296,3,32,16,0,292,
293,5,2,0,0,293,295,3,32,16,0,294,292,1,0,0,0,295,298,1,0,0,0,296,294,1,
0,0,0,296,297,1,0,0,0,297,299,1,0,0,0,298,296,1,0,0,0,299,300,6,14,-1,0,
300,308,1,0,0,0,301,302,5,16,0,0,302,303,5,13,0,0,303,308,6,14,-1,0,304,
305,5,17,0,0,305,306,5,13,0,0,306,308,6,14,-1,0,307,279,1,0,0,0,307,290,
1,0,0,0,307,301,1,0,0,0,307,304,1,0,0,0,308,29,1,0,0,0,309,310,5,13,0,0,
310,311,6,15,-1,0,311,31,1,0,0,0,312,313,5,13,0,0,313,317,6,16,-1,0,314,
315,5,27,0,0,315,317,6,16,-1,0,316,312,1,0,0,0,316,314,1,0,0,0,317,33,1,
0,0,0,31,37,43,50,55,59,65,70,76,80,86,89,96,99,124,134,163,173,181,186,
194,201,219,235,248,266,273,277,285,296,307,316];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, null, "','", "'['", "']'", "'{'", "'}'", 
                            "'!'", "'-'", null, null, "'#'", "'='", null, 
                            "'DCD'", "'DCB'", "'EQU'", "'FILL'", null, null, 
                            null, null, null, null, "'S'", null, "' '" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "BANG", "HYPHEN", "OPCODE", 
                             "REGISTER", "POUND", "EQUALS", "INT", "DCD", 
                             "DCB", "EQU", "FILL", "SHIFT", "ID", "NEWLINE", 
                             "WS", "INVALID", "COMMENT_TEXT", "S", "COND", 
                             "MNEMONIC_WS", "STRING", "DOUBLE_QUOTE" ];
    static ruleNames = [ "program", "line", "label", "instruction", "opcode", 
                         "operand", "register", "writebackRegister", "flexOperandSpec", 
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
    	case 8:
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
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 34;
	                this.match(ARM32Parser.NEWLINE); 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1819136) !== 0)) {
	            this.state = 40;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 49;
	                localctx.lab = this.label();
	            }

	            this.state = 53; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 52;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 55; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 58;
	                localctx.lab = this.label();
	            }

	            this.state = 61;
	            localctx.inst = this.instruction();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 62;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 65; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 69;
	                localctx.lab = this.label();
	            }

	            this.state = 72;
	            localctx.dir = this.directive();
	            this.state = 74; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 73;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 76; 
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
	        this.state = 82;
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
	        this.state = 84;
	        localctx.op = this.opcode();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 85;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 88;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 531496) !== 0)) {
	            this.state = 91;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 92;
	                this.match(ARM32Parser.COMMA);
	                this.state = 93;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 98;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }


	                localctx.i =  new AST.Instruction((localctx.op == null ? null : this._input.getText(new antlr4.Interval(localctx.op.start,localctx.op.stop))), (localctx.s == null ? null : localctx.s.text) || '', (localctx.cond == null ? null : localctx.cond.text) || '', localctx.operands.map(o => o.op));
	            
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ARM32Parser.RULE_opcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(ARM32Parser.OPCODE);
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
	    this.enterRule(localctx, 10, ARM32Parser.RULE_operand);
	    var _la = 0;
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 106;
	            localctx.r = this.register();
	            this.state = 107;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 108;
	            this.match(ARM32Parser.COMMA);
	            this.state = 109;
	            localctx.i = this.immediate();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.i.value);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 113;
	            localctx.r = this.register();
	            this.state = 114;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 115;
	            this.match(ARM32Parser.COMMA);
	            this.state = 116;
	            localctx.s = this.symbol();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.text);
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
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

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 129;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 130;
	            localctx.r = this.register();
	            this.state = 131;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 132;
	            this.match(ARM32Parser.COMMA);
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 133;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
	            }

	            this.state = 136;
	            localctx.roff = this.register();
	            this.state = 137;
	            this.match(ARM32Parser.COMMA);
	            this.state = 138;
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
	            this.state = 141;
	            localctx.r = this.register();
	            this.state = 142;
	            this.match(ARM32Parser.COMMA);
	            this.state = 143;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 146;
	            localctx.wr = this.writebackRegister();

	                    localctx.op =  localctx.wr.reg;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 149;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 152;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 153;
	            localctx.r = this.register();
	            this.state = 154;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, null, null);
	                
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 157;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 158;
	            localctx.r = this.register();
	            this.state = 159;
	            this.match(ARM32Parser.COMMA);
	            this.state = 160;
	            localctx.i = this.immediate();
	            this.state = 161;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 162;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.i.value, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 167;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 168;
	            localctx.r = this.register();
	            this.state = 169;
	            this.match(ARM32Parser.COMMA);
	            this.state = 170;
	            localctx.s = this.symbol();
	            this.state = 171;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 172;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.text, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 177;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 178;
	            localctx.r = this.register();
	            this.state = 179;
	            this.match(ARM32Parser.COMMA);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 180;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
	            }

	            this.state = 183;
	            localctx.roff = this.register();
	            this.state = 184;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 185;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._HYPHEN == null ? null : localctx._HYPHEN.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 190;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 191;
	            localctx.r = this.register();
	            this.state = 192;
	            this.match(ARM32Parser.COMMA);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 193;
	                localctx._HYPHEN = this.match(ARM32Parser.HYPHEN);
	            }

	            this.state = 196;
	            localctx.roff = this.register();
	            this.state = 197;
	            this.match(ARM32Parser.COMMA);
	            this.state = 198;
	            localctx.f = this.flexOperandSpec();
	            this.state = 199;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 200;
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
	            this.state = 205;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 208;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 211;
	            localctx.s = this.symbol();

	                    localctx.op =  localctx.s.text;
	                
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 214;
	            this.match(ARM32Parser.LBRACE);
	            this.state = 215;
	            localctx.rs = this.registerSet();
	            this.state = 216;
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
	    this.enterRule(localctx, 12, ARM32Parser.RULE_register);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
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
	    this.enterRule(localctx, 14, ARM32Parser.RULE_writebackRegister);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        localctx.r = this.match(ARM32Parser.REGISTER);
	        this.state = 225;
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
	    this.enterRule(localctx, 16, ARM32Parser.RULE_flexOperandSpec);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 229;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 230;
	            this.match(ARM32Parser.POUND);
	            this.state = 231;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 233;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 234;
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
	    this.enterRule(localctx, 18, ARM32Parser.RULE_offset);
	    try {
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 240;
	            localctx.r = this.register();
	            this.state = 241;
	            this.match(ARM32Parser.COMMA);
	            this.state = 242;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 245;
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
	    this.enterRule(localctx, 20, ARM32Parser.RULE_immediate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(ARM32Parser.POUND);
	        this.state = 251;
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
	    this.enterRule(localctx, 22, ARM32Parser.RULE_pseudoImmediate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 255;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.PseudoImmediate((localctx.v == null ? null : localctx.v.text));
	            
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
	    this.enterRule(localctx, 24, ARM32Parser.RULE_symbol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
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
	    this.enterRule(localctx, 26, ARM32Parser.RULE_registerSet);
	    var _la = 0;
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            localctx.r1 = this.register();
	            this.state = 262;
	            this.match(ARM32Parser.HYPHEN);
	            this.state = 263;
	            localctx.r2 = this.register();
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 264;
	                this.match(ARM32Parser.COMMA);
	                this.state = 265;
	                localctx.child = this.registerSet();
	            }


	                    localctx.registers =  new AST.RegisterSet(localctx.r1.reg, localctx.r2.reg, localctx.child ? localctx.child.registers : null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 270;
	            localctx.r1 = this.register();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 271;
	                this.match(ARM32Parser.COMMA);
	                this.state = 272;
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
	    this.enterRule(localctx, 28, ARM32Parser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 307;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.match(ARM32Parser.DCD);

	            this.state = 280;
	            localctx._dcd_value = this.dcd_value();
	            localctx.dcd_values.push(localctx._dcd_value);
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 281;
	                this.match(ARM32Parser.COMMA);
	                this.state = 282;
	                localctx._dcd_value = this.dcd_value();
	                localctx.dcd_values.push(localctx._dcd_value);
	                this.state = 287;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.dcd_values.map(node => node.n));
	                
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.match(ARM32Parser.DCB);

	            this.state = 291;
	            localctx._dcb_value = this.dcb_value();
	            localctx.dcb_values.push(localctx._dcb_value);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 292;
	                this.match(ARM32Parser.COMMA);
	                this.state = 293;
	                localctx._dcb_value = this.dcb_value();
	                localctx.dcb_values.push(localctx._dcb_value);
	                this.state = 298;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCB(localctx.dcb_values.map(node => node.n));
	                
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 301;
	            this.match(ARM32Parser.EQU);
	            this.state = 302;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective((localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 304;
	            this.match(ARM32Parser.FILL);
	            this.state = 305;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.FillDirective((localctx.value == null ? null : localctx.value.text));
	                
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
	    this.enterRule(localctx, 30, ARM32Parser.RULE_dcd_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        localctx._INT = this.match(ARM32Parser.INT);

	                localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	            
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
	    this.enterRule(localctx, 32, ARM32Parser.RULE_dcb_value);
	    try {
	        this.state = 316;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 314;
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
ARM32Parser.SHIFT = 18;
ARM32Parser.ID = 19;
ARM32Parser.NEWLINE = 20;
ARM32Parser.WS = 21;
ARM32Parser.INVALID = 22;
ARM32Parser.COMMENT_TEXT = 23;
ARM32Parser.S = 24;
ARM32Parser.COND = 25;
ARM32Parser.MNEMONIC_WS = 26;
ARM32Parser.STRING = 27;
ARM32Parser.DOUBLE_QUOTE = 28;

ARM32Parser.RULE_program = 0;
ARM32Parser.RULE_line = 1;
ARM32Parser.RULE_label = 2;
ARM32Parser.RULE_instruction = 3;
ARM32Parser.RULE_opcode = 4;
ARM32Parser.RULE_operand = 5;
ARM32Parser.RULE_register = 6;
ARM32Parser.RULE_writebackRegister = 7;
ARM32Parser.RULE_flexOperandSpec = 8;
ARM32Parser.RULE_offset = 9;
ARM32Parser.RULE_immediate = 10;
ARM32Parser.RULE_pseudoImmediate = 11;
ARM32Parser.RULE_symbol = 12;
ARM32Parser.RULE_registerSet = 13;
ARM32Parser.RULE_directive = 14;
ARM32Parser.RULE_dcd_value = 15;
ARM32Parser.RULE_dcb_value = 16;

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
        this.s = null;
        this.cond = null;
        this._operand = null;
        this.operands = [];
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	S() {
	    return this.getToken(ARM32Parser.S, 0);
	};

	COND() {
	    return this.getToken(ARM32Parser.COND, 0);
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



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ARM32Parser.RULE_opcode;
    }

	OPCODE() {
	    return this.getToken(ARM32Parser.OPCODE, 0);
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
    }

	EQUALS() {
	    return this.getToken(ARM32Parser.EQUALS, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
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

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	FILL() {
	    return this.getToken(ARM32Parser.FILL, 0);
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
    }

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
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
ARM32Parser.OpcodeContext = OpcodeContext; 
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
