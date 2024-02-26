// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';

const serializedATN = [4,1,21,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,
1,0,1,1,3,1,43,8,1,1,1,1,1,4,1,47,8,1,11,1,12,1,48,1,1,1,1,1,1,3,1,54,8,
1,1,1,1,1,4,1,58,8,1,11,1,12,1,59,1,1,1,1,3,1,64,8,1,1,2,1,2,1,3,1,3,3,3,
70,8,3,1,3,3,3,73,8,3,1,3,1,3,1,3,5,3,78,8,3,10,3,12,3,81,9,3,3,3,83,8,3,
1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,100,8,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,117,8,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,131,8,5,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,152,
8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,
12,5,12,169,8,12,10,12,12,12,172,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
3,12,181,8,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,194,0,29,
1,0,0,0,2,63,1,0,0,0,4,65,1,0,0,0,6,67,1,0,0,0,8,86,1,0,0,0,10,130,1,0,0,
0,12,132,1,0,0,0,14,135,1,0,0,0,16,151,1,0,0,0,18,153,1,0,0,0,20,157,1,0,
0,0,22,161,1,0,0,0,24,180,1,0,0,0,26,28,5,16,0,0,27,26,1,0,0,0,28,31,1,0,
0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,2,1,
0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,
37,35,1,0,0,0,38,39,5,0,0,1,39,40,6,0,-1,0,40,1,1,0,0,0,41,43,3,4,2,0,42,
41,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,46,3,6,3,0,45,47,5,16,0,0,46,45,
1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,6,
1,-1,0,51,64,1,0,0,0,52,54,3,4,2,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,
0,0,55,57,3,24,12,0,56,58,5,16,0,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,
0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,62,6,1,-1,0,62,64,1,0,0,0,63,42,1,0,0,
0,63,53,1,0,0,0,64,3,1,0,0,0,65,66,5,15,0,0,66,5,1,0,0,0,67,69,3,8,4,0,68,
70,5,19,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,73,5,20,0,0,72,
71,1,0,0,0,72,73,1,0,0,0,73,82,1,0,0,0,74,79,3,10,5,0,75,76,5,2,0,0,76,78,
3,10,5,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,83,1,
0,0,0,81,79,1,0,0,0,82,74,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,85,6,3,
-1,0,85,7,1,0,0,0,86,87,5,6,0,0,87,9,1,0,0,0,88,89,3,12,6,0,89,90,3,14,7,
0,90,91,6,5,-1,0,91,131,1,0,0,0,92,93,3,12,6,0,93,94,6,5,-1,0,94,131,1,0,
0,0,95,96,5,3,0,0,96,97,3,12,6,0,97,99,5,2,0,0,98,100,3,16,8,0,99,98,1,0,
0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,5,4,0,0,102,103,5,5,0,0,103,104,
6,5,-1,0,104,131,1,0,0,0,105,106,5,3,0,0,106,107,3,12,6,0,107,108,5,4,0,
0,108,109,5,2,0,0,109,110,3,16,8,0,110,111,6,5,-1,0,111,131,1,0,0,0,112,
113,5,3,0,0,113,116,3,12,6,0,114,115,5,2,0,0,115,117,3,16,8,0,116,114,1,
0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,5,4,0,0,119,120,6,5,-1,0,120,
131,1,0,0,0,121,122,3,18,9,0,122,123,6,5,-1,0,123,131,1,0,0,0,124,125,3,
20,10,0,125,126,6,5,-1,0,126,131,1,0,0,0,127,128,3,22,11,0,128,129,6,5,-1,
0,129,131,1,0,0,0,130,88,1,0,0,0,130,92,1,0,0,0,130,95,1,0,0,0,130,105,1,
0,0,0,130,112,1,0,0,0,130,121,1,0,0,0,130,124,1,0,0,0,130,127,1,0,0,0,131,
11,1,0,0,0,132,133,5,7,0,0,133,134,6,6,-1,0,134,13,1,0,0,0,135,136,5,6,0,
0,136,137,4,7,0,1,137,138,5,8,0,0,138,139,5,10,0,0,139,15,1,0,0,0,140,141,
3,12,6,0,141,142,6,8,-1,0,142,152,1,0,0,0,143,144,3,12,6,0,144,145,5,2,0,
0,145,146,3,14,7,0,146,147,6,8,-1,0,147,152,1,0,0,0,148,149,3,18,9,0,149,
150,6,8,-1,0,150,152,1,0,0,0,151,140,1,0,0,0,151,143,1,0,0,0,151,148,1,0,
0,0,152,17,1,0,0,0,153,154,5,8,0,0,154,155,5,10,0,0,155,156,6,9,-1,0,156,
19,1,0,0,0,157,158,5,9,0,0,158,159,5,10,0,0,159,160,6,10,-1,0,160,21,1,0,
0,0,161,162,5,15,0,0,162,163,6,11,-1,0,163,23,1,0,0,0,164,165,5,11,0,0,165,
170,5,10,0,0,166,167,5,2,0,0,167,169,5,10,0,0,168,166,1,0,0,0,169,172,1,
0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,173,
181,6,12,-1,0,174,175,5,12,0,0,175,176,5,10,0,0,176,181,6,12,-1,0,177,178,
5,13,0,0,178,179,5,10,0,0,179,181,6,12,-1,0,180,164,1,0,0,0,180,174,1,0,
0,0,180,177,1,0,0,0,181,25,1,0,0,0,17,29,35,42,48,53,59,63,69,72,79,82,99,
116,130,151,170,180];


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
                             "NL", "WS", "COMMENT_TEXT", "S", "COND", "MNEMONIC_WS" ];
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
    			return ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text)) >= 0;
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
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 26;
	            this.match(ARM32Parser.NL);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 47168) !== 0)) {
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
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

	            this.state = 44;
	            localctx.inst = this.instruction();
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 45;
	                this.match(ARM32Parser.NL);
	                this.state = 48; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===16);

	                    localctx.l =  new AST.Line((localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 52;
	                localctx.lab = this.label();
	            }

	            this.state = 55;
	            localctx.dir = this.directive();
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 56;
	                this.match(ARM32Parser.NL);
	                this.state = 59; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===16);

	                    localctx.l =  new AST.Line((localctx.lab == null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.dir.d);
	                
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
	        this.state = 65;
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
	        this.state = 67;
	        localctx.op = this.opcode();
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 68;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 71;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 33672) !== 0)) {
	            this.state = 74;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 75;
	                this.match(ARM32Parser.COMMA);
	                this.state = 76;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 81;
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
	        this.state = 86;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            localctx.r = this.register();
	            this.state = 89;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 96;
	            localctx.r = this.register();
	            this.state = 97;
	            this.match(ARM32Parser.COMMA);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===8) {
	                this.state = 98;
	                localctx.o = this.offset();
	            }

	            this.state = 101;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 102;
	            this.match(ARM32Parser.BANG);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 106;
	            localctx.r = this.register();
	            this.state = 107;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 108;
	            this.match(ARM32Parser.COMMA);
	            this.state = 109;
	            localctx.o = this.offset();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 112;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 113;
	            localctx.r = this.register();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 114;
	                this.match(ARM32Parser.COMMA);
	                this.state = 115;
	                localctx.o = this.offset();
	            }

	            this.state = 118;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.OffsetOperand(localctx.r.reg, localctx.o.off);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 121;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 124;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 127;
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
	        this.state = 132;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        localctx.op = this.match(ARM32Parser.OPCODE);
	        this.state = 136;
	        if (!( ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op == null ? null : localctx.op.text)) >= 0)) {
	            throw new antlr4.error.FailedPredicateException(this, "['LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text) >= 0");
	        }
	        this.state = 137;
	        this.match(ARM32Parser.POUND);
	        this.state = 138;
	        localctx.amount = this.match(ARM32Parser.INT);
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
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            localctx.r = this.register();
	            this.state = 144;
	            this.match(ARM32Parser.COMMA);
	            this.state = 145;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 148;
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
	        this.state = 153;
	        this.match(ARM32Parser.POUND);
	        this.state = 154;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.Immediate(parseInt((localctx.v == null ? null : localctx.v.text)));
	            
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
	        this.state = 157;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 158;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.PseudoImmediate(parseInt((localctx.v == null ? null : localctx.v.text)));
	            
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
	        this.state = 161;
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
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(ARM32Parser.DCD);

	            this.state = 165;
	            localctx._INT = this.match(ARM32Parser.INT);
	            localctx.values.push(localctx._INT);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 166;
	                this.match(ARM32Parser.COMMA);
	                this.state = 167;
	                localctx._INT = this.match(ARM32Parser.INT);
	                localctx.values.push(localctx._INT);
	                this.state = 172;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.values.map(s => parseInt(s.text)));
	                
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
	            this.match(ARM32Parser.EQU);
	            this.state = 175;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective(parseInt((localctx.value == null ? null : localctx.value.text)));
	                
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.match(ARM32Parser.FILL);
	            this.state = 178;
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
ARM32Parser.NL = 16;
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NL);
	    } else {
	        return this.getToken(ARM32Parser.NL, i);
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

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ARM32Parser.NL);
	    } else {
	        return this.getToken(ARM32Parser.NL, i);
	    }
	};


	label() {
	    return this.getTypedRuleContext(LabelContext,0);
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
