import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import './App.css';

import simWorkerCode from './simWorker.js';
import WorkerBuilder from './WorkerBuilder';

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
`;

const Registers = styled.div`
  flex-grow: 0;
`;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    render() {
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={'R' + i}
                value={null}
            />
        ));

        return (
            <div className="App">
                <Controls>
                    <button
                        onClick={() => this.handleRun()}
                    >Run
                    </button>
                    <button>Stop</button>
                    <button>Reset</button>
                </Controls>
                <Center>
                    <Editor
                        value={this.state.code}
                        fontSize={24}
                        onChange={(s) => this.handleCodeChange(s)}
                    />
                    <Registers>
                        {registers}
                    </Registers>
                </Center>
            </div>
        );
    }

    componentDidMount() {
        simWorker = new WorkerBuilder(simWorkerCode);
        simWorker.addEventListener('message', e => {
            console.log('Received message from worker!');
        });
    }

    handleCodeChange(s) {
        const newState = Object.assign({}, this.state);
        newState.code = s;
        this.setState(newState);
    }

    handleRun() {
        simWorker.postMessage({
            command: 'run',
            params: {
                code: this.state.code,
            },
        });
    }
}

let simWorker = null;

export default App;
