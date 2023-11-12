import React from 'react';
import GoogleOAuth from './OAuth/googleOauth';

const MainNavigation = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Zeus Next App</h1>
      </div>
      <div className="flex gap-4 ml-auto">
        <GoogleOAuth />
      </div>
    </header>
  )
};
export default MainNavigation;