import './App.css';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counters } from './Counters';
import { Home } from './Home';
import { TermsAndConditions } from './TermsAndConditions';
import { Footer } from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import Imprint from './Imprint';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileButton />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>      
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
