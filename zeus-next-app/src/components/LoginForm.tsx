'use client'; //https://react.dev/reference/react/use-client#use-client

import * as React from 'react';
import {useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import router from 'next/router';

import Image from 'next/image';
import googleIcon from './ui/public/googleIcon.svg';
import githubIcon from './ui/public/githubIcon.svg';

import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useCookies, Cookies } from 'react-cookie';
import { useFormik } from 'formik'; // need formik to use yup for form validation
import {loginSchema } from '../schemas/index'; // import validation schema
import { valProps, InitVals, FormProps, LoginProps } from '../interfaces';

interface FormikActions {
  resetForm: () => void;
  setSubmitting: (isSubmitting: boolean) => void;
}

function LoginForm() {
  const [user, setUser] = useState({email: '', password: ''});
  const [cookies, setCookies] = useCookies(['token']);
  let memozieLogin;

  const fetchUserCredentials = async ( values:any, actions: FormikActions): Promise<void> => {

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${(Cookies as any).get('token')}`,
        },
        credentials: 'include',
        body: JSON.stringify({email: values.email, password: values.password}),
      })
      const data = await response.json();

      if (data.status === 200) {
        //set cookies 
        const time = new Date();
        time.setHours(time.getHours() + 2);
        (Cookies as any).set('token', data.token, {expires: time});

        //set token
        const userObject: any = jwt_decode<JwtPayload>(data.token);
        setUser(userObject);

        console.log(user);
   

        //redirect to dashboard
        router.push('/', undefined, { shallow: true });
      }
      memozieLogin = useMemo(() => fetchUserCredentials(user, actions),[user]);
      
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    }
    catch(error) {
      console.error(error);
    }
    actions.resetForm();
  }

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
			onSubmit: fetchUserCredentials,
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
      // <div className="min-h-full flex item-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      // Login form for the landing page
      <div className="max-w-md w-full space-y-8">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ZEUS</h1>

      {/* Start of Login form */}
      <form className="mt-6"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">

          {/* email input */}
        <input 
          id="email"
          type="email" 
          placeholder="Email" 
          value={values.email}
          onChange={handleChange}
          className={errors.email && touched.email ? 'input-error' : ''}
          />
          {/* shows error message */}
					{errors.email && touched.email && <p className='error'>{errors.email}</p>}

        {/* Password input */}
        <input 
          id="password"
          type="password" 
          placeholder="Password" 
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? 'input-error' : ''}
          />  
          {/* shows error message */}
					{errors.password && touched.password && <p className='error'>{errors.password}</p>}
          
        {/* Buttons */}
       <div className="flex items-center justify-between">
        {/* signin button and // login button disabled when submitting */}
       <button type="submit" className="btn btn-primary rounded-sm border-blue-300" disabled={isSubmitting}>Sign in</button> 

       <label id="remember-me" className="ml-2 block text-sm text-gray-900"> <input id="remember-me" type="checkbox" name="Remember-me" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" /> Remember me</label>
       </div>
        <a href="#" className="text-blue-400 hover:text-blue-500">Forgot your password?</a>
        
            {/* Social media buttons */}
        <div className="flex flex-col items-center justify-center mb-4 p-400">
          <p className="mt-4 text-md text-cente sm:space-x-2">
              <span>or</span>
              <Link href="/register">Register</Link>
            </p>
          <div>
            <div className="flex items-center">
              <button className="mr-4 !mt-2" type="button">
                {/* Google */}
                  <Image src={googleIcon} alt="Google icon" width={50} height={24} />
              </button>
              {/* GitHub */}
              <button className="!mt-2" type="button">
                  <Image src={githubIcon} alt="Github icon" width={50} height={24} />
              </button>
            </div>
          </div>
          </div>
       </div>
      </form>
      </div>
    // </div>
  )
};

export default LoginForm;
