"use client"
import React, { useMemo } from 'react';
import LoginForm from '@/components/LoginForm';
import Provider from '@/components/Providers';


function Login(){
  const memoLogin = useMemo(() => LoginForm, []);
  return(
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
     <Provider>
      { memoLogin()}
     </Provider>
      </div>
  )
}


export default Login;
