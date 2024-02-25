// Generated from /home/kathy/WebstormProjects/webarm/src/grammar/ARM32Parser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

import * as AST from './arm32Ast';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0017\u00b9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e",
    "\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0007\u0002$\n",
    "\u0002\f\u0002\u000e\u0002\'\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0005\u0003-\n\u0003\u0003\u0003\u0003\u0003\u0006",
    "\u00031\n\u0003\r\u0003\u000e\u00032\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00038\n\u0003\u0003\u0003\u0003\u0003\u0006\u0003<\n\u0003\r",
    "\u0003\u000e\u0003=\u0003\u0003\u0003\u0003\u0005\u0003B\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005H\n\u0005\u0003",
    "\u0005\u0005\u0005K\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005P\n\u0005\f\u0005\u000e\u0005S\u000b\u0005\u0005\u0005U\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007f\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007w\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0085\n",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u009a\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00ab\n",
    "\u000e\f\u000e\u000e\u000e\u00ae\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u00b7\n\u000e\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0002\u0002\u00c4\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0004A\u0003\u0002\u0002\u0002\u0006",
    "C\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nX\u0003\u0002",
    "\u0002\u0002\f\u0084\u0003\u0002\u0002\u0002\u000e\u0086\u0003\u0002",
    "\u0002\u0002\u0010\u0089\u0003\u0002\u0002\u0002\u0012\u0099\u0003\u0002",
    "\u0002\u0002\u0014\u009b\u0003\u0002\u0002\u0002\u0016\u009f\u0003\u0002",
    "\u0002\u0002\u0018\u00a3\u0003\u0002\u0002\u0002\u001a\u00b6\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0007\u0012\u0002\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 %\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002\"$\u0005\u0004\u0003\u0002#\"\u0003",
    "\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002",
    "%&\u0003\u0002\u0002\u0002&(\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002()\u0007\u0002\u0002\u0003)*\b\u0002\u0001\u0002*\u0003",
    "\u0003\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.0\u0005\b",
    "\u0005\u0002/1\u0007\u0012\u0002\u00020/\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000245\b\u0003\u0001\u00025B\u0003\u0002\u0002",
    "\u000268\u0005\u0006\u0004\u000276\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029;\u0005\u001a\u000e\u0002:<\u0007",
    "\u0012\u0002\u0002;:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?@\b\u0003\u0001\u0002@B\u0003\u0002\u0002\u0002A,\u0003\u0002",
    "\u0002\u0002A7\u0003\u0002\u0002\u0002B\u0005\u0003\u0002\u0002\u0002",
    "CD\u0007\u0011\u0002\u0002D\u0007\u0003\u0002\u0002\u0002EG\u0005\n",
    "\u0006\u0002FH\u0007\u0015\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003",
    "\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002IK\u0007\u0016\u0002\u0002",
    "JI\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KT\u0003\u0002\u0002",
    "\u0002LQ\u0005\f\u0007\u0002MN\u0007\u0004\u0002\u0002NP\u0005\f\u0007",
    "\u0002OM\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002QR\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002TL\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "UV\u0003\u0002\u0002\u0002VW\b\u0005\u0001\u0002W\t\u0003\u0002\u0002",
    "\u0002XY\u0007\b\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002Z[\u0005",
    "\u000e\b\u0002[\\\u0005\u0010\t\u0002\\]\b\u0007\u0001\u0002]\u0085",
    "\u0003\u0002\u0002\u0002^_\u0005\u000e\b\u0002_`\b\u0007\u0001\u0002",
    "`\u0085\u0003\u0002\u0002\u0002ab\u0007\u0005\u0002\u0002bc\u0005\u000e",
    "\b\u0002ce\u0007\u0004\u0002\u0002df\u0005\u0012\n\u0002ed\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0007",
    "\u0006\u0002\u0002hi\u0007\u0007\u0002\u0002ij\b\u0007\u0001\u0002j",
    "\u0085\u0003\u0002\u0002\u0002kl\u0007\u0005\u0002\u0002lm\u0005\u000e",
    "\b\u0002mn\u0007\u0006\u0002\u0002no\u0007\u0004\u0002\u0002op\u0005",
    "\u0012\n\u0002pq\b\u0007\u0001\u0002q\u0085\u0003\u0002\u0002\u0002",
    "rs\u0007\u0005\u0002\u0002sv\u0005\u000e\b\u0002tu\u0007\u0004\u0002",
    "\u0002uw\u0005\u0012\n\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0007\u0006\u0002\u0002yz\b",
    "\u0007\u0001\u0002z\u0085\u0003\u0002\u0002\u0002{|\u0005\u0014\u000b",
    "\u0002|}\b\u0007\u0001\u0002}\u0085\u0003\u0002\u0002\u0002~\u007f\u0005",
    "\u0016\f\u0002\u007f\u0080\b\u0007\u0001\u0002\u0080\u0085\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0005\u0018\r\u0002\u0082\u0083\b\u0007\u0001",
    "\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084Z\u0003\u0002\u0002",
    "\u0002\u0084^\u0003\u0002\u0002\u0002\u0084a\u0003\u0002\u0002\u0002",
    "\u0084k\u0003\u0002\u0002\u0002\u0084r\u0003\u0002\u0002\u0002\u0084",
    "{\u0003\u0002\u0002\u0002\u0084~\u0003\u0002\u0002\u0002\u0084\u0081",
    "\u0003\u0002\u0002\u0002\u0085\r\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007\t\u0002\u0002\u0087\u0088\b\b\u0001\u0002\u0088\u000f\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007\b\u0002\u0002\u008a\u008b\u0006\t\u0002",
    "\u0003\u008b\u008c\u0007\n\u0002\u0002\u008c\u008d\u0007\f\u0002\u0002",
    "\u008d\u0011\u0003\u0002\u0002\u0002\u008e\u008f\u0005\u000e\b\u0002",
    "\u008f\u0090\b\n\u0001\u0002\u0090\u009a\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0005\u000e\b\u0002\u0092\u0093\u0007\u0004\u0002\u0002\u0093",
    "\u0094\u0005\u0010\t\u0002\u0094\u0095\b\n\u0001\u0002\u0095\u009a\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0005\u0014\u000b\u0002\u0097\u0098\b",
    "\n\u0001\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099\u008e\u0003",
    "\u0002\u0002\u0002\u0099\u0091\u0003\u0002\u0002\u0002\u0099\u0096\u0003",
    "\u0002\u0002\u0002\u009a\u0013\u0003\u0002\u0002\u0002\u009b\u009c\u0007",
    "\n\u0002\u0002\u009c\u009d\u0007\f\u0002\u0002\u009d\u009e\b\u000b\u0001",
    "\u0002\u009e\u0015\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u000b\u0002",
    "\u0002\u00a0\u00a1\u0007\f\u0002\u0002\u00a1\u00a2\b\f\u0001\u0002\u00a2",
    "\u0017\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0011\u0002\u0002\u00a4",
    "\u00a5\b\r\u0001\u0002\u00a5\u0019\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\u0007\r\u0002\u0002\u00a7\u00ac\u0007\f\u0002\u0002\u00a8\u00a9\u0007",
    "\u0004\u0002\u0002\u00a9\u00ab\u0007\f\u0002\u0002\u00aa\u00a8\u0003",
    "\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003",
    "\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b7\b",
    "\u000e\u0001\u0002\u00b0\u00b1\u0007\u000e\u0002\u0002\u00b1\u00b2\u0007",
    "\f\u0002\u0002\u00b2\u00b7\b\u000e\u0001\u0002\u00b3\u00b4\u0007\u000f",
    "\u0002\u0002\u00b4\u00b5\u0007\f\u0002\u0002\u00b5\u00b7\b\u000e\u0001",
    "\u0002\u00b6\u00a6\u0003\u0002\u0002\u0002\u00b6\u00b0\u0003\u0002\u0002",
    "\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b7\u001b\u0003\u0002\u0002",
    "\u0002\u0013\u001f%,27=AGJQTev\u0084\u0099\u00ac\u00b6"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
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
    			return ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op===null ? null : localctx.op.text)) >= 0;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ARM32Parser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ARM32Parser.NL) {
	            this.state = 26;
	            this.match(ARM32Parser.NL);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ARM32Parser.OPCODE) | (1 << ARM32Parser.DCD) | (1 << ARM32Parser.EQU) | (1 << ARM32Parser.FILL) | (1 << ARM32Parser.ID))) !== 0)) {
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
	    var _la = 0; // Token type
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
	            if(_la===ARM32Parser.ID) {
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
	            } while(_la===ARM32Parser.NL);

	                    localctx.l =  new AST.Line((localctx.lab===null ? null : this._input.getText(new antlr4.Interval(localctx.lab.start,localctx.lab.stop))), localctx.inst.i)
	                
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ARM32Parser.ID) {
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
	            } while(_la===ARM32Parser.NL);

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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        localctx.op = this.opcode();
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ARM32Parser.S) {
	            this.state = 68;
	            localctx.s = this.match(ARM32Parser.S);
	        }

	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ARM32Parser.COND) {
	            this.state = 71;
	            localctx.cond = this.match(ARM32Parser.COND);
	        }

	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ARM32Parser.LBRACK) | (1 << ARM32Parser.REGISTER) | (1 << ARM32Parser.POUND) | (1 << ARM32Parser.EQUALS) | (1 << ARM32Parser.ID))) !== 0)) {
	            this.state = 74;
	            localctx._operand = this.operand();
	            localctx.operands.push(localctx._operand);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ARM32Parser.COMMA) {
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


	                localctx.i =  new AST.Instruction((localctx.op===null ? null : this._input.getText(new antlr4.Interval(localctx.op.start,localctx.op.stop))), (localctx.s===null ? null : localctx.s.text) || '', (localctx.cond===null ? null : localctx.cond.text) || '', localctx.operands.map(o => o.op));
	            
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
	    var _la = 0; // Token type
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
	            if(_la===ARM32Parser.REGISTER || _la===ARM32Parser.POUND) {
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
	            if(_la===ARM32Parser.COMMA) {
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
	        this.state = 135;
	        localctx.op = this.match(ARM32Parser.OPCODE);
	        this.state = 136;
	        if (!( ['LSL', 'LSR', 'ASR', 'ROR'].indexOf((localctx.op===null ? null : localctx.op.text)) >= 0)) {
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
	        this.state = 157;
	        this.match(ARM32Parser.EQUALS);
	        this.state = 158;
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
	        this.state = 161;
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
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ARM32Parser.DCD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(ARM32Parser.DCD);

	            this.state = 165;
	            localctx._INT = this.match(ARM32Parser.INT);
	            localctx.values.push(localctx._INT);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ARM32Parser.COMMA) {
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
	        case ARM32Parser.EQU:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
	            this.match(ARM32Parser.EQU);
	            this.state = 175;
	            localctx.value = this.match(ARM32Parser.INT);

	                    localctx.d =  new AST.EquateDirective(parseInt((localctx.value===null ? null : localctx.value.text)));
	                
	            break;
	        case ARM32Parser.FILL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.match(ARM32Parser.FILL);
	            this.state = 178;
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
        this._line = null; // LineContext
        this.lines = []; // of LineContexts
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
        this.lab = null; // LabelContext
        this.inst = null; // InstructionContext
        this.dir = null; // DirectiveContext
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
        this.op = null; // OpcodeContext
        this.s = null; // Token
        this.cond = null; // Token
        this._operand = null; // OperandContext
        this.operands = []; // of OperandContexts
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
        this.r = null; // RegisterContext
        this.f = null; // FlexOperandSpecContext
        this.o = null; // OffsetContext
        this.i = null; // ImmediateContext
        this.pi = null; // PseudoImmediateContext
        this.s = null; // SymbolContext
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
        this.r = null; // Token
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
        this.op = null; // Token
        this.amount = null; // Token
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
