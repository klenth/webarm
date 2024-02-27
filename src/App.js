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
        };
    }

    render() {
        const stateRegisters = this.state.simulatorState.registers || [];
        console.log(this.state);
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={(i === 13) ? 'SP' : (i === 14) ? 'LR' : (i === 15) ? 'PC' : 'R' + i}
                value={stateRegisters[i]}
            />
        ));

        return (
            <div className="App">
                <Controls>
                    <button
                        onClick={() => this.handleParse()}
                    >Parse</button>
                    <button
                        onClick={() => this.handleRun()}
                    >Run</button>
                    <button
                        onClick={() => this.handleStop()}
                    >Stop</button>
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
        const newState = Object.assign({}, this.state);
        newState.code = s;
        this.setState(newState);
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
        console.log('Posting message to worker');
        this.getWorker().postMessage({
            command: 'run',
            params: {
                code: this.state.code,
            },
        });

        workerTimeout = window.setTimeout(() => {
            this.stopWorker();
            const newState = { ...this.state };
            newState.message = "Execution halted (appeared to be stuck in a loop)";
            this.setState(newState);
        }, 5000);
    }

    handleStop() {
        this.stopWorker();
        const newState = { ...this.state };
        newState.message = "Execution halted (stop button pushed)";
        this.setState(newState);
    }

    handleParseComplete(data) {
        if (data.status === 'complete') {
            console.log('Parsed code!');
            const ast = AST.AstNode.reconstruct(data.params.ast);
            console.log(ast);
            AST.logAst(ast);
        } else if (data.status === 'error') {
            console.log('Unable to parse!');
        }
    }

    handleRunComplete(data) {
        if (data.status === 'complete') {
            if (workerTimeout)
                clearTimeout(workerTimeout);
            const newState = { ...this.state };
            newState.simulatorState = SimulatorState.reconstruct(data.finalState);
            console.log(data.finalState);
            this.setState(newState);
        }
    }
}

let simWorker = null;
let workerTimeout = null;

export default App;
