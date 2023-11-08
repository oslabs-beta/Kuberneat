import * as React from 'react';
import { useMemo } from 'react';
import LoginForm from '../LoginForm';

function Login(){
  const memoizeUser = useMemo(()  => <LoginForm />, []);
  return(
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {memoizeUser}
      </div>
  )
}

export default Login;
