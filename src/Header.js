import { Link } from 'react-router-dom';

export function Header() {
  return (
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
  );
}
