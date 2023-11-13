/**
 * @param {MainNavigation} MainNavigation - The main navigation component.
 * @param{user} user - The user object containing email and password.
 */
import React from 'react';

const MainNavigation = () => {

  return (
    <header className="w-full h-16 bg-gray-900">
      <button className="btn btn-primary rounded-sm border-blue-300">Sign in</button>
      <button className="btn btn-primary rounded-sm border-blue-300">Register</button>
    </header>
    
  )

}

export default MainNavigation;