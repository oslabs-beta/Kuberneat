import { Google } from '@mui/icons-material';

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { useFormik } from 'formik'; // need formik to use yup for form validation
import { loginSchema } from './schemas'; // import validation schema
import { valProps, InitVals, FormProps, LoginProps } from './interfaces';

import jwt_decode, { JwtPayload } from 'jwt-decode';

import { AppProps } from './interfaces';
import { ReactElement, ReactNode } from 'react';

function Login(): ReactElement {
	// won't take type ReactElement ??

	const { darkModeOn, user, setUser } = useContext<AppProps>(Context);

    const navigate = useNavigate();
    /* routes user to signup page */
    function goToSignup() {
        navigate('/signup')
      }

    // onSubmit or Login handler function -> add Authentication logic here
    const onSubmit = async (values: any, actions: any): Promise<void> => {
        console.log('login submitted');
        
        //fetch request to backend to authorize 
        fetch('/login', {
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(
                {
                email: values.email,
                password: values.password,
                }
            ),
            })
            .then(res => res.json())
            .catch(error => console.log(error))
        
        // below is just a mock API call for testing, add logic for AUTH here later...
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        actions.resetForm(); // resets form fields 
    };
    // console.log(errors)
    // console.log(loginSchema)
    /* console.log(formik) */

	const {
		// destructured props from the object returned from useFormik hook
		values, // value inside input fields
		errors, // object that holds all form validation logic
		touched, // allows for better dynamic form validation, only shows err after input has been touched
		isSubmitting, // boolean to allow button disabling when submitting
		handleBlur, // validates the form when clicking off the input
		handleChange, // sets formik state whenever state chnages
		handleSubmit, // handles form submitting
	}: valProps = useFormik(
		// using the useFormik hook to return an object...
		{
			initialValues: {
				email: '',
				password: '',
				confirmPassword: '',
			},
			validationSchema: loginSchema, // setting the schema for form validation, imported from schemas dir
			onSubmit: onSubmit,
		}
	);

	/* global google object coming from html script*/
	useEffect(() => {
		function handleCallbackResponse(response: any) {
			console.log('Encoded JWT ID token: ' + response.credential);
			const userObject: any = jwt_decode<JwtPayload>(response.credential);
			console.log(userObject);
			setUser(userObject);
		}
		/* global google */
		/* can use ( window as any ) to access google object instead of using unofficial type libraries */
		(window as any).google.accounts.id.initialize({
			client_id: '833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});
		(window as any).google.accounts.id.renderButton(document.getElementById('signInDiv'), {
			them: 'outline',
			size: 'large',
		});
		(window as any).google.accounts.id.prompt();
	}, [user]);

	return (
		<>
			<div role='login' className={darkModeOn ? 'login-page-dark' : 'login-page-light'}>
				<div className={darkModeOn ? 'auth-1' : 'auth-2'}>
					<div id='signInDiv'></div>
				</div>

				<form
					autoComplete='off' // turns off auto-complete of inputs
					className={darkModeOn ? 'login1' : 'login2'}
					onSubmit={handleSubmit} // formik method to handle submits of login form
				>
					<label htmlFor='email'>Email</label>
					<input
						value={values.email}
						onChange={handleChange}
						id='email'
						type='email'
						placeholder='Enter your email'
						onBlur={handleBlur}
						className={errors.email && touched.email ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.email && touched.email && <p className='error'>{errors.email}</p>}

					<label htmlFor='password'>Password</label>
					<input
						value={values.password}
						onChange={handleChange}
						id='password'
						type='password'
						placeholder='Enter your password'
						onBlur={handleBlur}
						className={errors.password && touched.password ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.password && touched.password && <p className='error'>{errors.password}</p>}

					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						value={values.confirmPassword}
						onChange={handleChange}
						id='confirmPassword'
						type='password'
						placeholder='Confirm your password'
						onBlur={handleBlur}
						className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.confirmPassword && touched.confirmPassword && (
						<p className='error'>{errors.confirmPassword}</p>
					)}

					<div className='login-box'>
						{/* Login button */}
						<button
							id={darkModeOn ? 'login-button1' : 'login-button2'}
							// onClick={logout} // disabled for now, waiting to implement actual AUTH
							type='submit'
							disabled={isSubmitting} // login button disabled when submitting
						>
							Login
						</button>
						{/* Signup button */}
						<button
							onClick={goToSignup} /* routes to /signup */
							id={darkModeOn ? 'login-button1' : 'login-button2'}
						>
							Sign-up
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
