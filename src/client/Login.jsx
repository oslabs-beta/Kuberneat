import React, { useState, useContext, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Context} from './Context';

// import { Google } from "@mui/icons-material"
// import jwt_decode from 'jwt_decode';
// import * as JWT from 'jwt-decode';

function Login(props) {

    const [ loginForm, setLoginForm ] = useState( { user: "", pass: "" } );

    const { darkModeOn, toggleDarkMode, user, handleCallbackResponse } = useContext(Context);

    function handleChange(e) {
        const { name, value } = e.target;

        console.log(loginForm);

        setLoginForm(oldData => {
            return (
                {
                    ...oldData,
                    [name]: value
                }
            )
        })
    }

    const navigate = useNavigate();

    function goToMain() {
        navigate('/dashboard')
      }
      /* global google object coming from html script*/
      useEffect(() => {

        // function handleCallbackResponse(response) {
        //     console.log('Encoded JWT ID token: ' + response.credential);
        //     const userObject = JWT(response.credential);
        //     console.log(userObject);
        //     setUser(userObject);
        // };

        /* global google */  
        google.accounts.id.initialize({ 
             client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
             callback: handleCallbackResponse,
        });
      
        google.accounts.id.renderButton( 
            document.getElementById("signInDiv"),
            { them: "outline", size: "large" }
        );

        // { darkModeOn ? }
      
        google.accounts.id.prompt(); 
      
      }, [user]); 


    return (

        <>
                <div className={darkModeOn ? "auth-1" : "auth-2"} >
                    <div id="signInDiv" ></div>
                </div>
                {/* <div id="signInDiv" ></div> */}
                <div id={darkModeOn ? "log-dark" : "log-light"}>

                    <div className={darkModeOn ? 'login1' : 'login2'}>
                    <label htmlFor="user">Username: </label>
                    <input
                        id="user"
                        type="text"
                        placeholder="username"
                        onChange={handleChange}
                        name="user"
                        value={loginForm.user} 
                    />
                    <label htmlFor="pass">Password: </label>
                    <input
                        id="pass"
                        type="text"
                        placeholder="password"
                        onChange={handleChange}
                        name="pass"
                        value={loginForm.pass} 
                    />
                    <div className="login-box">
                        <div id={darkModeOn ? "login-button1" : "login-button2"} onClick={goToMain}>Login</div>
                        <div id={darkModeOn ? "login-button1" : "login-button2"} >Sign-up</div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Login;