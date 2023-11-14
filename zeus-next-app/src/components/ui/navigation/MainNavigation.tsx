import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/system';
import DropdownFeature from '../DropdownFeature';
import Sidebar from './SidebarFeatures/Sidebar';

interface Session {
  user: {
    name: string;
  };
}
const MainNavigation = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  }

  const name = session?.user?.name|| "";
  return (
    <>  
    <header className="flex-inline items-center justify-between p-4 !bg-black">
      <NextUIProvider>
        <DropdownFeature name={name}/>
      </NextUIProvider>
      <button className="fixed top-5 right-10 flex flex-col !text-white text-2xl" onClick={handleToggle}>Menu

      {active && (
        <div className="flex flex-col !right-0">
          <Sidebar />
        </div>
      )}
      </button>
    </header>
    </>
  )
};
export default MainNavigation;