import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="container">
      <div className="App">
        <BrowserRouter>
          <Header />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
