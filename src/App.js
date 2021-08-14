import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplication "Movie Browser" will be available soon 😉
        </p>
        <p>
          Powered by
          <a
            className="App-link"
            href="https://youcode.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
             youcode.pl
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
