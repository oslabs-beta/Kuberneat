import * as React from 'react';
import {useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import googleIcon from './styles/assets/googleIcon.svg';
import githubIcon from './styles/assets/githubIcon.svg';


function LoginForm() {

  return (
    <>  
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-v-xl text-2xl">
        
        {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>

      {/* Begining of form */}
        <form className="mt-6">
          <div className="mb-4">
            <label className="md:p-3 block mb-2 text-lg font-medium text-gray-600">Email Address</label>
            <input type="text" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your email address" aria-label="Email address" />

            <label className="block mb-2 text-lg font-medium text-gray-600">Password</label>
            <input type="text" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none" placeholder="Enter your Password" aria-label="Password" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button className="btn btn-primary rounded-sm border-blue-300" type="submit">Login</button>
            <a className="text-sm text-gray-600 hover:underline" href="./forgot-password.html">Forgot your password?</a>
            </div>
          </form>

          {/* register section */}
            <div className="flex items-center justify-center mb-4 p-400">
            <p className="mt-4 text-md text-center">Don't have an account? <Link href="/register">Register</Link></p>
          </div>

          {/* 3rd party Oauth Login options */}
          <div className="flex items-center justify-center mb-4 p-4">
            <p className="mt-4 text-sm text-center text-gray-600">Or login with</p>
            <div className="flex items-center justify-center mb-4 space-x-4">

              {/* Google */}
              <button className="btn btn-primary" type="submit">
                  <Image src={googleIcon} alt="Google Icon" width={50} height={24} />
              </button>
              {/* GitHub */}
              <button className="btn btn-primary" type="submit">
                  <Image src={githubIcon} alt="Github Icon" width={50} height={24} />
              </button>
              
            </div>
          </div>
            
      </div>
    </div>
    </>
  )
};

export default LoginForm;
