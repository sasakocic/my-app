import './App.css';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Counters } from './Counters';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping-list">Shopping List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counters">Counters</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileButton />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/counters" element={<Counters />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
