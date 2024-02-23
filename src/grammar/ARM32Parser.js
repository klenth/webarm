// Generated from ARM32.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ARM32Listener from './ARM32Listener.js';

import * as AST from './arm32Ast';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0012\u00a3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e",
    "\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003-\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u00032\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005:\n\u0005\f\u0005\u000e\u0005",
    "=\u000b\u0005\u0005\u0005?\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007Q\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007b\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007p\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0084\n\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u0095\n\u000e\f\u000e\u000e\u000e\u0098\u000b",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00a1\n\u000e\u0003\u000e\u0002\u0002",
    "\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u0002\u0003\u0003\u0002\u0004\u0005\u0002\u00a9\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u00041\u0003\u0002\u0002\u0002\u00063\u0003\u0002\u0002",
    "\u0002\b5\u0003\u0002\u0002\u0002\nB\u0003\u0002\u0002\u0002\fo\u0003",
    "\u0002\u0002\u0002\u000eq\u0003\u0002\u0002\u0002\u0010t\u0003\u0002",
    "\u0002\u0002\u0012\u0083\u0003\u0002\u0002\u0002\u0014\u0085\u0003\u0002",
    "\u0002\u0002\u0016\u0089\u0003\u0002\u0002\u0002\u0018\u008d\u0003\u0002",
    "\u0002\u0002\u001a\u00a0\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004",
    "\u0003\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002",
    "\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "\"#\u0007\u0002\u0002\u0003#$\b\u0002\u0001\u0002$\u0003\u0003\u0002",
    "\u0002\u0002%\'\u0005\u0006\u0004\u0002&%\u0003\u0002\u0002\u0002&\'",
    "\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0005\b\u0005",
    "\u0002)*\b\u0003\u0001\u0002*2\u0003\u0002\u0002\u0002+-\u0005\u0006",
    "\u0004\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002./\u0005\u001a\u000e\u0002/0\b\u0003\u0001\u00020",
    "2\u0003\u0002\u0002\u00021&\u0003\u0002\u0002\u00021,\u0003\u0002\u0002",
    "\u00022\u0005\u0003\u0002\u0002\u000234\u0007\u0011\u0002\u00024\u0007",
    "\u0003\u0002\u0002\u00025>\u0005\n\u0006\u00026;\u0005\f\u0007\u0002",
    "78\u0007\u0006\u0002\u00028:\u0005\f\u0007\u000297\u0003\u0002\u0002",
    "\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002",
    "\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>6\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002",
    "@A\b\u0005\u0001\u0002A\t\u0003\u0002\u0002\u0002BC\t\u0002\u0002\u0002",
    "C\u000b\u0003\u0002\u0002\u0002DE\u0005\u000e\b\u0002EF\u0007\u0006",
    "\u0002\u0002FG\u0005\u0010\t\u0002GH\b\u0007\u0001\u0002Hp\u0003\u0002",
    "\u0002\u0002IJ\u0005\u000e\b\u0002JK\b\u0007\u0001\u0002Kp\u0003\u0002",
    "\u0002\u0002LM\u0007\u0007\u0002\u0002MN\u0005\u000e\b\u0002NP\u0007",
    "\u0006\u0002\u0002OQ\u0005\u0012\n\u0002PO\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0007\b\u0002",
    "\u0002ST\u0007\t\u0002\u0002TU\b\u0007\u0001\u0002Up\u0003\u0002\u0002",
    "\u0002VW\u0007\u0007\u0002\u0002WX\u0005\u000e\b\u0002XY\u0007\b\u0002",
    "\u0002YZ\u0007\u0006\u0002\u0002Z[\u0005\u0012\n\u0002[\\\b\u0007\u0001",
    "\u0002\\p\u0003\u0002\u0002\u0002]^\u0007\u0007\u0002\u0002^a\u0005",
    "\u000e\b\u0002_`\u0007\u0006\u0002\u0002`b\u0005\u0012\n\u0002a_\u0003",
    "\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "cd\u0007\b\u0002\u0002de\b\u0007\u0001\u0002ep\u0003\u0002\u0002\u0002",
    "fg\u0005\u0014\u000b\u0002gh\b\u0007\u0001\u0002hp\u0003\u0002\u0002",
    "\u0002ij\u0005\u0016\f\u0002jk\b\u0007\u0001\u0002kp\u0003\u0002\u0002",
    "\u0002lm\u0005\u0018\r\u0002mn\b\u0007\u0001\u0002np\u0003\u0002\u0002",
    "\u0002oD\u0003\u0002\u0002\u0002oI\u0003\u0002\u0002\u0002oL\u0003\u0002",
    "\u0002\u0002oV\u0003\u0002\u0002\u0002o]\u0003\u0002\u0002\u0002of\u0003",
    "\u0002\u0002\u0002oi\u0003\u0002\u0002\u0002ol\u0003\u0002\u0002\u0002",
    "p\r\u0003\u0002\u0002\u0002qr\u0007\n\u0002\u0002rs\b\b\u0001\u0002",
    "s\u000f\u0003\u0002\u0002\u0002tu\u0007\u0004\u0002\u0002uv\u0007\u000b",
    "\u0002\u0002vw\u0007\r\u0002\u0002w\u0011\u0003\u0002\u0002\u0002xy",
    "\u0005\u000e\b\u0002yz\b\n\u0001\u0002z\u0084\u0003\u0002\u0002\u0002",
    "{|\u0005\u000e\b\u0002|}\u0007\u0006\u0002\u0002}~\u0005\u0010\t\u0002",
    "~\u007f\b\n\u0001\u0002\u007f\u0084\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0005\u0014\u000b\u0002\u0081\u0082\b\n\u0001\u0002\u0082\u0084\u0003",
    "\u0002\u0002\u0002\u0083x\u0003\u0002\u0002\u0002\u0083{\u0003\u0002",
    "\u0002\u0002\u0083\u0080\u0003\u0002\u0002\u0002\u0084\u0013\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007\u000b\u0002\u0002\u0086\u0087\u0007\r",
    "\u0002\u0002\u0087\u0088\b\u000b\u0001\u0002\u0088\u0015\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007\f\u0002\u0002\u008a\u008b\u0007\r\u0002",
    "\u0002\u008b\u008c\b\f\u0001\u0002\u008c\u0017\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007\u0011\u0002\u0002\u008e\u008f\b\r\u0001\u0002\u008f",
    "\u0019\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u000e\u0002\u0002\u0091",
    "\u0096\u0007\r\u0002\u0002\u0092\u0093\u0007\u0006\u0002\u0002\u0093",
    "\u0095\u0007\r\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095",
    "\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0099\u00a1\b\u000e\u0001\u0002\u009a",
    "\u009b\u0007\u000f\u0002\u0002\u009b\u009c\u0007\r\u0002\u0002\u009c",
    "\u00a1\b\u000e\u0001\u0002\u009d\u009e\u0007\u0010\u0002\u0002\u009e",
    "\u009f\u0007\r\u0002\u0002\u009f\u00a1\b\u000e\u0001\u0002\u00a0\u0090",
    "\u0003\u0002\u0002\u0002\u00a0\u009a\u0003\u0002\u0002\u0002\u00a0\u009d",
    "\u0003\u0002\u0002\u0002\u00a1\u001b\u0003\u0002\u0002\u0002\u000e\u001f",
    "&,1;>Pao\u0083\u0096\u00a0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ARM32Parser extends antlr4.Parser {

    static grammarFileName = "ARM32.g4";
    static literalNames = [ null, null, null, null, "','", "'['", "']'", 
                            "'!'", null, "'#'", "'='", null, "'DCD'", "'equ'", 
                            "'FILL'" ];
    static symbolicNames = [ null, "COMMENT", "OPCODE_FLEX", "OPCODE_NONFLEX", 
                             "COMMA", "LBRACK", "RBRACK", "BANG", "REGISTER", 
                             "POUND", "EQUALS", "INT", "DCD", "EQU", "FILL", 
                             "ID", "WS" ];
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

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ARM32Parser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ARM32Parser.OPCODE_FLEX) | (1 << ARM32Parser.OPCODE_NONFLEX) | (1 << ARM32Parser.DCD) | (1 << ARM32Parser.EQU) | (1 << ARM32Parser.FILL) | (1 << ARM32Parser.ID))) !== 0)) {
	            this.state = 26;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ARM32Parser.ID) {
	                this.state = 35;
	                localctx.lab = this.label();
	            }

	            this.state = 38;
	            localctx.inst = this.instruction();

	                    localctx.l =  new AST.Line((localctx.lab===null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ARM32Parser.ID) {
	                this.state = 41;
	                localctx.lab = this.label();
	            }

	            this.state = 44;
	            localctx.dir = this.directive();

	                    localctx.l =  new AST.Line((localctx.lab===null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.dir.d);
	                
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
	        this.state = 49;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        localctx.op = this.opcode();
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 52;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ARM32Parser.COMMA) {
	                this.state = 53;
	                this.match(ARM32Parser.COMMA);
	                this.state = 54;
	                localctx._operand = this.operand();
	                localctx.operands.push(localctx._operand);
	                this.state = 59;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }

	                localctx.i =  new AST.Instruction((localctx.op===null ? null : this._input.getText(new antlr4.Interval(localctx.op.start,localctx.op.stop))), localctx.operands.map(o => o.op));
	            
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!(_la===ARM32Parser.OPCODE_FLEX || _la===ARM32Parser.OPCODE_NONFLEX)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ARM32Parser.RULE_operand);
	    var _la = 0; // Token type
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            localctx.r = this.register();
	            this.state = 67;
	            this.match(ARM32Parser.COMMA);
	            this.state = 68;
	            localctx.f = this.flexOperandSpec();

	                    localctx.op =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            localctx.r = this.register();

	                    localctx.op =  localctx.r.reg;
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 75;
	            localctx.r = this.register();
	            this.state = 76;
	            this.match(ARM32Parser.COMMA);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ARM32Parser.REGISTER || _la===ARM32Parser.POUND) {
	                this.state = 77;
	                localctx.o = this.offset();
	            }

	            this.state = 80;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 81;
	            this.match(ARM32Parser.BANG);

	                    localctx.op =  new AST.PreindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 84;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 85;
	            localctx.r = this.register();
	            this.state = 86;
	            this.match(ARM32Parser.RBRACK);
	            this.state = 87;
	            this.match(ARM32Parser.COMMA);
	            this.state = 88;
	            localctx.o = this.offset();

	                    localctx.op =  new AST.PostindexedOperand(localctx.r.reg, parseInt(localctx.o.off));
	                
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 91;
	            this.match(ARM32Parser.LBRACK);
	            this.state = 92;
	            localctx.r = this.register();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ARM32Parser.COMMA) {
	                this.state = 93;
	                this.match(ARM32Parser.COMMA);
	                this.state = 94;
	                localctx.o = this.offset();
	            }

	            this.state = 97;
	            this.match(ARM32Parser.RBRACK);

	                    localctx.op =  new AST.OffsetOperand(localctx.r.reg, localctx.o.off);
	                
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            localctx.i = this.immediate();

	                    localctx.op =  localctx.i.value;
	                
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 103;
	            localctx.pi = this.pseudoImmediate();

	                    localctx.op =  localctx.pi.value;
	                
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 106;
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
	        this.state = 111;
	        localctx.r = this.match(ARM32Parser.REGISTER);

	                localctx.reg =  new AST.Register((localctx.r===null ? null : localctx.r.text));
	            
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
	        this.state = 114;
	        localctx.op = this.match(ARM32Parser.OPCODE_FLEX);
	        this.state = 115;
	        this.match(ARM32Parser.POUND);
	        this.state = 116;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            localctx.r = this.register();

	                    localctx.off =  localctx.r.reg;
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            localctx.r = this.register();
	            this.state = 122;
	            this.match(ARM32Parser.COMMA);
	            this.state = 123;
	            localctx.f = this.flexOperandSpec();

	                    localctx.off =  new AST.FlexOperand(localctx.r.reg, localctx.f.op.text, parseInt(localctx.f.amount.text));
	                
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
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
	        this.state = 131;
	        this.match(ARM32Parser.POUND);
	        this.state = 132;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.Immediate(parseInt((localctx.v===null ? null : localctx.v.text)));
	            
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
	        this.state = 135;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 136;
	        localctx.v = this.match(ARM32Parser.INT);

	                localctx.value =  new AST.PseudoImmediate(parseInt((localctx.v===null ? null : localctx.v.text)));
	            
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
	        this.state = 139;
	        localctx.t = this.match(ARM32Parser.ID);

	                localctx.text =  (localctx.t===null ? null : localctx.t.text);
	            
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
	    var _la = 0; // Token type
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ARM32Parser.DCD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.match(ARM32Parser.DCD);

	            this.state = 143;
	            localctx._INT = this.match(ARM32Parser.INT);
	            localctx.values.push(localctx._INT);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ARM32Parser.COMMA) {
	                this.state = 144;
	                this.match(ARM32Parser.COMMA);
	                this.state = 145;
	                localctx._INT = this.match(ARM32Parser.INT);
	                localctx.values.push(localctx._INT);
	                this.state = 150;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	                    localctx.d =  new AST.DCD(localctx.values.map(s => parseInt(s.text)));
	                
	            break;
	        case ARM32Parser.EQU:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.match(ARM32Parser.EQU);
	            this.state = 153;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective(parseInt((localctx.value===null ? null : localctx.value.text)));
	                
	            break;
	        case ARM32Parser.FILL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.match(ARM32Parser.FILL);
	            this.state = 156;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.FillDirective(parseInt((localctx.value===null ? null : localctx.value.text)));
	                
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
ARM32Parser.OPCODE_FLEX = 2;
ARM32Parser.OPCODE_NONFLEX = 3;
ARM32Parser.COMMA = 4;
ARM32Parser.LBRACK = 5;
ARM32Parser.RBRACK = 6;
ARM32Parser.BANG = 7;
ARM32Parser.REGISTER = 8;
ARM32Parser.POUND = 9;
ARM32Parser.EQUALS = 10;
ARM32Parser.INT = 11;
ARM32Parser.DCD = 12;
ARM32Parser.EQU = 13;
ARM32Parser.FILL = 14;
ARM32Parser.ID = 15;
ARM32Parser.WS = 16;

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
        this._line = null; // LineContext
        this.lines = []; // of LineContexts
    }

	EOF() {
	    return this.getToken(ARM32Parser.EOF, 0);
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

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitProgram(this);
		}
	}


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
        this.lab = null; // LabelContext
        this.inst = null; // InstructionContext
        this.dir = null; // DirectiveContext
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitLine(this);
		}
	}


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

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitLabel(this);
		}
	}


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
        this.op = null; // OpcodeContext
        this._operand = null; // OperandContext
        this.operands = []; // of OperandContexts
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
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


	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitInstruction(this);
		}
	}


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

	OPCODE_NONFLEX() {
	    return this.getToken(ARM32Parser.OPCODE_NONFLEX, 0);
	};

	OPCODE_FLEX() {
	    return this.getToken(ARM32Parser.OPCODE_FLEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitOpcode(this);
		}
	}


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
        this.r = null; // RegisterContext
        this.f = null; // FlexOperandSpecContext
        this.o = null; // OffsetContext
        this.i = null; // ImmediateContext
        this.pi = null; // PseudoImmediateContext
        this.s = null; // SymbolContext
    }

	COMMA() {
	    return this.getToken(ARM32Parser.COMMA, 0);
	};

	register() {
	    return this.getTypedRuleContext(RegisterContext,0);
	};

	flexOperandSpec() {
	    return this.getTypedRuleContext(FlexOperandSpecContext,0);
	};

	LBRACK() {
	    return this.getToken(ARM32Parser.LBRACK, 0);
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

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitOperand(this);
		}
	}


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
        this.r = null; // Token
    }

	REGISTER() {
	    return this.getToken(ARM32Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterRegister(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitRegister(this);
		}
	}


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
        this.op = null; // Token
        this.amount = null; // Token
    }

	POUND() {
	    return this.getToken(ARM32Parser.POUND, 0);
	};

	OPCODE_FLEX() {
	    return this.getToken(ARM32Parser.OPCODE_FLEX, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterFlexOperandSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitFlexOperandSpec(this);
		}
	}


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
        this.r = null; // RegisterContext
        this.f = null; // FlexOperandSpecContext
        this.i = null; // ImmediateContext
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

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterOffset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitOffset(this);
		}
	}


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
        this.v = null; // Token
    }

	POUND() {
	    return this.getToken(ARM32Parser.POUND, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterImmediate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitImmediate(this);
		}
	}


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
        this.v = null; // Token
    }

	EQUALS() {
	    return this.getToken(ARM32Parser.EQUALS, 0);
	};

	INT() {
	    return this.getToken(ARM32Parser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterPseudoImmediate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitPseudoImmediate(this);
		}
	}


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
        this.t = null; // Token
    }

	ID() {
	    return this.getToken(ARM32Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitSymbol(this);
		}
	}


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
        this._INT = null; // Token
        this.values = []; // of Tokens
        this.value = null; // Token
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

	enterRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ARM32Listener ) {
	        listener.exitDirective(this);
		}
	}


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
