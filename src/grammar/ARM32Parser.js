// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,22,260,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,
1,0,1,1,3,1,43,8,1,1,1,4,1,46,8,1,11,1,12,1,47,1,1,1,1,3,1,52,8,1,1,1,1,
1,4,1,56,8,1,11,1,12,1,57,1,1,1,1,1,1,3,1,63,8,1,1,1,1,1,4,1,67,8,1,11,1,
12,1,68,1,1,1,1,3,1,73,8,1,1,2,1,2,1,3,1,3,3,3,79,8,3,1,3,3,3,82,8,3,1,3,
1,3,1,3,5,3,87,8,3,10,3,12,3,90,9,3,3,3,92,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,117,
8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,127,8,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
3,5,153,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,163,8,5,1,5,1,5,1,5,1,5,
1,5,1,5,3,5,171,8,5,1,5,1,5,1,5,3,5,176,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
184,8,5,1,5,1,5,1,5,1,5,1,5,3,5,191,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,3,5,204,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,216,
8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,229,8,8,1,9,1,9,1,9,
1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,246,8,12,
10,12,12,12,249,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,258,8,12,1,
12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,287,0,29,1,0,0,0,2,72,1,
0,0,0,4,74,1,0,0,0,6,76,1,0,0,0,8,95,1,0,0,0,10,203,1,0,0,0,12,205,1,0,0,
0,14,215,1,0,0,0,16,228,1,0,0,0,18,230,1,0,0,0,20,234,1,0,0,0,22,238,1,0,
0,0,24,257,1,0,0,0,26,28,5,17,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,
0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,
0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,
38,39,5,0,0,1,39,40,6,0,-1,0,40,1,1,0,0,0,41,43,3,4,2,0,42,41,1,0,0,0,42,
43,1,0,0,0,43,45,1,0,0,0,44,46,5,17,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,
1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,73,6,1,-1,0,50,52,3,4,2,0,51,50,1,
0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,55,3,6,3,0,54,56,5,17,0,0,55,54,1,0,
0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,6,1,-1,
0,60,73,1,0,0,0,61,63,3,4,2,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,
64,66,3,24,12,0,65,67,5,17,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,
68,69,1,0,0,0,69,70,1,0,0,0,70,71,6,1,-1,0,71,73,1,0,0,0,72,42,1,0,0,0,72,
51,1,0,0,0,72,62,1,0,0,0,73,3,1,0,0,0,74,75,5,16,0,0,75,5,1,0,0,0,76,78,
3,8,4,0,77,79,5,20,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,82,5,
21,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,91,1,0,0,0,83,88,3,10,5,0,84,85,5,
2,0,0,85,87,3,10,5,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,
0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,
0,93,94,6,3,-1,0,94,7,1,0,0,0,95,96,5,6,0,0,96,9,1,0,0,0,97,98,5,3,0,0,98,
99,3,12,6,0,99,100,5,4,0,0,100,101,5,2,0,0,101,102,3,18,9,0,102,103,6,5,
-1,0,103,204,1,0,0,0,104,105,5,3,0,0,105,106,3,12,6,0,106,107,5,4,0,0,107,
108,5,2,0,0,108,109,3,22,11,0,109,110,6,5,-1,0,110,204,1,0,0,0,111,112,5,
3,0,0,112,113,3,12,6,0,113,114,5,4,0,0,114,116,5,2,0,0,115,117,5,10,0,0,
116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,3,12,6,0,119,120,
6,5,-1,0,120,204,1,0,0,0,121,122,5,3,0,0,122,123,3,12,6,0,123,124,5,4,0,
0,124,126,5,2,0,0,125,127,5,10,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,
1,0,0,0,128,129,3,12,6,0,129,130,5,2,0,0,130,131,3,14,7,0,131,132,6,5,-1,
0,132,204,1,0,0,0,133,134,3,12,6,0,134,135,5,2,0,0,135,136,3,14,7,0,136,
137,6,5,-1,0,137,204,1,0,0,0,138,139,3,12,6,0,139,140,6,5,-1,0,140,204,1,
0,0,0,141,142,5,3,0,0,142,143,3,12,6,0,143,144,5,4,0,0,144,145,6,5,-1,0,
145,204,1,0,0,0,146,147,5,3,0,0,147,148,3,12,6,0,148,149,5,2,0,0,149,150,
3,18,9,0,150,152,5,4,0,0,151,153,5,5,0,0,152,151,1,0,0,0,152,153,1,0,0,0,
153,154,1,0,0,0,154,155,6,5,-1,0,155,204,1,0,0,0,156,157,5,3,0,0,157,158,
3,12,6,0,158,159,5,2,0,0,159,160,3,22,11,0,160,162,5,4,0,0,161,163,5,5,0,
0,162,161,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,165,6,5,-1,0,165,204,
1,0,0,0,166,167,5,3,0,0,167,168,3,12,6,0,168,170,5,2,0,0,169,171,5,10,0,
0,170,169,1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,173,3,12,6,0,173,175,
5,4,0,0,174,176,5,5,0,0,175,174,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,
177,178,6,5,-1,0,178,204,1,0,0,0,179,180,5,3,0,0,180,181,3,12,6,0,181,183,
5,2,0,0,182,184,5,10,0,0,183,182,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,
185,186,3,12,6,0,186,187,5,2,0,0,187,188,3,14,7,0,188,190,5,4,0,0,189,191,
5,5,0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,6,5,-1,0,
193,204,1,0,0,0,194,195,3,18,9,0,195,196,6,5,-1,0,196,204,1,0,0,0,197,198,
3,20,10,0,198,199,6,5,-1,0,199,204,1,0,0,0,200,201,3,22,11,0,201,202,6,5,
-1,0,202,204,1,0,0,0,203,97,1,0,0,0,203,104,1,0,0,0,203,111,1,0,0,0,203,
121,1,0,0,0,203,133,1,0,0,0,203,138,1,0,0,0,203,141,1,0,0,0,203,146,1,0,
0,0,203,156,1,0,0,0,203,166,1,0,0,0,203,179,1,0,0,0,203,194,1,0,0,0,203,
197,1,0,0,0,203,200,1,0,0,0,204,11,1,0,0,0,205,206,5,7,0,0,206,207,6,6,-1,
0,207,13,1,0,0,0,208,209,5,6,0,0,209,210,4,7,0,1,210,211,5,8,0,0,211,216,
5,11,0,0,212,213,5,6,0,0,213,214,4,7,1,1,214,216,3,12,6,0,215,208,1,0,0,
0,215,212,1,0,0,0,216,15,1,0,0,0,217,218,3,12,6,0,218,219,6,8,-1,0,219,229,
1,0,0,0,220,221,3,12,6,0,221,222,5,2,0,0,222,223,3,14,7,0,223,224,6,8,-1,
0,224,229,1,0,0,0,225,226,3,18,9,0,226,227,6,8,-1,0,227,229,1,0,0,0,228,
217,1,0,0,0,228,220,1,0,0,0,228,225,1,0,0,0,229,17,1,0,0,0,230,231,5,8,0,
0,231,232,5,11,0,0,232,233,6,9,-1,0,233,19,1,0,0,0,234,235,5,9,0,0,235,236,
5,11,0,0,236,237,6,10,-1,0,237,21,1,0,0,0,238,239,5,16,0,0,239,240,6,11,
-1,0,240,23,1,0,0,0,241,242,5,12,0,0,242,247,5,11,0,0,243,244,5,2,0,0,244,
246,5,11,0,0,245,243,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,
0,0,248,250,1,0,0,0,249,247,1,0,0,0,250,258,6,12,-1,0,251,252,5,13,0,0,252,
253,5,11,0,0,253,258,6,12,-1,0,254,255,5,14,0,0,255,256,5,11,0,0,256,258,
6,12,-1,0,257,241,1,0,0,0,257,251,1,0,0,0,257,254,1,0,0,0,258,25,1,0,0,0,
26,29,35,42,47,51,57,62,68,72,78,81,88,91,116,126,152,162,170,175,183,190,
203,215,228,247,257];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, null, "','", "'['", "']'", "'!'", null, 
                            null, "'#'", "'='", null, null, "'DCD'", "'equ'", 
                            "'FILL'", null, null, null, null, null, "'S'", 
                            null, "' '" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "BANG", "OPCODE", "REGISTER", "POUND", "EQUALS", 
                             "SIGN", "INT", "DCD", "EQU", "FILL", "SHIFT", 
                             "ID", "NEWLINE", "WS", "COMMENT_TEXT", "S", 
                             "COND", "MNEMONIC_WS" ];
    static ruleNames = [ "program", "line", "label", "instruction", "opcode", 
                         "operand", "register", "flexOperandSpec", "offset", 
                         "immediate", "pseudoImmediate", "symbol", "directive" ];

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
	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 26;
	                this.match(ARM32Parser.NEWLINE); 
	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 225344) !== 0)) {
	            this.state = 32;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
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
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 41;
	                localctx.lab = this.label();
	            }

	            this.state = 45; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 44;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 47; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 50;
	                localctx.lab = this.label();
	            }

	            this.state = 53;
	            localctx.inst = this.instruction();
	            this.state = 55; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 54;
	            		this.match(ARM32Parser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 57; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	                    localctx.l =  new AST.Line(localctx.start.line, (localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 61;
	                localctx.lab = this.label();
	            }

	            this.state = 64;
	            localctx.dir = this.directive();
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
	        this.state = 74;
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
	        this.state = 76;
	        localctx.op = this.opcode();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 77;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 80;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 66440) !== 0)) {
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
	        this.state = 95;
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
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 98;
	            localctx.r = this.register();
	            this.state = 99;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 100;
	            this.match(ARM32Parser.COMMA);
	            this.state = 101;
	            localctx.i = this.immediate();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.i.value);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 105;
	            localctx.r = this.register();
	            this.state = 106;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 107;
	            this.match(ARM32Parser.COMMA);
	            this.state = 108;
	            localctx.s = this.symbol();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, localctx.s.text);
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 112;
	            localctx.r = this.register();
	            this.state = 113;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 114;
	            this.match(ARM32Parser.COMMA);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 115;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 118;
	            localctx.roff = this.register();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 122;
	            localctx.r = this.register();
	            this.state = 123;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 124;
	            this.match(ARM32Parser.COMMA);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 125;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 128;
	            localctx.roff = this.register();
	            this.state = 129;
	            this.match(ARM32Parser.COMMA);
	            this.state = 130;
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
	            this.state = 133;
	            localctx.r = this.register();
	            this.state = 134;
	            this.match(ARM32Parser.COMMA);
	            this.state = 135;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 138;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 141;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 142;
	            localctx.r = this.register();
	            this.state = 143;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, null, null);
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 146;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 147;
	            localctx.r = this.register();
	            this.state = 148;
	            this.match(ARM32Parser.COMMA);
	            this.state = 149;
	            localctx.i = this.immediate();
	            this.state = 150;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 151;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.i.value, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 156;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 157;
	            localctx.r = this.register();
	            this.state = 158;
	            this.match(ARM32Parser.COMMA);
	            this.state = 159;
	            localctx.s = this.symbol();
	            this.state = 160;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 161;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, localctx.s.text, !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 166;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 167;
	            localctx.r = this.register();
	            this.state = 168;
	            this.match(ARM32Parser.COMMA);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 169;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 172;
	            localctx.roff = this.register();
	            this.state = 173;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 174;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, new AST.SignedRegister((localctx._SIGN == null ? null : localctx._SIGN.text), localctx.roff.reg.name), !!(localctx._BANG == null ? null : localctx._BANG.text));
	                
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 179;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 180;
	            localctx.r = this.register();
	            this.state = 181;
	            this.match(ARM32Parser.COMMA);
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 182;
	                localctx._SIGN = this.match(ARM32Parser.SIGN);
	            }

	            this.state = 185;
	            localctx.roff = this.register();
	            this.state = 186;
	            this.match(ARM32Parser.COMMA);
	            this.state = 187;
	            localctx.f = this.flexOperandSpec();
	            this.state = 188;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 189;
	                localctx._BANG = this.match(ARM32Parser.BANG);
	            }


	                    console.debug('[parser] (localctx._SIGN == null ? null : localctx._SIGN.text) = ', (localctx._SIGN == null ? null : localctx._SIGN.text));
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
	            this.state = 194;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 197;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 200;
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
	        this.state = 205;
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
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 208;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 209;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 210;
	            this.match(ARM32Parser.POUND);
	            this.state = 211;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 212;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 213;
	            if (!( ['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 214;
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
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            localctx.r = this.register();
	            this.state = 221;
	            this.match(ARM32Parser.COMMA);
	            this.state = 222;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 225;
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
	        this.state = 230;
	        this.match(ARM32Parser.POUND);
	        this.state = 231;
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
	        this.state = 234;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 235;
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
	        this.state = 238;
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
	        this.state = 257;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(ARM32Parser.DCD);

	            this.state = 242;
	            localctx._INT = this.match(ARM32Parser.INT);
	            localctx.values.push(localctx._INT);
	            this.state = 247;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 243;
	                this.match(ARM32Parser.COMMA);
	                this.state = 244;
	                localctx._INT = this.match(ARM32Parser.INT);
	                localctx.values.push(localctx._INT);
	                this.state = 249;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.values.map(s => parseInt(s.text)));
	                
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.match(ARM32Parser.EQU);
	            this.state = 252;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective(parseInt((localctx.value == null ? null : localctx.value.text)));
	                
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.match(ARM32Parser.FILL);
	            this.state = 255;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.FillDirective(parseInt((localctx.value == null ? null : localctx.value.text)));
	                
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
ARM32Parser.EQU = 13;
ARM32Parser.FILL = 14;
ARM32Parser.SHIFT = 15;
ARM32Parser.ID = 16;
ARM32Parser.NEWLINE = 17;
ARM32Parser.WS = 18;
ARM32Parser.COMMENT_TEXT = 19;
ARM32Parser.S = 20;
ARM32Parser.COND = 21;
ARM32Parser.MNEMONIC_WS = 22;

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
        this._INT = null;
        this.values = [];
        this.value = null;
    }

	DCD() {
	    return this.getToken(ARM32Parser.DCD, 0);
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


	EQU() {
	    return this.getToken(ARM32Parser.EQU, 0);
	};

	FILL() {
	    return this.getToken(ARM32Parser.FILL, 0);
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
