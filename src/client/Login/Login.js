import React, { useContext, useEffect } from 'react';
import {Context} from '../Context';

import { Box, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens, useMode, themeSettings } from '../theme' 

// import jwt_decode from 'jwt-decode';

// interface logProps {
//     user?: boolean;
//     setUser?: function;
// }

function Login() {

    const theme = useTheme(); // from MUI
    const colors = tokens(theme.palette.mode); // let's us switch back and forth between diff color palettes
    const colorMode = useContext(ColorModeContext) // use to allow us to toggle diff states for color mode

    // const [ userObject, setUserObject ] = useState({})
    const { user, handleCallbackResponse } = useContext(Context);

    // function handleCallbackResponse(response) {
    //     console.log("Encoded JWT ID token: " + response.credential);
    //     const userObject = jwt_decode(response.credential); // returns more readable version of google object
    //     // has user info we can get for profile pic, name, etc...
    //     console.log(userObject);
    //     setUser(userObject)// assign the user object to user, toggles landing page

    // initialize the google client with clinet id and also the button
/* global google object coming from html script*/
useEffect(() => {
  /* global google */    
  google.accounts.id.initialize({ // retrieves the google object 
       client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
       callback: handleCallbackResponse,
  });

  google.accounts.id.renderButton( // creates the OAuth button on login page
      document.getElementById("signInDiv"),
      { them: "outline", size: "large" }
  );

  google.accounts.id.prompt(); // sends prompt to login page

}, [user]); // <--- adding user to the dependancies array fixed the reload issue after login


  return (
    <Box 
        id="signInDiv"
        display='flex' 
        justifyContent='center'
        alignItems='center'
        bgcolor={colors.primary[400]}
        height="100%"
        width="100%"
        fontFamily="Source Sans Pro, sans-serif"
        position="relative"
    >
    </Box>
  )
}

export default Login;