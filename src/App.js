import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h5>This is react app</h5>
       <Home />
      </header>
    </div>
  );
}

export default App;
