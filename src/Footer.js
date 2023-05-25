import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <p>&copy; {currentYear} IT Spektar. All rights reserved.</p>
        <p>
          <Link to="/terms-and-conditions">Terms and Conditions</Link> |{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/imprint">Imprint</Link>
        </p>
      </div>
    </footer>
  );
}
