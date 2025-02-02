import React, { useState, useContext, useEffect } from 'react';
import { Context } from './Context';
import { useFormik } from 'formik'; // need formik to use yup for form validation
import { loginSchema } from './schemas'; // import validation schema
import { valProps, InitVals, FormProps, LoginProps } from './interfaces';
import { AppProps } from './interfaces';
import { ReactElement, ReactNode } from 'react';

function Signup(): any {

	const { darkModeOn, setUser, user } = useContext<AppProps>(Context);

	const onSubmit = async (values: any, actions: any): Promise<void> => {
	
		await new Promise((resolve) => {
				fetch('/register', {
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
					.then(res => {
						const { email } = res;
						if (email){
							const userObj = { name: email, email: email}
							alert('User Created')
							setUser(userObj)
							} else {
								alert('Username Unavailable')
								return;
							}
					})
					.catch(error => console.log(error))

			setTimeout(resolve, 1000);
		});
		actions.resetForm(); 
	};

	const {
		values, 
		errors,
		touched, 
		isSubmitting, 
		handleBlur, 
		handleChange, 
		handleSubmit, 
	}: valProps = useFormik(
		{
			initialValues: {
				email: '',
				password: '',
				confirmPassword: '',
			},
			validationSchema: loginSchema,
			onSubmit: onSubmit,
		}
	);

	return (
		<>
			<div role='signup' className={darkModeOn ? 'login-page-dark' : 'login-page-light'}>
				<div className={darkModeOn ? 'auth-1' : 'auth-2'}>
					<div id='signInDiv'></div>
				</div>

				<form
					role="form"
					autoComplete='off'
					className={darkModeOn ? 'login1' : 'login2'}
					onSubmit={handleSubmit} 
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
					/>
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
					/>
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
					/>
					{errors.confirmPassword && touched.confirmPassword && (
						<p className='error'>{errors.confirmPassword}</p>
					)}

					<div className='login-box'>
						<button
							role='signup-button'
							id={darkModeOn ? 'login-button1' : 'login-button2'}
							type='submit'
							disabled={isSubmitting}
						>
							Sign-up
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Signup;
