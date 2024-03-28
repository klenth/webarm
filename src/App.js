import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { RegisterBank } from './arm32sim/RegisterBank.js';
import './App.css';
import logo from './cs.w.twotone.transparent.png';
import NzcvDisplay from './components/NzcvDisplay';
import RamDisplay from './components/RamDisplay';
import OpenFileDialog from './components/OpenFileDialog';
import OptionsDialog from './components/OptionsDialog';
//import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/ext-searchbox.js';
import AssemblyARM32Mode from './ace-editor/mode-arm32.js';
import 'ace-builds/src-noconflict/theme-textmate.js';
import 'ace-builds/src-noconflict/theme-github_dark.js';

const VERSION = '20240328.1';

const Top = styled.div`
  grid-area: top;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  padding: 8px;
  border-bottom: 2px solid var(--color-thistle);
`

const Controls = styled.div`
  position: relative;
  flex-grow: 0;
  text-align: right;
  padding-right: 80px;
  padding-left: 40px;
  
  & > * {
    margin: 2px 8px;
  }
`;

const Title = styled.div`
    flex-grow: 1.0;
    text-align: center;
    font-size: 1.2rem;
`;

const Editor = styled(AceEditor)`
  grid-area: editor;
  /*flex-grow: 1;*/
  /*height: 100%;*/
  font-family: var(--mono-font);
  font-stretch: expanded;
  
  .debug-current-line {
    background-color: var(--color-for-current-highlight);
    position: absolute;
  }
`;

const Registers = styled.div`
  grid-area: registers;
  /*flex-grow: 0;*/
`;

const MessageDisplay = styled.div`
    grid-area: message;
    padding-left: 8px;
    height: 2rem;
    line-height: 2rem;
    margin: 4px;
    border-top: 2px solid var(--color-thistle);
`;

const SimulatorOutput = styled.pre`
    position: relative;
    margin: 4px;
    grid-area: output;
    border: 2px solid var(--color-thistle);
    min-height: 8em;
    overflow: scroll;
`;

const SimulatorOutputLabel = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    padding: 6px;
    isolation: isolate;
    z-index: 1;
    font-family: Lato, sans-serif;
  
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: -12px;
        right: -24px;
        bottom: -4px;
        top: -4px;
        background-color: var(--color-for-chrome);
        transform: skewX(20deg);
        border-radius: 0 0 0 4px;
        z-index: -1;
    }
`;

const Nonprintable = styled.span`
    color: #bbb;
`;

const Logo = styled.img`
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto 0 !important;
    height: 24px;
    
    .dark-mode & {
        filter: brightness(120%);
    }
