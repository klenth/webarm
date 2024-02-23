import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import './App.css';

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
                        onClick={() => this.handleParse()}
                    >Parse</button>
                    <button
                        onClick={() => this.handleRun()}
                    >Run</button>
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
        simWorker = new Worker(new URL('./simWorker.js', import.meta.url));
        simWorker.addEventListener('message', e => {
            console.log('Received message from worker');
            if (e.data.command === 'parse')
                this.handleParseComplete(e.data);
        });
    }

    handleCodeChange(s) {
        const newState = Object.assign({}, this.state);
        newState.code = s;
        this.setState(newState);
    }

    handleParse() {
        simWorker.postMessage({
            command: 'parse',
            params: {
                code: this.state.code,
            }
        });
    }

    handleRun() {
        console.log('Posting message to worker');
        simWorker.postMessage({
            command: 'run',
            params: {
                code: this.state.code,
            },
        });
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
}

let simWorker = null;

export default App;
