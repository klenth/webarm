import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import './App.css';
import NzcvDisplay from './components/NzcvDisplay';
import 'ace-builds/src-noconflict/mode-text';

const Controls = styled.div`
  text-align: right;
  padding: 8px;
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
        };
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
        const stopButton = (
            <button
                onClick={() => this.handleStop()}
                key={'stopButton'}
            >Stop</button>
        );

        const buttons = (this.state.state === '') ? [ parseButton, runButton ]
            : (this.state.state === 'running') ? [ stopButton ]
            : [];

        return (
            <div className="App">
                <Controls>
                    {buttons}
                </Controls>
                <Center>
                    <Editor
                        value={this.state.code}
                        fontSize={24}
                        onChange={(s) => this.handleCodeChange(s)}
                        mode={'text'}
                        height={'inherit'}
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
                </Center>
                <MessageDisplay>{this.state.message}</MessageDisplay>
            </div>
        );
    }

    updateState(changedProperties) {
        const newState = { ...this.state, ...changedProperties };
        this.setState(newState);
    }

    getWorker() {
        if (!simWorker) {
            simWorker = new Worker(new URL('./simWorker.js', import.meta.url));
            simWorker.addEventListener('message', e => {
                console.log('Received message from worker');
                if (e.data.command === 'parse')
                    this.handleParseComplete(e.data);
                else if (e.data.command === 'run')
                    this.handleRunComplete(e.data);
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
        this.updateState({ state: 'running', message: '' });
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

    handleStop() {
        this.stopWorker();
        this.updateState({
            message: "Execution halted (stop button pushed)",
            state: '',
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
}

let simWorker = null;
let workerTimeout = null;

export default App;
