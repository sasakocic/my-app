import logo from './logo.svg';
import './App.css';
import { MyButton } from './MyButton';
import { Greeting } from './Greeting';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Card } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/shopping-list" component={ShoppingList} />
        {/* Other routes */}
      </Switch>
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
        <h3>Counters that update together</h3>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <ProfileButton />
        <Greeting name="world" />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
