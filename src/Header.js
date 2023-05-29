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
// import Login from './Login';
import Logout from './Logout';
import NotFound from './NotFound';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Login, getEmail } from './Login';

export function Header() {
  const [email, setEmail] = useState('Sign In');
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  
  useEffect(() => {
      // Check if user is authenticated (e.g., check tokens in local storage)
    if (tokens && !isTokenExpired(tokens.AccessToken)) {
      setEmail(getEmail(tokens));
    } else {
      // Clear the tokens from localStorage if expired or not found
      setEmail('Sign In');
    }
  }, []);

  const isTokenExpired = (token) => {
    if (!token) return true;

    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    return decodedToken.exp < currentTime;
  };

  const renderAuthDropdown = () => {
    // const tokens = JSON.parse(localStorage.getItem('tokens'));
    // console.log(isAuthenticated)
    if (tokens) {
      // User is logged in
      // Decode the ID token to extract the user attributes
      // const decodedIdToken = jwtDecode(tokens.IdToken);
      // console.log(decodedIdToken);
      // const email = decodedIdToken.email;
      // console.log(email);
      return (
        <NavDropdown title={email} id="basic-nav-dropdown">
          {/* <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item> */}
          <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      // User is not logged in
      return (
        <NavDropdown title={email} id="basic-nav-dropdown">
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/greeting">Greeting</Nav.Link>
            <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
            <Nav.Link href="/counters">Counters</Nav.Link>
          </Nav>
          <Nav className="ms-auto">{renderAuthDropdown()}</Nav>
        </Navbar.Collapse>
      </Navbar>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting name="World" />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/profile" element={tokens ? <ProfileButton /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setEmail={setEmail}/>} />
        <Route path="/logout" element={<Logout setEmail={setEmail}/>} />
        <Route path="*" element={<NotFound />} />      
      </Routes>         
    </>
  );
}


