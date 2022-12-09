import React, { useState, useContext, useEffect  } from 'react';
import {Context} from './Context';
import { useFormik } from "formik"; // need formik to use yup for form validation
import { loginSchema } from "./schemas"; // import validation schema
import { valProps, InitVals, FormProps, LoginProps } from './interfaces';
import { AppProps } from './interfaces';
import { ReactElement, ReactNode } from 'react';

function Signup({ onClick }: { onClick: () => void }): any { // won't take type ReactElement ??

    const { darkModeOn } = useContext< AppProps >(Context);

    // onSubmit or Login handler function -> add Authentication logic here
    const onSubmit = async (values: any, actions: any): Promise<void> => {
        console.log('login submitted');
        // console.log(values);
        // console.log(actions);
        // below is just a mock API call for testing, add logic for AUTH here later...
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        actions.resetForm(); // resets form fields 
    };
    // console.log(errors)
    // console.log(loginSchema)
    /* console.log(formik) */

    const { // destructured props from the object returned from useFormik hook
        values, // value inside input fields
        errors, // object that holds all form validation logic
        touched, // allows for better dynamic form validation, only shows err after input has been touched
        isSubmitting, // boolean to allow button disabling when submitting
        handleBlur, // validates the form when clicking off the input
        handleChange, // sets formik state whenever state chnages
        handleSubmit // handles form submitting
     }: valProps = useFormik( // using the useFormik hook to return an object...
        { 
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: loginSchema, // setting the schema for form validation, imported from schemas dir
        onSubmit: onSubmit,
        });

    return (
            
            <>
                <div className={darkModeOn ? 'login-page-dark' : 'login-page-light'}>

                        <div className={darkModeOn ? "auth-1" : "auth-2"} >
                            <div id="signInDiv" ></div>
                        </div>

                        <form 
                            autoComplete='off' // turns off auto-complete of inputs
                            className={darkModeOn ? 'login1' : 'login2'} 
                            onSubmit={handleSubmit} // formik method to handle submits of login form
                            >

                            <label htmlFor="email">Email</label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                onBlur={handleBlur}
                                className={errors.email && touched.email ? "input-error" : ""}
                                // what actually shows the errors on form validation
                            />
                            {/* shows error message */}
                            {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                            <label htmlFor="password">Password</label>
                            <input
                                value={values.password}
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                onBlur={handleBlur}
                                className={errors.password && touched.password ? "input-error" : ""}
                                // what actually shows the errors on form validation
                            />
                            {/* shows error message */}
                            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                value={values.confirmPassword}
                                onChange={handleChange}
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                onBlur={handleBlur}
                                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                                // what actually shows the errors on form validation
                            />
                            {/* shows error message */}
                            {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

                            <div className="login-box">

                             {/* Signup button */}
                             <button 
                                id={darkModeOn ? "login-button1" : "login-button2"} 
                                type="submit"
                                disabled={isSubmitting} // signup button disabled when submitting
                               /* make sure to route back to login page in server router logic  */
                                >
                                Sign-up
                                </button>

                            </div>
                        </form>
                </div>
            </>

            )
};

export default Signup;