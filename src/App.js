
import './App.css';
import './assets/css/starter.css';
import './assets/js/starter.js'
import {Menu} from './MainMenu';
import {Header} from './Header';
import {Container} from './Container';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
