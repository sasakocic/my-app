import logo from './logo.svg';
import { Greeting } from './Greeting';
import { Link } from 'react-router-dom';

export function Home() {
  return (
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
      <Link to="/profile">Profile</Link>
      <Greeting name="world" />
      <Link to="/shopping-list">Shopping List</Link>
      <Link to="/counters">Counters</Link>
    </header>
  );
}
