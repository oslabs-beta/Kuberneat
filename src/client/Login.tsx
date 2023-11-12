import React, { useContext, useEffect, useMemo } from 'react'; //useState,
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { useFormik } from 'formik'; // need formik to use yup for form validation
import { loginSchema } from './schemas'; // import validation schema
import { valProps, InitVals, FormProps, LoginProps } from './interfaces';
import { AppProps } from './interfaces';
import { ReactElement } from 'react';

import jwt_decode, { JwtPayload } from 'jwt-decode';
import Cookies from 'react-cookie';


function Login(): ReactElement {
	const { darkModeOn, user, setUser } = useContext<AppProps>(Context);

    const navigate = useNavigate();
    /* routes user to signup page */
    function goToSignup() {
        navigate('/signup')
      }

    // onSubmit or Login handler function -> add Authentication logic here
    const onSubmit = async (values: any, actions: any): Promise<void> => {
			try {
				const response = await fetch('/login', {
						method: 'POST',
						body: JSON.stringify({email: values.email, password: values.password}),
						credentials: 'include',
						// Authorization: `Bearer ${Cookies.get('token')}`,
						headers: {
							'Content-Type': 'application/json',
						}})
					
				const data = await response.json();
				if (data.status === 200) {
					//set cookkie and expire session after 2 hours
					const time = new Date();
					time.setHours(time.getHours() + 2);
					(Cookies as any).set('token', data.token, { expires: time });

					//set token 
					const userObject: any = jwt_decode<JwtPayload>(data.token);
					setUser(userObject);
					//redirect to home page
					navigate('/');

				}
				setTimeout(() => {
					actions.setSubmitting(false);
				}, 1000);
			}
			catch (err) {
				console.error(err);
			}
        actions.resetForm(); // resets form fields 
    };

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
			const userObject: any = jwt_decode<JwtPayload>(response.credential);
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
					<div className='login-box'>
						{/* Login button */}
						<button
							role='login-button'
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
