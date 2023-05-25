import './App.css';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counters } from './Counters';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
