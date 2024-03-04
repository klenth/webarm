import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import './App.css';
import NzcvDisplay from './components/NzcvDisplay';
import RamDisplay from './components/RamDisplay';
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
    }

    render() {
        const stateRegisters = this.state.simulatorState.registers || [];
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={(i === 13) ? 'SP' : (i === 14) ? 'LR' : (i === 15) ? 'PC' : 'R' + i}
                value={stateRegisters[i]}
            />
        ));

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
                onClick={() => this.handleDebug()}
                key={'debugButton'}
            >Debug</button>
        );
        const stepBackButton = (
            <button
                onClick={() => this.handleStepBack()}
                key={'stepBackButton'}
            >Step back</button>
        );
        const stepForwardButton = (
            <button
                onClick={() => this.handleStepForward()}
                key={'stepForwardButton'}
            >Step forward</button>
        );
        const continueButton = (
            <button
                onClick={() => this.handleContinue()}
                key={'continueButton'}
            >Continue</button>
        );
        const stopButton = (
            <button
                onClick={() => this.handleStop()}
                key={'stopButton'}
            >Stop</button>
        );

        const buttons = (this.state.state === '') ? [ parseButton, runButton, debugButton ]
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
                if (e.data.command === 'parse')
                    this.handleParseComplete(e.data);
                else if (e.data.command === 'run')
                    this.handleRunComplete(e.data);
                else if (e.data.command.startsWith('debug'))
                    this.handleDebugReturn(e.data);
            });
        }

        return simWorker;
    }

    stopWorker() {
        if (simWorker)
            simWorker.terminate();
        if (workerTimeout)
            clearTimeout(workerTimeout);

        simWorker = null;
    }

    handleCodeChange(s) {
        this.updateState({ code: s });
    }

    handleParse() {
        this.getWorker().postMessage({
            command: 'parse',
            params: {
                code: this.state.code,
            }
        });
    }

    handleRun() {
        this.updateState({ state: 'running', message: '', simulatorState: new SimulatorState() });
        workerTimeout = window.setTimeout(() => {
            this.stopWorker();
            this.updateState({
                message: "Execution halted (appeared to be stuck in a loop)",
                state: '',
            });
        }, 5000);

        this.getWorker().postMessage({
            command: 'run',
            params: {
                code: this.state.code,
            },
        });

    }

    handleDebug() {
        this.updateState({ message: '', simulatorState: new SimulatorState() });
        this.getWorker().postMessage({
            command: 'debug',
            params: {
                code: this.state.code,
            }
        });
    }

    handleStepBack() {
        this.getWorker().postMessage({
            command: 'debug/step',
            params: {
                direction: 'backward',
            }
        });
    }

    handleStepForward() {
        this.getWorker().postMessage({
            command: 'debug/step',
            params: {
                direction: 'forward',
            }
        });
    }

    handleContinue() {
        this.getWorker().postMessage({
            command: 'debug/continue',
            params: {}
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

    handleParseComplete(data) {
        if (data.status === 'complete') {
            this.updateState({
                message: 'Parse complete - looks good!'
            });
        } else if (data.status === 'error') {
            if (data.params.error_context === 'assembly')
                this.updateState({
                    message: 'Line ' + (data.params.lineNumber || '?') + ': ' + data.params.message
                });
            else if (data.params.error_context === 'parse')
                this.updateState({
                    message: 'Line ' + (data.params.line || '?') + ': ' + data.params.message
                });
        }
    }

    handleRunComplete(data) {
        if (workerTimeout)
            clearTimeout(workerTimeout);

        if (data.status === 'complete') {
            this.updateState({
                simulatorState: SimulatorState.reconstruct(data.finalState),
                state: '',
                message: `Program ended after ${data.finalState.numSteps} instructions.`
            });
        } else if (data.status === 'error') {
            if (data.params.error_context === 'assembly')
                this.updateState({
                    message: 'Line ' + (data.params.lineNumber || '?') + ': ' + data.params.message,
                    state: ''
                });
            else if (data.params.error_context === 'parse')
                this.updateState({
                    message: 'Line ' + (data.params.line || '?') + ': ' + data.params.message,
                    state: ''
                });
            else
                this.updateState({
                    message: 'Unspecified error while running code',
                    state: ''
                });
        }
    }

    handleDebugReturn(data) {
        if (data.command === 'debug') {
            if (data.status === 'ready')
                this.updateState({
                    state: 'debugging/paused',
                    simulatorState: SimulatorState.reconstruct(data.state),
                    debugCurrentLine: data.line,
                });
            else if (data.status === 'error')
                this.updateState({
                    state: '',
                    message: data.message,
                });
        } else if (data.command === 'debug/step') {
            const newSimulatorState = SimulatorState.reconstruct(data.state);
            if (data.status === 'error')
                this.updateState({
                    message: data.message,
                });
            else {
                this.updateState({
                    simulatorState: newSimulatorState,
                    debugCurrentLine: newSimulatorState.running ? data.line : null,
                    ...(!newSimulatorState.running ? {state: ''} : {})
                });
            }
        } else if (data.command === 'debug/continue') {
            const newSimulatorState = SimulatorState.reconstruct(data.state);
            this.updateState({
                simulatorState: newSimulatorState,
                debugCurrentLine: newSimulatorState.broken ? data.line : null,
                state: newSimulatorState.broken ? 'debugging/paused' : '',
                ...(newSimulatorState.stopped ? { message: `Program ended after ${newSimulatorState.numSteps} instructions.` } : {})
            });
        }
    }
}

let simWorker = null;
let workerTimeout = null;

export default App;
