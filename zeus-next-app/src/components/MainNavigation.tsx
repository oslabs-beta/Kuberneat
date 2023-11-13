import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const MainNavigation = () => {
  const { data: session } = useSession();
  const name = session?.user?.name;
  return (
    <header className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Welcome {name}</h1>  
          <button className="flex justify-start items-center p-2 rounded-sm border-gray-300" onClick={()=>signOut()}>
          </button>
    </header>
  )
};
export default MainNavigation;