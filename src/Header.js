import jwtDecode from 'jwt-decode';
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import React, { useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import { Counters } from './Counters';
import { Home } from './Home';
import { TermsAndConditions } from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Imprint from './Imprint';
import Greeting from './Greeting';
import Login from './Login';
import NotFound from './NotFound';
import { Navigate } from 'react-router-dom';

export function Header() {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  
  useEffect(() => {
      // Check if user is authenticated (e.g., check tokens in local storage)
    if (tokens && !isTokenExpired(tokens.AccessToken)) {

    } else {
      // Clear the tokens from localStorage if expired or not found
    }
  }, []);

  const isTokenExpired = (token) => {
    if (!token) return true;

    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    return decodedToken.exp < currentTime;
  };

  const renderAuthDropdown = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    // console.log(isAuthenticated)
    if (tokens) {
      // User is logged in
      // Decode the ID token to extract the user attributes
      const decodedIdToken = jwtDecode(tokens.IdToken);
      // console.log(decodedIdToken);
      const email = decodedIdToken.email;
      // console.log(email);
      return (
        <NavDropdown title={email} id="basic-nav-dropdown">
          {email}
          {/* <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item> */}
        </NavDropdown>
      );
    } else {
      // User is not logged in
      return (
        <NavDropdown title="Sign In" id="basic-nav-dropdown">
          {/* <Form>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSignIn}>
              Sign In
            </Button>
          </Form> */}
          <NavDropdown.Item as={Link} to="/login">Sign In</NavDropdown.Item>
        </NavDropdown>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/greeting">
                Greeting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shopping-list">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counters">
                Counters
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link> 
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>{renderAuthDropdown()}</Nav>
        </Navbar.Collapse>
      </Navbar>   
      <Routes>
      <Route path="/" element={tokens
        ? <Home />
        : <Navigate to="/login" replace />
      } />
      <Route path="/greeting" element={<Greeting name="World" />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/counters" element={<Counters />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/profile" element={tokens
        ? <ProfileButton />
        : <Navigate to="/login" replace />
      } />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />      
    </Routes>         
    </>
  );
}
