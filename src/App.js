import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { RegisterBank } from './arm32sim/RegisterBank.js';
import './App.css';
import NzcvDisplay from './components/NzcvDisplay';
import RamDisplay from './components/RamDisplay';
import OpenFileDialog from './components/OpenFileDialog';
//import 'ace-builds/src-noconflict/mode-text';
import AssemblyARM32Mode from './ace-editor/mode-arm32.js';

const Controls = styled.div`
  text-align: right;
  padding: 8px;
  
  & > * {
    margin: 2px 8px;
  }
`;

const Center = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  gap: 16px;
  
`;

const Editor = styled(AceEditor)`
  flex-grow: 1;
  height: 100%;
  
  .debug-current-line {
    background-color: var(--color-for-current-highlight);
    position: absolute;
  }
`;

const Registers = styled.div`
  flex-grow: 0;
`;

const MessageDisplay = styled.div`
`;

const SimulatorOutput = styled.pre`
`;

const Nonprintable = styled.span`
    color: #bbb;
`;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            simulatorState: new SimulatorState(),
            message: '',
            state: '',
            debugCurrentLine: null,
            showingMemory: false,
        };
        this.editorRef = null;
        this.openFileDialogRef = null;
        this.seq = 0;
        this.messageHandler = null;
    }

    render() {
        const stateRegisters = this.state.simulatorState.registers || new RegisterBank();
        const simulatorOutputText = this.makeSimulatorOutputText(this.state.simulatorState.stdout);
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={(i === 13) ? 'SP' : (i === 14) ? 'LR' : (i === 15) ? 'PC' : 'R' + i}
                value={stateRegisters.get(i)}
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
        const parseButton = (
            <button
                onClick={() => this.handleParse()}
                key={'parseButton'}
            >Parse</button>
        );
        const runButton = (
            <button
                onClick={() => this.handleRun()}
                key={'runButton'}
            >Run</button>
        );
        const debugButton = (
            <button
                onClick={() => this.handleDebug(true)}
                key={'debugButton'}
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
            >Continue</button>
        );
        const stopButton = (
            <button
                onClick={() => this.handleStop()}
                key={'stopButton'}
            >Stop</button>
        );

        const buttons = (this.state.state === '') ? [ openFileButton, saveFileButton, parseButton, runButton, debugButton ]
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

        return (
            <div className="App">
                <OpenFileDialog
                    ref={ref => this.openFileDialogRef = ref}
                    onOpen={code => this.handleOpenFile(code)}
                />
                <Controls>
                    {memoryCheckbox}
                    {buttons}
                </Controls>
                <Center>
                    <Editor
                        ref={ref => this.setEditorRef(ref)}
                        value={this.state.code}
                        fontSize={24}
                        onChange={(s) => this.handleCodeChange(s)}
                        mode={'text'}
                        height={'inherit'}
                        markers={markers}
                        readOnly={readOnly}
                        className={readOnly ? 'read-only' : ''}
                        tabSize={8}
                        setOptions={{
                            highlightActiveLine: !readOnly,
                            highlightGutterLine: !readOnly,
                        }}
                    />
                    <Registers>
                        {registers}
                        <NzcvDisplay
                            N={this.state.simulatorState.N}
                            Z={this.state.simulatorState.Z}
                            C={this.state.simulatorState.C}
                            V={this.state.simulatorState.V}
                        />
                    </Registers>
                    {(this.state.showingMemory) ? (
                        <RamDisplay
                            memory={this.state.simulatorState.memory}
                            highlightWord={this.state.state === 'debugging/paused' ? this.state.simulatorState.PC : null}
                        />
                    ) : null}
                </Center>
                <MessageDisplay>{this.state.message}</MessageDisplay>
                <SimulatorOutput>{simulatorOutputText}</SimulatorOutput>
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

    handleOpenFileButtonClicked() {
        if (this.openFileDialogRef)
            this.openFileDialogRef.dialogRef.showModal();
    }

    handleOpenFile(code) {
        this.updateState({
            code: code,
            simulatorState: new SimulatorState()
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
        this.updateState({ code: s });
    }

    handleParse() {
        this.clearMessages();
        ++this.seq;

        this.messageHandler = msg => {
            console.debug('handleParse() message handler: msg =', msg);
             if (msg.result === 'success')
                 this.printMessage('Looks good!');
             else
                 this.printMessage(`Line ${msg.error.line}: ${msg.error.text}`);
        };

        this.getWorker().postMessage({
            seq: this.seq,
            command: 'parse',
            params: {
                code: this.state.code,
            }
        });
    }

    handleRun() {
        this.updateState({
            state: 'running',
            message: '',
            simulatorState: new SimulatorState(),
            debugCurrentLine: null,
        });
        ++this.seq;

        workerTimeout = window.setTimeout(() => {
            this.stopWorker();
            this.updateState({
                message: "Execution halted (appeared to be stuck in a loop)",
                state: '',
            });
        }, 5000);

        this.messageHandler = msg => {
            window.clearTimeout(workerTimeout);

            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateState({
                    simulatorState: state,
                    state: '',
                    debugCurrentLine: msg.line,
                });
                this.printErrorMessage(msg.error.line, msg.error.text);
            } else if (state.broken) {
                this.updateState({
                    simulatorState: state,
                    state: 'debugging/paused',
                });
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    state: '',
                    debugCurrentLine: null,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
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
                },
            },
        });
    }

    handleDebug(breakEveryInstruction) {
        this.updateState({
            state: 'debugging/running',
            message: '',
            simulatorState: new SimulatorState(),
            debugCurrentLine: null,
        });

        ++this.seq;

        this.messageHandler = msg => {
            console.debug('Debug message handler: msg =', msg);
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateState({
                    simulatorState: state,
                    state: '',
                    debugCurrentLine: msg.line,
                });
                this.printErrorMessage(msg.error.line, msg.error.text);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    state: '',
                    debugCurrentLine: null,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
            } else
                this.updateState({
                    simulatorState: state,
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                });
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
                    state: '',
                    debugCurrentLine: msg.line,
                });
                this.printErrorMessage(msg.error.line, msg.error.text);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateState({
                    simulatorState: state,
                    state: '',
                    debugCurrentLine: null,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
            } else
                this.updateState({
                    simulatorState: state,
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                });
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
        const functionCode = simulatorState.registers.get(7);
        const returnMessage = {
            command: this.state.state === 'running' ? 'run/continue'
                : this.state.state === 'debugging/paused' ? 'debug/step'
                : this.state.state === 'debugging/running' ? 'debug/continue'
                : '???',
            params: {
                state: simulatorState
            },
        };
        console.debug(`Return message command: ${returnMessage.command}`);
        switch (functionCode >>> 0) {
            case 0x8000_0010: // putchar
                const char = String.fromCharCode(simulatorState.registers.get(0) & 0xff);
                this.printMessage(char);
                simulatorState.registers.set(0, (simulatorState.registers.get(0) & 0xffffff00) | 1);
                this.getWorker().postMessage(returnMessage);
                break;
            default:
                this.updateState({
                    message: `Invalid software interrupt code: ${functionCode.toString(16)}`
                });
        }
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
            if (b >= 0x20 && b <= 0x7e)
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
