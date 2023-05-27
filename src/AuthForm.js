import React, { useState } from "react";
import AWS from "aws-sdk";
import { Button, Form } from "react-bootstrap";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState({ accessToken: "", refreshToken: "" });

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
        console.log(data);
        // Handle the authentication success
        const accessToken = data.AuthenticationResult.AccessToken;
        const refreshToken = data.AuthenticationResult.RefreshToken;
        // Store the access token and refresh token in state
        setTokens({ accessToken, refreshToken });
        console.log(data.AuthenticationResult.AccessToken);
      }
    });
  };  

  const handleSignOut = () => {
    if (tokens.accessToken) {
      const cognito = new AWS.CognitoIdentityServiceProvider();
      const params = {
        AccessToken: tokens.accessToken,
      };

      cognito.globalSignOut(params, (err, data) => {
        if (err) {
          console.error(err);
          // Handle the sign-out error
        } else {
          console.log(data);
          // Clear the access token from state
          setTokens((prevTokens) => ({
            ...prevTokens,
            accessToken: "",
          }));
          // Handle the sign-out success
        }
      });
    } else {
      // Access token is empty, handle the sign-out scenario accordingly
    }
  };

  const refreshAccessToken = () => {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const params = {
      AuthFlow: "REFRESH_TOKEN_AUTH",
      ClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
      UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
      AuthParameters: {
        REFRESH_TOKEN: tokens.refreshToken,
      },
    };
    cognito.adminInitiateAuth(params, (err, data) => {
      if (err) {
        console.error(err);
        // Handle the error when refreshing access token fails
      } else {
        console.log(data);
        const newAccessToken = data.AuthenticationResult.AccessToken;
        // Update the access token in state
        setTokens((prevTokens) => ({
          ...prevTokens,
          accessToken: newAccessToken,
        }));
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