`;

const CODE_STORAGE_PROPERTY = 'webarm_code';
const OPTIONS_STORAGE_PROPERTY = 'webarm_options';
const DARK_MODE_STORAGE_PROPERTY = 'webarm_dark';
let firstLoad = true;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            simulatorState: new SimulatorState(),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            message: '',
            state: '',
            debugCurrentLine: null,
            showingMemory: false,
            symbolAddresses: null,
            options: {
                stopOnZero: true,
                stopAfterInstructions: [true, 100],
                stopAfterTime: [true, 10],
            },
            dark: false,
        };
        this.editorRef = null;
        this.openFileDialogRef = null;
        this.optionsDialogRef = null;
        this.seq = 0;
        this.messageHandler = null;

        if (firstLoad) {
            firstLoad = false;
            if ('localStorage' in window) {
                const storedCode = window['localStorage'].getItem(CODE_STORAGE_PROPERTY);
                if (storedCode)
                    this.state.code = storedCode;
                const storedOptions = window['localStorage'].getItem(OPTIONS_STORAGE_PROPERTY);
                if (storedOptions)
                    this.state.options = {
                        ...this.state.options,
                        ...JSON.parse(storedOptions)
                    };
                const storedDark = window['localStorage'].getItem(DARK_MODE_STORAGE_PROPERTY);
                if (storedDark !== undefined)
                    this.state.dark = JSON.parse(storedDark);
            }
        }
    }

    render() {
        const stateRegisters = this.state.simulatorState.registers || new RegisterBank();
        const simulatorOutputText = this.makeSimulatorOutputText(this.state.simulatorState.stdout);
        const diff = this.state.simulatorStateDiff;
        const symbolAddresses = this.state.symbolAddresses;
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={(i === 13) ? 'SP' : (i === 14) ? 'LR' : (i === 15) ? 'PC' : 'R' + i}
                value={stateRegisters.get(i)}
                updated={diff?.registers[i]}
            />
        ));

        const openFileButton = (
            <button
                onClick={() => this.handleOpenFileButtonClicked()}
                key={'openFileButton'}
            >Open file...</button>
        );

        const saveFileButton = (
            <button
                onClick={() => this.handleSaveFileButtonClicked()}
                key={'saveFileButton'}
            >Save file...</button>
        );

        const memoryCheckbox = (
            <label>
                <input
                    type={'checkbox'}
                    onChange={e => this.updateState({ showingMemory: e.target.checked })}
                />
                Show memory
            </label>
        )
        const assembleButton = (
            <button
                onClick={() => this.handleAssemble()}
                key={'assembleButton'}
                title={'Assemble code (F6)'}
            >Assemble</button>
        );
        const runButton = (
            <button
                onClick={() => this.handleRun()}
                key={'runButton'}
                title={'Run program (F7)'}
            >Run</button>
        );
        const debugButton = (
            <button
                onClick={() => this.handleDebug(true)}
                key={'debugButton'}
                title={'Debug program (F8)'}
            >Debug</button>
        );
        const stepBackButton = (
            <button
                onClick={() => this.handleContinue('backward', true)}
                key={'stepBackButton'}
            >Step back</button>
        );
        const stepForwardButton = (
            <button
                onClick={() => this.handleContinue('forward', true)}
                key={'stepForwardButton'}
            >Step forward</button>
        );
        const continueButton = (
            <button
                onClick={() => this.handleContinue('forward', false)}
                key={'continueButton'}
                title={'Continue (F8)'}
            >Continue</button>
        );
        const stopButton = (
            <button
                onClick={() => this.handleStop()}
                key={'stopButton'}
            >Stop</button>
        );
        const optionsButton = (
            <button
                onClick={() => this.handleShowOptionsDialog()}
                key={'optionsButton'}
            >Options</button>
        );

        const buttons = (this.state.state === '') ? [ openFileButton, saveFileButton, assembleButton, runButton, debugButton, optionsButton ]
            : (this.state.state === 'running') ? [ stopButton ]
            : (this.state.state === 'debugging/paused') ? [ stepBackButton, stepForwardButton, continueButton, stopButton ]
            : (this.state.state === 'debugging/running') ? [ stopButton ]
            : [];

        const markers = [];
        if (this.state.debugCurrentLine !== null) {
            markers.push({
                startRow: this.state.debugCurrentLine - 1,
                endRow: this.state.debugCurrentLine,
                type: 'line',
                className: 'debug-current-line'
            });
        }

        const readOnly = (this.state.state !== '');

        const className = 'App' + (this.state.dark ? ' dark-mode' : '');

        return (
            <div className={className}
                 onKeyDown={e => this.handleKeyDown(e)}
            >
                <OpenFileDialog
                    ref={ref => this.openFileDialogRef = ref}
                    onOpen={code => this.handleOpenFile(code)}
                />
                <OptionsDialog
                    ref={ref => this.optionsDialogRef = ref}
                    initialOptions={this.state.options}
                    onAccept={newOptions => this.handleOptionsChange(newOptions)}
                />
                <Top>
                    <Controls>
                        <div
                            className={'dark-mode-toggle'}
                            title={'Toggle dark mode'}
                            onClick={_ => this.handleToggleDarkMode()}
                        />
                        <a href={"https://cs.westminsteru.edu/cmpt328/webarm/docs/"} target={"docs"}>Help</a>
                    </Controls>
                    <Title
                        title={`WebARM version ${VERSION}`}
                    >
                        WebARM
                    </Title>
                    <Controls>
                        {memoryCheckbox}
                        {buttons}
                        <Logo
                            src={logo}
                        />
                    </Controls>
                </Top>
                    <Editor
                        ref={ref => this.setEditorRef(ref)}
                        value={this.state.code}
                        theme={this.state.dark ? 'github_dark' : 'textmate'}
                        fontSize={18}
                        onChange={(s) => this.handleCodeChange(s)}
                        mode={'text'}
                        markers={markers}
                        readOnly={readOnly}
                        className={readOnly ? 'read-only' : ''}
                        tabSize={8}
                        width={'initial'}
                        height={'initial'}
                        wrapEnabled={false}
                        showPrintMargin={false}
                        setOptions={{
                            highlightActiveLine: !readOnly,
                            highlightGutterLine: !readOnly,
                            fixedWidthGutter: true,
                            animatedScroll: true,
                        }}
                    >{this.state.code}</Editor>
                    <Registers>
                        {registers}
                        <NzcvDisplay
                            N={this.state.simulatorState.N}
                            Z={this.state.simulatorState.Z}
                            C={this.state.simulatorState.C}
                            V={this.state.simulatorState.V}
                            updatedN={diff?.nzcv.N}
                            updatedZ={diff?.nzcv.Z}
                            updatedC={diff?.nzcv.C}
                            updatedV={diff?.nzcv.V}
                        />
                    </Registers>
                    {(this.state.showingMemory) ? (
                        <RamDisplay
                            memory={this.state.simulatorState.memory}
                            highlightWord={this.state.state === 'debugging/paused' ? this.state.simulatorState.PC : null}
                            style={{gridArea: 'memory'}}
                            updatedAddresses={diff?.memory}
                            symbolAddresses={symbolAddresses}
                            registers={stateRegisters}
                        />
                    ) : null}
                <MessageDisplay>{this.state.message || ' '}</MessageDisplay>
                <SimulatorOutput>
                    {simulatorOutputText}
                    <SimulatorOutputLabel>
                        Simulator output
                    </SimulatorOutputLabel>
                </SimulatorOutput>
            </div>
        );
    }

    setEditorRef(ref) {
        this.editorRef = ref;
    }

    componentDidMount() {
        const customMode = new AssemblyARM32Mode();
        this.editorRef.editor.getSession().setMode(customMode);
    }

    updateState(changedProperties) {
        const newState = { ...this.state, ...changedProperties };
        this.setState(newState);
    }

    getWorker() {
        if (!simWorker) {
            simWorker = new Worker(new URL('./simWorker.js', import.meta.url));
            simWorker.addEventListener('message', e => {
                if (e.data.seq === this.seq && this.messageHandler)
                    this.messageHandler(e.data.message);
                else
                    console.info(`Received stale message from worker:`, e.data.message);
            });
        }

        return simWorker;
    }

    stopWorker() {
        if (simWorker)
            simWorker.terminate();
        if (workerTimeout)
            clearTimeout(workerTimeout);

        this.seq = this.messageHandler = simWorker = null;
    }

    handleToggleDarkMode() {
        const newDarkMode = !this.state.dark;
        if ('localStorage' in window)
            window['localStorage'].setItem(DARK_MODE_STORAGE_PROPERTY, JSON.stringify(newDarkMode));
        this.updateState({
            dark: newDarkMode,
        });
    }

    handleKeyDown(e) {
        if (e.code === 'F6') {
            e.preventDefault();
            if (this.state.state === '')
                this.handleAssemble();
        } else if (e.code === 'F7') {
            e.preventDefault();
            if (this.state.state === '')
                this.handleRun();
        } else if (e.code === 'F8') {
            e.preventDefault();
            if (this.state.state === '')
                this.handleDebug();
            else if (this.state.state === 'debugging/paused')
                this.handleContinue('forward', false);
        }
    }

    handleOpenFileButtonClicked() {
        if (this.openFileDialogRef)
            this.openFileDialogRef.dialogRef.showModal();
    }

    handleOpenFile(code) {
        this.handleCodeChange(code);
        this.updateState({
            simulatorState: new SimulatorState(),
            previousSimulatorState: null,
            simulatorStateDiff: null,
        });
    }

    handleSaveFileButtonClicked() {
        const data = new Blob([this.state.code + '\n'], { type: 'text/plain' });
        const a = document.createElement('a');
        const url = URL.createObjectURL(data);
        a.href = url;
        a.download = 'code.webs';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }

    handleCodeChange(s) {
        if ('localStorage' in window)
            window['localStorage'].setItem(CODE_STORAGE_PROPERTY, s);
        this.updateState({ code: s });
    }

    handleOptionsChange(options) {
        if ('localStorage' in window)
            window['localStorage'].setItem(OPTIONS_STORAGE_PROPERTY, JSON.stringify(options));
        this.updateState({
            options: options,
        });
    }

    handleShowOptionsDialog() {
        if (this.optionsDialogRef)
            this.optionsDialogRef.dialogRef.showModal();
    }

    handleAssemble() {
        this.clearMessages();
        ++this.seq;

        this.messageHandler = msg => {
             if (msg.result === 'success') {
                 this.printMessage('Looks good!');
                 if (msg.state)
                     this.updateState({
                         simulatorState: SimulatorState.reconstruct(msg.state),
                         previousSimulatorState: null,
                         simulatorStateDiff: null,
                         symbolAddresses: msg.symbols,
                     });
             } else
                 this.printMessage(`Line ${msg.error.line}: ${msg.error.text}`);
        };

        this.getWorker().postMessage({
            seq: this.seq,
            command: 'assemble',
            params: {
                code: this.state.code,
            }
        });
    }

    workerOptions() {
        return {
            stopOnZero: this.state.options.stopOnZero,
            ...(this.state.options.stopAfterInstructions[0] ? { stopAfterInstructions: this.state.options.stopAfterInstructions[1] * 1000 } : {}),
            ...(this.state.options.stopAfterTime[0] ? { stopAfterTime: this.state.options.stopAfterTime[1] * 1000 } : {}),
        };
    }

    handleRun() {
        this.updateState({
            state: 'running',
            message: '',
            simulatorState: new SimulatorState(),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            debugCurrentLine: null,
        });
        ++this.seq;

        /*
        workerTimeout = window.setTimeout(() => {
            this.stopWorker();
            this.updateState({
                message: "Execution halted (appeared to be stuck in a loop)",
                state: '',
            });
        }, 5000);
        */

        this.messageHandler = msg => {
            //window.clearTimeout(workerTimeout);

            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.broken) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: 'debugging/paused',
                    symbolAddresses: msg.symbols,
                });
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions in ${msg.executionTime / 1000}s`);
            } else if (state.exceededLimits) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                console.error(`Unexpected simulator state after run: ${state.state}`);
        };

        this.getWorker().postMessage({
            seq: this.seq,
            command: 'run',
            params: {
                code: this.state.code,
                options: {
                    stopAfterEveryInstruction: false,
                    stopOnBreak: false,
                    stopOnInterrupt: true,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleDebug(breakEveryInstruction) {
        this.updateState({
            state: 'debugging/running',
            message: '',
            simulatorState: new SimulatorState(),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            debugCurrentLine: null,
        });

        ++this.seq;

        this.messageHandler = msg => {
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
            } else if (state.exceededLimits) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState, false),
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });

            if (this.state.debugCurrentLine)
                this.editorRef.editor.scrollToLine(this.state.debugCurrentLine - 1, true, true, () => {});
        };

        this.getWorker().postMessage({
            seq: this.seq,
            command: 'run',
            params: {
                code: this.state.code,
                options: {
                    stopImmediately: breakEveryInstruction,
                    stopAfterEveryInstruction: breakEveryInstruction,
                    stopOnBreak: true,
                    stopOnInterrupt: true,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleContinue(direction, stopEveryInstruction) {
        ++this.seq;

        this.updateState({
            state: 'debugging/running',
            message: '',
            debugCurrentLine: null,
        });

        this.messageHandler = msg => {
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
            } else if (state.exceededLimits) {
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                this.updateState({
                    simulatorState: state,
                    previousSimulatorState: this.state.simulatorState,
                    simulatorStateDiff: state.diff(this.state.simulatorState),
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                    message: `Paused (${state.numSteps} instructions executed)`,
                });

            if (this.state.debugCurrentLine)
                this.editorRef.editor.scrollToLine(this.state.debugCurrentLine - 1, true, true, () => {});
        };

        this.getWorker().postMessage({
            seq: this.seq,
            command: 'run',
            params: {
                code: null,
                options: {
                    resume: true,
                    stopAfterEveryInstruction: stopEveryInstruction,
                    stopOnBreak: true,
                    stopOnInterrupt: true,
                    direction: direction,
                    resetWrittenAddressRecord: true,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleStop() {
        this.stopWorker();
        this.updateState({
            message: "Execution halted (stop button pushed)",
            state: '',
            debugCurrentLine: null,
        });
    }

    handleSoftwareInterrupt(simulatorState) {
        console.warn('handleSoftwareInterrupt() needs to be redone!');

    }

    clearMessages() {
        this.updateState({
            message: ''
        });
    }

    printMessage(text) {
        this.updateState({
            message: this.state.message + text
        });
    }

    printErrorMessage(line, text) {
        if (line)
            this.printMessage(`Line ${line}: ${text}`);
        else
            this.printMessage(text);
    }

    makeSimulatorOutputText(stdout) {
        function printableChar(b) {
            if (b === 0x09 || b === 0x0A || b >= 0x20 && b <= 0x7e)
                return String.fromCharCode(b);
            else
                return null;
        }

        function appendRange(text, printable) {
            if (text.length === 0)
                return;
            else if (printable)
                ranges.push(text);
            else
                ranges.push((
                    <Nonprintable key={key++}>{text}</Nonprintable>
                ));
        }

        let text = '';
        let printable = true;
        let ranges = [];
        let key = 0;
        for (let byte of stdout.bytes) {
            const c = printableChar(byte);
            if (!!c === printable)
                text += c || '•';
            else {
                appendRange(text, printable);
                text = c || '•';
                printable = !!c;
            }
        }

        appendRange(text, printable);

        return ranges;
    }
}

let simWorker = null;
let workerTimeout = null;

export default App;
