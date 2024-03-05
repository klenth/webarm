// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,26,285,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,5,0,38,8,0,10,0,
12,0,41,9,0,1,0,1,0,1,0,1,1,3,1,47,8,1,1,1,4,1,50,8,1,11,1,12,1,51,1,1,1,
1,3,1,56,8,1,1,1,1,1,4,1,60,8,1,11,1,12,1,61,1,1,1,1,1,1,3,1,67,8,1,1,1,
1,1,4,1,71,8,1,11,1,12,1,72,1,1,1,1,3,1,77,8,1,1,2,1,2,1,3,1,3,3,3,83,8,
3,1,3,3,3,86,8,3,1,3,1,3,1,3,5,3,91,8,3,10,3,12,3,94,9,3,3,3,96,8,3,1,3,
1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,3,5,121,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,131,8,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,3,5,157,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
167,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,175,8,5,1,5,1,5,1,5,3,5,180,8,5,1,5,
1,5,1,5,1,5,1,5,1,5,3,5,188,8,5,1,5,1,5,1,5,1,5,1,5,3,5,195,8,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,208,8,5,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,3,7,220,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
3,8,233,8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,
1,12,1,12,5,12,250,8,12,10,12,12,12,253,9,12,1,12,1,12,1,12,1,12,1,12,1,
12,5,12,261,8,12,10,12,12,12,264,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,3,12,274,8,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,283,8,14,1,14,
0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,0,313,0,33,1,0,0,0,2,76,
1,0,0,0,4,78,1,0,0,0,6,80,1,0,0,0,8,99,1,0,0,0,10,207,1,0,0,0,12,209,1,0,
0,0,14,219,1,0,0,0,16,232,1,0,0,0,18,234,1,0,0,0,20,238,1,0,0,0,22,242,1,
0,0,0,24,273,1,0,0,0,26,275,1,0,0,0,28,282,1,0,0,0,30,32,5,18,0,0,31,30,
1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,39,1,0,0,0,35,33,1,
0,0,0,36,38,3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,
0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,44,6,0,-1,0,44,1,1,0,0,
0,45,47,3,4,2,0,46,45,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,50,5,18,0,0,
49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,
77,6,1,-1,0,54,56,3,4,2,0,55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,59,
3,6,3,0,58,60,5,18,0,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,
0,0,0,62,63,1,0,0,0,63,64,6,1,-1,0,64,77,1,0,0,0,65,67,3,4,2,0,66,65,1,0,
0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,70,3,24,12,0,69,71,5,18,0,0,70,69,1,0,
0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,6,1,-1,
0,75,77,1,0,0,0,76,46,1,0,0,0,76,55,1,0,0,0,76,66,1,0,0,0,77,3,1,0,0,0,78,
79,5,17,0,0,79,5,1,0,0,0,80,82,3,8,4,0,81,83,5,22,0,0,82,81,1,0,0,0,82,83,
1,0,0,0,83,85,1,0,0,0,84,86,5,23,0,0,85,84,1,0,0,0,85,86,1,0,0,0,86,95,1,
0,0,0,87,92,3,10,5,0,88,89,5,2,0,0,89,91,3,10,5,0,90,88,1,0,0,0,91,94,1,
0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,95,87,1,0,
0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,6,3,-1,0,98,7,1,0,0,0,99,100,5,6,0,
0,100,9,1,0,0,0,101,102,5,3,0,0,102,103,3,12,6,0,103,104,5,4,0,0,104,105,
5,2,0,0,105,106,3,18,9,0,106,107,6,5,-1,0,107,208,1,0,0,0,108,109,5,3,0,
0,109,110,3,12,6,0,110,111,5,4,0,0,111,112,5,2,0,0,112,113,3,22,11,0,113,
114,6,5,-1,0,114,208,1,0,0,0,115,116,5,3,0,0,116,117,3,12,6,0,117,118,5,
4,0,0,118,120,5,2,0,0,119,121,5,10,0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,
122,1,0,0,0,122,123,3,12,6,0,123,124,6,5,-1,0,124,208,1,0,0,0,125,126,5,
3,0,0,126,127,3,12,6,0,127,128,5,4,0,0,128,130,5,2,0,0,129,131,5,10,0,0,
130,129,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,3,12,6,0,133,134,
5,2,0,0,134,135,3,14,7,0,135,136,6,5,-1,0,136,208,1,0,0,0,137,138,3,12,6,
0,138,139,5,2,0,0,139,140,3,14,7,0,140,141,6,5,-1,0,141,208,1,0,0,0,142,
143,3,12,6,0,143,144,6,5,-1,0,144,208,1,0,0,0,145,146,5,3,0,0,146,147,3,
12,6,0,147,148,5,4,0,0,148,149,6,5,-1,0,149,208,1,0,0,0,150,151,5,3,0,0,
151,152,3,12,6,0,152,153,5,2,0,0,153,154,3,18,9,0,154,156,5,4,0,0,155,157,
5,5,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,6,5,-1,0,
159,208,1,0,0,0,160,161,5,3,0,0,161,162,3,12,6,0,162,163,5,2,0,0,163,164,
3,22,11,0,164,166,5,4,0,0,165,167,5,5,0,0,166,165,1,0,0,0,166,167,1,0,0,
0,167,168,1,0,0,0,168,169,6,5,-1,0,169,208,1,0,0,0,170,171,5,3,0,0,171,172,
3,12,6,0,172,174,5,2,0,0,173,175,5,10,0,0,174,173,1,0,0,0,174,175,1,0,0,
0,175,176,1,0,0,0,176,177,3,12,6,0,177,179,5,4,0,0,178,180,5,5,0,0,179,178,
1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,6,5,-1,0,182,208,1,0,0,0,
183,184,5,3,0,0,184,185,3,12,6,0,185,187,5,2,0,0,186,188,5,10,0,0,187,186,
1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,3,12,6,0,190,191,5,2,0,0,
191,192,3,14,7,0,192,194,5,4,0,0,193,195,5,5,0,0,194,193,1,0,0,0,194,195,
1,0,0,0,195,196,1,0,0,0,196,197,6,5,-1,0,197,208,1,0,0,0,198,199,3,18,9,
0,199,200,6,5,-1,0,200,208,1,0,0,0,201,202,3,20,10,0,202,203,6,5,-1,0,203,
208,1,0,0,0,204,205,3,22,11,0,205,206,6,5,-1,0,206,208,1,0,0,0,207,101,1,
0,0,0,207,108,1,0,0,0,207,115,1,0,0,0,207,125,1,0,0,0,207,137,1,0,0,0,207,
142,1,0,0,0,207,145,1,0,0,0,207,150,1,0,0,0,207,160,1,0,0,0,207,170,1,0,
0,0,207,183,1,0,0,0,207,198,1,0,0,0,207,201,1,0,0,0,207,204,1,0,0,0,208,
11,1,0,0,0,209,210,5,7,0,0,210,211,6,6,-1,0,211,13,1,0,0,0,212,213,5,6,0,
0,213,214,4,7,0,1,214,215,5,8,0,0,215,220,5,11,0,0,216,217,5,6,0,0,217,218,
4,7,1,1,218,220,3,12,6,0,219,212,1,0,0,0,219,216,1,0,0,0,220,15,1,0,0,0,
221,222,3,12,6,0,222,223,6,8,-1,0,223,233,1,0,0,0,224,225,3,12,6,0,225,226,
5,2,0,0,226,227,3,14,7,0,227,228,6,8,-1,0,228,233,1,0,0,0,229,230,3,18,9,
0,230,231,6,8,-1,0,231,233,1,0,0,0,232,221,1,0,0,0,232,224,1,0,0,0,232,229,
1,0,0,0,233,17,1,0,0,0,234,235,5,8,0,0,235,236,5,11,0,0,236,237,6,9,-1,0,
237,19,1,0,0,0,238,239,5,9,0,0,239,240,5,11,0,0,240,241,6,10,-1,0,241,21,
1,0,0,0,242,243,5,17,0,0,243,244,6,11,-1,0,244,23,1,0,0,0,245,246,5,12,0,
0,246,251,3,26,13,0,247,248,5,2,0,0,248,250,3,26,13,0,249,247,1,0,0,0,250,
253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,1,0,
0,0,254,255,6,12,-1,0,255,274,1,0,0,0,256,257,5,13,0,0,257,262,3,28,14,0,
258,259,5,2,0,0,259,261,3,28,14,0,260,258,1,0,0,0,261,264,1,0,0,0,262,260,
1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,6,12,-1,
0,266,274,1,0,0,0,267,268,5,14,0,0,268,269,5,11,0,0,269,274,6,12,-1,0,270,
271,5,15,0,0,271,272,5,11,0,0,272,274,6,12,-1,0,273,245,1,0,0,0,273,256,
1,0,0,0,273,267,1,0,0,0,273,270,1,0,0,0,274,25,1,0,0,0,275,276,5,11,0,0,
276,277,6,13,-1,0,277,27,1,0,0,0,278,279,5,11,0,0,279,283,6,14,-1,0,280,
281,5,25,0,0,281,283,6,14,-1,0,282,278,1,0,0,0,282,280,1,0,0,0,283,29,1,
0,0,0,28,33,39,46,51,55,61,66,72,76,82,85,92,95,120,130,156,166,174,179,
187,194,207,219,232,251,262,273,282];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, null, "','", "'['", "']'", "'!'", null, 
                            null, "'#'", "'='", null, null, "'DCD'", "'DCB'", 
                            "'EQU'", "'FILL'", null, null, null, null, null, 
                            null, "'S'", null, "' '" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "BANG", "OPCODE", "REGISTER", "POUND", "EQUALS", 
                             "SIGN", "INT", "DCD", "DCB", "EQU", "FILL", 
                             "SHIFT", "ID", "NEWLINE", "WS", "INVALID", 
                             "COMMENT_TEXT", "S", "COND", "MNEMONIC_WS", 
                             "STRING", "DOUBLE_QUOTE" ];
    static ruleNames = [ "program", "line", "label", "instruction", "opcode", 
                         "operand", "register", "flexOperandSpec", "offset", 
                         "immediate", "pseudoImmediate", "symbol", "directive", 
                         "dcd_value", "dcb_value" ];

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
	        this.state = 33;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 30;
	                this.match(ARM32Parser.NEWLINE); 
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 454720) !== 0)) {
	            this.state = 36;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 45;
	                localctx.lab = this.label();
	            }

	            this.state = 49; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 48;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 51; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 54;
	                localctx.lab = this.label();
	            }

	            this.state = 57;
	            localctx.inst = this.instruction();
	            this.state = 59; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 58;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 61; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 65;
	                localctx.lab = this.label();
	            }

	            this.state = 68;
	            localctx.dir = this.directive();
	            this.state = 70; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 69;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 72; 
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
	        this.state = 78;
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
	        this.state = 80;
	        localctx.op = this.opcode();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 81;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 84;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 131976) !== 0)) {
	            this.state = 87;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 88;
	                this.match(ARM32Parser.COMMA);
	                this.state = 89;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 94;
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
	        this.state = 99;
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
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 102;
	            localctx.r = this.register();
	            this.state = 103;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 104;
	            this.match(ARM32Parser.COMMA);
	            this.state = 105;
	            localctx.i = this.immediate();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.i.value);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 109;
	            localctx.r = this.register();
	            this.state = 110;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 111;
	            this.match(ARM32Parser.COMMA);
	            this.state = 112;
	            localctx.s = this.symbol();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.text);
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 116;
	            localctx.r = this.register();
	            this.state = 117;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 118;
	            this.match(ARM32Parser.COMMA);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 119;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 122;
	            localctx.roff = this.register();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 125;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 126;
	            localctx.r = this.register();
	            this.state = 127;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 128;
	            this.match(ARM32Parser.COMMA);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 129;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 132;
	            localctx.roff = this.register();
	            this.state = 133;
	            this.match(ARM32Parser.COMMA);
	            this.state = 134;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.PostindexedOperand(
	                        localctx.r.reg,
	                        new AST.FlexOperand(
	                            new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name),
	                            localctx.f.op.text,
	                            localctx.f.amount !== null ? localctx.f.amount.text : null,
	                            localctx.f.register() !== null ? localctx.f.register().reg : null
	                        )
	                    );
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
	            localctx.r = this.register();
	            this.state = 138;
	            this.match(ARM32Parser.COMMA);
	            this.state = 139;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 142;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 145;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 146;
	            localctx.r = this.register();
	            this.state = 147;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, null, null);
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 150;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 151;
	            localctx.r = this.register();
	            this.state = 152;
	            this.match(ARM32Parser.COMMA);
	            this.state = 153;
	            localctx.i = this.immediate();
	            this.state = 154;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 155;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.i.value, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 160;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 161;
	            localctx.r = this.register();
	            this.state = 162;
	            this.match(ARM32Parser.COMMA);
	            this.state = 163;
	            localctx.s = this.symbol();
	            this.state = 164;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 165;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.text, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 170;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 171;
	            localctx.r = this.register();
	            this.state = 172;
	            this.match(ARM32Parser.COMMA);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 173;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 176;
	            localctx.roff = this.register();
	            this.state = 177;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 178;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 183;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 184;
	            localctx.r = this.register();
	            this.state = 185;
	            this.match(ARM32Parser.COMMA);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 186;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 189;
	            localctx.roff = this.register();
	            this.state = 190;
	            this.match(ARM32Parser.COMMA);
	            this.state = 191;
	            localctx.f = this.flexOperandSpec();
	            this.state = 192;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 193;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(
	                        localctx.r.reg,
	                        new AST.FlexOperand(
	                            new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name),
	                            localctx.f.op.text,
	                            localctx.f.amount !== null ? localctx.f.amount.text : null,
	                            localctx.f.register() !== null ? localctx.f.register().reg : null
	                        ),
	                        !!(localctx._BANG == null ? null : localctx._BANG.text)
	                    );
	                
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 198;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 201;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 204;
	            localctx.s = this.symbol();

	                    localctx.op =  localctx.s.text;
	                
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
	        this.state = 209;
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



	flexOperandSpec() {
	    let localctx = new FlexOperandSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ARM32Parser.RULE_flexOperandSpec);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 213;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 214;
	            this.match(ARM32Parser.POUND);
	            this.state = 215;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 217;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 218;
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
	        this.state = 232;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            localctx.r = this.register();
	            this.state = 225;
	            this.match(ARM32Parser.COMMA);
	            this.state = 226;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 229;
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
	        this.state = 234;
	        this.match(ARM32Parser.POUND);
	        this.state = 235;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 239;
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
	    this.enterRule(localctx, 22, ARM32Parser.RULE_symbol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ARM32Parser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 245;
	            this.match(ARM32Parser.DCD);

	            this.state = 246;
	            localctx._dcd_value = this.dcd_value();
	            localctx.dcd_values.push(localctx._dcd_value);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 247;
	                this.match(ARM32Parser.COMMA);
	                this.state = 248;
	                localctx._dcd_value = this.dcd_value();
	                localctx.dcd_values.push(localctx._dcd_value);
	                this.state = 253;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.dcd_values.map(node => node.n));
	                
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 256;
	            this.match(ARM32Parser.DCB);

	            this.state = 257;
	            localctx._dcb_value = this.dcb_value();
	            localctx.dcb_values.push(localctx._dcb_value);
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 258;
	                this.match(ARM32Parser.COMMA);
	                this.state = 259;
	                localctx._dcb_value = this.dcb_value();
	                localctx.dcb_values.push(localctx._dcb_value);
	                this.state = 264;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCB(localctx.dcb_values.map(node => node.n));
	                
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.match(ARM32Parser.EQU);
	            this.state = 268;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective((localctx.value == null ? null : localctx.value.text));
	                
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 270;
	            this.match(ARM32Parser.FILL);
	            this.state = 271;
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
	    this.enterRule(localctx, 26, ARM32Parser.RULE_dcd_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
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
	    this.enterRule(localctx, 28, ARM32Parser.RULE_dcb_value);
	    try {
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            localctx._INT = this.match(ARM32Parser.INT);

	                    localctx.n =  (localctx._INT == null ? null : localctx._INT.text);
	                
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
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
ARM32Parser.BANG = 5;
ARM32Parser.OPCODE = 6;
ARM32Parser.REGISTER = 7;
ARM32Parser.POUND = 8;
ARM32Parser.EQUALS = 9;
ARM32Parser.SIGN = 10;
ARM32Parser.INT = 11;
ARM32Parser.DCD = 12;
ARM32Parser.DCB = 13;
ARM32Parser.EQU = 14;
ARM32Parser.FILL = 15;
ARM32Parser.SHIFT = 16;
ARM32Parser.ID = 17;
ARM32Parser.NEWLINE = 18;
ARM32Parser.WS = 19;
ARM32Parser.INVALID = 20;
ARM32Parser.COMMENT_TEXT = 21;
ARM32Parser.S = 22;
ARM32Parser.COND = 23;
ARM32Parser.MNEMONIC_WS = 24;
ARM32Parser.STRING = 25;
ARM32Parser.DOUBLE_QUOTE = 26;

ARM32Parser.RULE_program = 0;
ARM32Parser.RULE_line = 1;
ARM32Parser.RULE_label = 2;
ARM32Parser.RULE_instruction = 3;
ARM32Parser.RULE_opcode = 4;
ARM32Parser.RULE_operand = 5;
ARM32Parser.RULE_register = 6;
ARM32Parser.RULE_flexOperandSpec = 7;
ARM32Parser.RULE_offset = 8;
ARM32Parser.RULE_immediate = 9;
ARM32Parser.RULE_pseudoImmediate = 10;
ARM32Parser.RULE_symbol = 11;
ARM32Parser.RULE_directive = 12;
ARM32Parser.RULE_dcd_value = 13;
ARM32Parser.RULE_dcb_value = 14;

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
        this._SIGN = null;
        this.roff = null;
        this.f = null;
        this._BANG = null;
        this.pi = null;
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

	SIGN() {
	    return this.getToken(ARM32Parser.SIGN, 0);
	};

	flexOperandSpec() {
	    return this.getTypedRuleContext(FlexOperandSpecContext,0);
	};

	BANG() {
	    return this.getToken(ARM32Parser.BANG, 0);
	};

	pseudoImmediate() {
	    return this.getTypedRuleContext(PseudoImmediateContext,0);
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
ARM32Parser.FlexOperandSpecContext = FlexOperandSpecContext; 
ARM32Parser.OffsetContext = OffsetContext; 
ARM32Parser.ImmediateContext = ImmediateContext; 
ARM32Parser.PseudoImmediateContext = PseudoImmediateContext; 
ARM32Parser.SymbolContext = SymbolContext; 
ARM32Parser.DirectiveContext = DirectiveContext; 
ARM32Parser.Dcd_valueContext = Dcd_valueContext; 
ARM32Parser.Dcb_valueContext = Dcb_valueContext; 
