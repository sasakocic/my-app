import logo from './logo.svg';
import './App.css';
import { MyButton } from './MyButton';
import { Greeting } from './Greeting';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const shoppingProducts = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product => 
  <li key={product.id}>
    {product.title}
  </li>
)

function ListProducts() {
  return (
    <ul>{listItems}</ul>
  )
}

let showHide = false

export function toggleShowHide() {
  showHide = true
  document.querySelector('#show-hide').innerHTML = "Show/hide is " + showHide.toString()
  alert(showHide.toString())
}

function ShoppingList() {
  const shoppingItems = shoppingProducts.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{shoppingItems}</ul>
  );
}

function ProfileButton() {
  return (
    <button id="show-hide" onClick={toggleShowHide}>Show/hide is {showHide.toString()}</button>
    //       dangerouslySetInnerHTML={{ __html: "Show/hide is " + showHide.toString() }} />
  );
}


function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

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
        <h2>Counters that update separately</h2>
        <MyButton />
        <MyButton />
        <ProfileButton />
        <img className='avatar' src="/avatar.jpeg"/>
        <Greeting name="world" />
        {showHide && <Profile />}
        <ListProducts />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
