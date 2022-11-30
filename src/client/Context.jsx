
//control dark mde and light mode state and incorporate into components that need it

import { Google } from "@mui/icons-material"

import React from "react";
import {useState, useEffect} from 'react';
// import jwt_decode from 'jwt_decode';
// import * as JWT from 'jwt-decode';

const Context = React.createContext();

function ContextProvider({children}) {

    const [ user, setUser ] = useState(null);

    const [ darkModeOn, setDarkModeOn ] = useState(false);

    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject)
    }

    function toggleDarkMode () {
        setDarkModeOn(old => !old);
        console.log('dark mode toggled')
    }



 useEffect(() => {

        google.accounts.id.initialize({
            client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

    }, [user]);


    return (
        <Context.Provider value={{ user, setUser, darkModeOn, setDarkModeOn, toggleDarkMode , handleCallbackResponse }}>
        {children} {/* {props.children} */}
        </Context.Provider>
    )

}

export {ContextProvider, Context};