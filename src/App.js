import logo from './logo.svg';
import RegisterDisplay from './components/RegisterDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <RegisterDisplay
            label={'R0'}
            value={0}
          />
          <RegisterDisplay
            label={'R1'}
            value={32767}
          />
          <RegisterDisplay
            label={'R2'}
            value={-2}
          />
          <RegisterDisplay
            label={'R3'}
            value={-1000}
          />
          <RegisterDisplay
            label={'R4'}
            value={1000}
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
