import router from 'next/navigation';
import React, { useEffect, useState } from 'react';


const ErrorRoutes = () => {
  const handleResponses = async (): Promise<any> => {
    const response = await(await fetch('/api/auth/[...nextauth]'));
    if (response.status === 404) {
      return (<div> 
        <h1>404</h1>
        <p>Page not found</p>
      </div>)
    
    }
    if (response.status === 500) {
      return (<div> 
        <h1>500</h1>
        <p>Internal server error</p>
      </div>)
    }
  }
  
  return (
    {handleResponses}
  );
};
export default ErrorRoutes;