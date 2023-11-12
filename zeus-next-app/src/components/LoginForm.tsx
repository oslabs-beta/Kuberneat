"use client" //https://nextjs.org/docs/app/building-your-application/rendering/client-components
//authorize login -functional component
/**
 * Authenticates a user by making a POST request to the login endpoint.
 *
 * @param {User} input - The user object containing email and password.
 * @return {Promise<void>} - A promise that resolves to void.
*/
import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import GoogleOAuth from './OAuth/googleOauth';
import Image from 'next/image';
import googleIcon from './ui/public/googleIcon.svg';
import githubIcon from './ui/public/githubIcon.svg';
import { signIn } from 'next-auth/react';

interface User {
  email: string;
  password: string;
}

//custom hook for redirecting after successful login 
//good practice to impelment useEffect for redirect after component renders
function useRedirectAfterLogin(data: any, router: any) {
  useEffect(() => {
    if (data && data?.status === 200) {
      router
    }
  }, [data, router]);
};
function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<User | null>(null);

const Auth = async (input: User): Promise<void> => {
  try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: input.email, password: input.password}),
        mode: 'cors',
      });
      const data = await response.json();
      setData(data);
      useRedirectAfterLogin(data, router.push('/Home'));
    }
   catch (error: any) {
    console.error(error);
   }
   //clear form 
    setEmail('');
    setPassword('');
  };

  const memoLogin = useMemo(() => Auth, [email, password]);

  return (
    // Login form for the landing page
    <div id="landing-page-signIn" className="max-w-md w-full space-y-8">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ZEUS</h1>

      {/* Start of Login form */}
      <form className="mt-6"
        autoComplete="off"
        onSubmit={async(e) => {
          e.preventDefault();
          await memoLogin({ email, password });
        }}
      >
        <div className="mb-4">

          {/* email input */}
        <input 
          id="email"
          type="email" 
          placeholder="Email" 
          autoComplete="off"
          className="rounded-sm border-gray-300"
          onChange ={e => setEmail(e.target.value)}
          />


        {/* Password input */}
        <input 
          id="password"
          type="password" 
          placeholder="Password" 
          autoComplete="off"
          className="rounded-sm border-gray-300"
          onChange={e => setPassword(e.target.value)}
          />  
          
        {/* Buttons */}
       <div className="flex items-center justify-between">

        {/* signin button and // login button disabled when submitting */}
       <button 
        type="submit" 
        className="btn btn-primary rounded-sm border-blue-300"
        //route to main dashboard if user log in is successful
         >
        Sign in
        </button>


        {/* Remember me checkbox */} 
       <label 
       id="remember-me" 
       className="ml-2 block text-sm text-gray-900"> <input id="remember-me" type="checkbox" name="Remember-me" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" /> 
       Remember me
       </label>
       </div>

       {/* Forgot password */}
        <a href="#" className="text-blue-400 hover:text-blue-500">Forgot your password?</a>
        
            {/* Social media buttons */}
        <div className="flex flex-col items-center justify-center mb-4 p-400">
          <p className="mt-4 text-md text-cente sm:space-x-2">
              <span>or</span>
              <Link href="/Register">Register</Link>
            </p>
          <div>
            <div className="flex items-center">
              <GoogleOAuth />
              {/* GitHub */}
              <button className="!mt-2" type="button">
                  <Image 
                  src={githubIcon} 
                  alt="Github icon" 
                  width={50} 
                  height={24} 
                  />
              </button>
            </div>
          </div>
          </div>
       </div>
      </form>
      </div>
  )
};

export default LoginForm;

