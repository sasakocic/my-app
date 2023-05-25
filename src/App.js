import logo from './logo.svg';
import './App.css';
import { MyButton } from './MyButton';
import { Greeting } from './Greeting';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>Counters that update separately</h3>
        <MyButton />
        <MyButton />
        <ProfileButton />
        <Greeting name="world" />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
