'use client'; //https://react.dev/reference/react/use-client#use-client

import * as React from 'react';
import {useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import googleIcon from './components/ui/public/googleIcon.svg';
import githubIcon from './components/ui/public/githubIcon.svg';

import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useCookies, Cookies } from 'react-cookie';
import { useFormik } from 'formik'; // need formik to use yup for form validation

interface FormikActions {
  resetForm: () => void;
  setSubmitting: (isSubmitting: boolean) => void;
}

function LoginForm() {
  const [user, setUser] = useState({});
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


  return (
      // <div className="min-h-full flex item-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      // Login form for the landing page
      <div className="max-w-md w-full space-y-8">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ZEUS</h1>

      {/* Start of Login form */}
      <form className="mt-6">
        <div className="mb-4">

          {/* email input */}
        <input type="email" placeholder="Email" />

        {/* Password input */}
        <input type="password" placeholder="Password" />

        {/* Buttons */}
       <div className="flex items-center justify-between">
       <button type="submit" className="btn btn-primary rounded-sm border-blue-300">Sign in</button>
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
