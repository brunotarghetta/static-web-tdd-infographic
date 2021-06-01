import logo from './logo.svg';
import './App.css';
import './assets/css/starter.css';
import './assets/js/starter.js'


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
