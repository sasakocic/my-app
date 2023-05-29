import React, { useState } from "react";
import AWS from "aws-sdk";
import { Button, Form } from "react-bootstrap";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [refreshTimeout, setRefreshTimeout] = useState(0);
  
  const handleSignIn = () => {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const params = {
      AuthFlow: "ADMIN_NO_SRP_AUTH",
      ClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
      UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };
    cognito.adminInitiateAuth(params, (err, data) => {
      if (err) {
        console.error(err);
        // Handle the authentication error
      } else {
        console.log(data.AuthenticationResult);
        // Handle the authentication success
        localStorage.setItem('tokens', JSON.stringify(data.AuthenticationResult))
        // Schedule a token refresh when the access token is close to expiration
        const refreshTimeout = setTimeout(refreshAccessToken, data.AuthenticationResult.ExpiresIn * 1000 * 0.9); // Refresh at 90% of the expiration time

        // Store the refresh timeout ID in state for later cleanup
        setRefreshTimeout(refreshTimeout);        
        console.log(data.AuthenticationResult.AccessToken);
      }
    });
  };  

  const handleSignOut = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if (tokens.AccessToken) {
      const cognito = new AWS.CognitoIdentityServiceProvider();
      const params = {
        AccessToken: tokens.AccessToken,
      };

      cognito.globalSignOut(params, (err, data) => {
        if (err) {
          console.error(err);
          // Handle the sign-out error
        } else {
          alert('signout');
          // Clear the refresh timeout when signing out
          clearTimeout(refreshTimeout);
          localStorage.removeItem('tokens');
          // Handle the sign-out success          
        }
      });
    } else {
      // Access token is empty, ignoring already signed-off
    }
  };

  const refreshAccessToken = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const params = {
      AuthFlow: "REFRESH_TOKEN_AUTH",
      ClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
      UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
      AuthParameters: {
        REFRESH_TOKEN: tokens.RefreshToken,
      },
    };
    cognito.adminInitiateAuth(params, (err, data) => {
      if (err) {
        console.error(err);
        // Handle the error when refreshing access token fails
      } else {
        console.log('refreshAccessToken', data.AuthenticationResult);
        // Update the access token in state
        localStorage.setItem('tokens', JSON.stringify(data.AuthenticationResult))
      }
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Form>
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
        <Button variant="secondary" type="button" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Form>
    </div>
  );
};

export default Login;
