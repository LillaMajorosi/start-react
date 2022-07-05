import logo from './logo.svg';
import './App.css';

import ClickButton from './components/ClickButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React</p>
        {/*<button onClick={(event) => { //event helyére {target}
          event.target.innerText = "clicked" //event.-ot töröljük
        }}> Click me </button>*/}
      <ClickButton />
      </header>
    </div>
  );
}

export default App;
