"use client"
/**
 * Renders the login component.
 *
 * @return {JSX.Element} The login component.
 */

import React, { useMemo } from 'react';
import LoginForm from '@/components/LoginForm';

function Login(){
  const memoLogin = useMemo(() => LoginForm, []);
  return(
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      { memoLogin()}
      </div>
  )
}


export default Login;
