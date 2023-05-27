import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Button, Form } from 'react-bootstrap';

// Update the AWS SDK configuration with the desired region
AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const params = {
      AuthFlow: 'ADMIN_NO_SRP_AUTH',
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
        console.log(data);
        // Handle the authentication success
      }
    });
  };

  const handleSignOut = () => {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const params = {
      AccessToken: 'user-access-token',
    };

    cognito.globalSignOut(params, (err, data) => {
      if (err) {
        console.error(err);
        // Handle the sign-out error
      } else {
        console.log(data);
        // Handle the sign-out success
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

export default AuthForm;
