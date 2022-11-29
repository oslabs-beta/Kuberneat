import { Google } from "@mui/icons-material";

import React from "react";
import {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';

const Context = React.createContext();

function ContextProvider({children}) { /* just (props) -> ({children}) destructured*/

const [ user, setUser ] = useState(null);

function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential); // returns more readable version of google object
    // has user info we can get for profile pic, name, etc...
    console.log(userObject);
    setUser(userObject)// assign the user object to user, toggles landing page

}
// initialize the google client with clinet id and also the button
/* global google object coming from html script*/
useEffect(() => {
    /* global google */    
    google.accounts.id.initialize({ // retrieves the google object 
        client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
        callback: handleCallbackResponse,
    });

    // google.accounts.id.renderButton( // creates the OAuth button on login page
    //     document.getElementById("signInDiv"),
    //     { them: "outline", size: "large" }
    // );

    // google.accounts.id.prompt(); // sends prompt to login page

}, [user]); // <--- adding user to the dependancies array fixed the reload issue after login

/* value prop is important -> value={{allPhotos}} can pass anything thru provider even functions*/
return (
    <Context.Provider value={{ user, setUser, handleCallbackResponse }}>
        {children} {/* {props.children} */}
    </Context.Provider>
    )
};

export {ContextProvider, Context}; /* want to export both the Context onject and the Provider */
/* want both from this file so have it as a named export */