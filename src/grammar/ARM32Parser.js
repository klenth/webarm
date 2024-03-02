// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,21,196,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,
1,0,1,1,3,1,43,8,1,1,1,4,1,46,8,1,11,1,12,1,47,1,1,1,1,3,1,52,8,1,1,1,1,
1,4,1,56,8,1,11,1,12,1,57,1,1,1,1,1,1,3,1,63,8,1,1,1,1,1,4,1,67,8,1,11,1,
12,1,68,1,1,1,1,3,1,73,8,1,1,2,1,2,1,3,1,3,3,3,79,8,3,1,3,3,3,82,8,3,1,3,
1,3,1,3,5,3,87,8,3,10,3,12,3,90,9,3,3,3,92,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,109,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,126,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,3,5,140,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,3,7,152,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,165,8,8,1,
9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,
182,8,12,10,12,12,12,185,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,194,
8,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,211,0,29,1,0,0,0,
2,72,1,0,0,0,4,74,1,0,0,0,6,76,1,0,0,0,8,95,1,0,0,0,10,139,1,0,0,0,12,141,
1,0,0,0,14,151,1,0,0,0,16,164,1,0,0,0,18,166,1,0,0,0,20,170,1,0,0,0,22,174,
1,0,0,0,24,193,1,0,0,0,26,28,5,16,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
1,0,0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,2,1,0,33,32,1,
0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,
0,0,38,39,5,0,0,1,39,40,6,0,-1,0,40,1,1,0,0,0,41,43,3,4,2,0,42,41,1,0,0,
0,42,43,1,0,0,0,43,45,1,0,0,0,44,46,5,16,0,0,45,44,1,0,0,0,46,47,1,0,0,0,
47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,73,6,1,-1,0,50,52,3,4,2,0,51,
50,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,55,3,6,3,0,54,56,5,16,0,0,55,54,
1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,6,
1,-1,0,60,73,1,0,0,0,61,63,3,4,2,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,
0,0,64,66,3,24,12,0,65,67,5,16,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,
0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,6,1,-1,0,71,73,1,0,0,0,72,42,1,0,0,
0,72,51,1,0,0,0,72,62,1,0,0,0,73,3,1,0,0,0,74,75,5,15,0,0,75,5,1,0,0,0,76,
78,3,8,4,0,77,79,5,19,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,82,
5,20,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,91,1,0,0,0,83,88,3,10,5,0,84,85,
5,2,0,0,85,87,3,10,5,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,
0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,0,
0,0,93,94,6,3,-1,0,94,7,1,0,0,0,95,96,5,6,0,0,96,9,1,0,0,0,97,98,3,12,6,
0,98,99,3,14,7,0,99,100,6,5,-1,0,100,140,1,0,0,0,101,102,3,12,6,0,102,103,
6,5,-1,0,103,140,1,0,0,0,104,105,5,3,0,0,105,106,3,12,6,0,106,108,5,2,0,
0,107,109,3,16,8,0,108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,
5,4,0,0,111,112,5,5,0,0,112,113,6,5,-1,0,113,140,1,0,0,0,114,115,5,3,0,0,
115,116,3,12,6,0,116,117,5,4,0,0,117,118,5,2,0,0,118,119,3,16,8,0,119,120,
6,5,-1,0,120,140,1,0,0,0,121,122,5,3,0,0,122,125,3,12,6,0,123,124,5,2,0,
0,124,126,3,16,8,0,125,123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,
5,4,0,0,128,129,6,5,-1,0,129,140,1,0,0,0,130,131,3,18,9,0,131,132,6,5,-1,
0,132,140,1,0,0,0,133,134,3,20,10,0,134,135,6,5,-1,0,135,140,1,0,0,0,136,
137,3,22,11,0,137,138,6,5,-1,0,138,140,1,0,0,0,139,97,1,0,0,0,139,101,1,
0,0,0,139,104,1,0,0,0,139,114,1,0,0,0,139,121,1,0,0,0,139,130,1,0,0,0,139,
133,1,0,0,0,139,136,1,0,0,0,140,11,1,0,0,0,141,142,5,7,0,0,142,143,6,6,-1,
0,143,13,1,0,0,0,144,145,5,6,0,0,145,146,4,7,0,1,146,147,5,8,0,0,147,152,
5,10,0,0,148,149,5,6,0,0,149,150,4,7,1,1,150,152,3,12,6,0,151,144,1,0,0,
0,151,148,1,0,0,0,152,15,1,0,0,0,153,154,3,12,6,0,154,155,6,8,-1,0,155,165,
1,0,0,0,156,157,3,12,6,0,157,158,5,2,0,0,158,159,3,14,7,0,159,160,6,8,-1,
0,160,165,1,0,0,0,161,162,3,18,9,0,162,163,6,8,-1,0,163,165,1,0,0,0,164,
153,1,0,0,0,164,156,1,0,0,0,164,161,1,0,0,0,165,17,1,0,0,0,166,167,5,8,0,
0,167,168,5,10,0,0,168,169,6,9,-1,0,169,19,1,0,0,0,170,171,5,9,0,0,171,172,
5,10,0,0,172,173,6,10,-1,0,173,21,1,0,0,0,174,175,5,15,0,0,175,176,6,11,
-1,0,176,23,1,0,0,0,177,178,5,11,0,0,178,183,5,10,0,0,179,180,5,2,0,0,180,
182,5,10,0,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,
0,0,184,186,1,0,0,0,185,183,1,0,0,0,186,194,6,12,-1,0,187,188,5,12,0,0,188,
189,5,10,0,0,189,194,6,12,-1,0,190,191,5,13,0,0,191,192,5,10,0,0,192,194,
6,12,-1,0,193,177,1,0,0,0,193,187,1,0,0,0,193,190,1,0,0,0,194,25,1,0,0,0,
20,29,35,42,47,51,57,62,68,72,78,81,88,91,108,125,139,151,164,183,193];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32Parser.g4";
    static literalNames = [ null, null, "','", "'['", "']'", "'!'", null, 
                            null, "'#'", "'='", null, "'DCD'", "'equ'", 
                            "'FILL'", null, null, null, null, null, "'S'", 
                            null, "' '" ];
    static symbolicNames = [ null, "COMMENT", "COMMA", "LBRACK", "RBRACK", 
                             "BANG", "OPCODE", "REGISTER", "POUND", "EQUALS", 
                             "INT", "DCD", "EQU", "FILL", "SHIFT", "ID", 
                             "NEWLINE", "WS", "COMMENT_TEXT", "S", "COND", 
                             "MNEMONIC_WS" ];
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
    			return ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0;
    		case 1:
    			return ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0;
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
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 112704) !== 0)) {
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
	            if(_la===15) {
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
	            if(_la===15) {
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
	            if(_la===15) {
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
	        if(_la===19) {
	            this.state = 77;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 80;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 33672) !== 0)) {
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
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            localctx.r = this.register();
	            this.state = 98;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, localctx.f.amount !== null ? localctx.f.amount.text : null, localctx.f.register() !== null ? localctx.f.register().reg : null);
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 105;
	            localctx.r = this.register();
	            this.state = 106;
	            this.match(ARM32Parser.COMMA);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===8) {
	                this.state = 107;
	                localctx.o = this.offset();
	            }

	            this.state = 110;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 111;
	            this.match(ARM32Parser.BANG);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 115;
	            localctx.r = this.register();
	            this.state = 116;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 117;
	            this.match(ARM32Parser.COMMA);
	            this.state = 118;
	            localctx.o = this.offset();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 122;
	            localctx.r = this.register();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 123;
	                this.match(ARM32Parser.COMMA);
	                this.state = 124;
	                localctx.o = this.offset();
	            }

	            this.state = 127;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.OffsetOperand(localctx.r.reg, localctx.o.off);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 130;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 133;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 136;
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
	        this.state = 141;
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
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 145;
	            if (!( ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 146;
	            this.match(ARM32Parser.POUND);
	            this.state = 147;
	            localctx.amount = this.match(ARM32Parser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            localctx.op = this.match(ARM32Parser.OPCODE);
	            this.state = 149;
	            if (!( ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text).toUpperCase()) >= 0)) {
	                throw new antlr4.error.FailedPredicateException(this, "['LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0");
	            }
	            this.state = 150;
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
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            localctx.r = this.register();
	            this.state = 157;
	            this.match(ARM32Parser.COMMA);
	            this.state = 158;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
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
	        this.state = 166;
	        this.match(ARM32Parser.POUND);
	        this.state = 167;
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
	        this.state = 170;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 171;
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
	        this.state = 174;
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
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.match(ARM32Parser.DCD);

	            this.state = 178;
	            localctx._INT = this.match(ARM32Parser.INT);
	            localctx.values.push(localctx._INT);
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 179;
	                this.match(ARM32Parser.COMMA);
	                this.state = 180;
	                localctx._INT = this.match(ARM32Parser.INT);
	                localctx.values.push(localctx._INT);
	                this.state = 185;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.values.map(s => parseInt(s.text)));
	                
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.match(ARM32Parser.EQU);
	            this.state = 188;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective(parseInt((localctx.value == null ? null : localctx.value.text)));
	                
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
	            this.match(ARM32Parser.FILL);
	            this.state = 191;
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
ARM32Parser.INT = 10;
ARM32Parser.DCD = 11;
ARM32Parser.EQU = 12;
ARM32Parser.FILL = 13;
ARM32Parser.SHIFT = 14;
ARM32Parser.ID = 15;
ARM32Parser.NEWLINE = 16;
ARM32Parser.WS = 17;
ARM32Parser.COMMENT_TEXT = 18;
ARM32Parser.S = 19;
ARM32Parser.COND = 20;
ARM32Parser.MNEMONIC_WS = 21;

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
        this.f = null;
        this.o = null;
        this.i = null;
        this.pi = null;
        this.s = null;
    }

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	flexOperandSpec() {
	    return this.getTypedRuleContext(FlexOperandSpecContext,0);
	};

	LBRACK() {
	    return this.getToken(ARM32Parser.LBRACK, 0);
	};

	COMMA() {
	    return this.getToken(ARM32Parser.COMMA, 0);
	};

	RBRACK() {
	    return this.getToken(ARM32Parser.RBRACK, 0);
	};

	BANG() {
	    return this.getToken(ARM32Parser.BANG, 0);
	};

	offset() {
	    return this.getTypedRuleContext(OffsetContext,0);
	};

	immediate() {
	    return this.getTypedRuleContext(ImmediateContext,0);
	};

	pseudoImmediate() {
	    return this.getTypedRuleContext(PseudoImmediateContext,0);
	};

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
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
