import React, { useState, useContext, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Context} from './Context';

// import { Google } from "@mui/icons-material"
// import jwt_decode from 'jwt_decode';


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
        navigate('./main')
      }
      /* global google object coming from html script*/
      useEffect(() => {
        /* global google */  
        google.accounts.id.initialize({ 
             client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
             callback: handleCallbackResponse,
        });
      
        google.accounts.id.renderButton( 
            document.getElementById("signInDiv"),
            { them: "outline", size: "large" }
        );
      
        google.accounts.id.prompt(); 
      
      }, [user]); 


    return (

        <>
                <div className={darkModeOn ? "log-all1" : "log-all2"} >
                    <div id="signInDiv" ></div>
                </div>

                <div id={darkModeOn ? "body-dark" : "body-light"}>

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