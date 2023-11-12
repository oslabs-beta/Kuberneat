"use client"
import * as React from 'react';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';


function Login(){
  return(
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <LoginForm />
      </div>
  )
}

export default Login;
