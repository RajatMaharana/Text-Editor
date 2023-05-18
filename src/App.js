import './App.css';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src='/logo.png' alt="logo" />
        <h1>Text Editor</h1>
      </header>
      <TextEditor />
    </div>
  );
}

export default App;
