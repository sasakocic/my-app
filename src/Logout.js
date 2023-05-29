import AWS from "aws-sdk";

const Logout = () => {
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
              // Clear the refresh timeout when signing out
            //   clearTimeout(refreshTimeout);
              localStorage.removeItem('tokens');
              // Handle the sign-out success          
            }
          });
        } else {
          // Access token is empty, ignoring already signed-off
        }
      };
     
    handleSignOut();  
    return (
        <p>You have been logged out</p>
    )
}

export default Logout;