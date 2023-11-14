import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/system';
import DropdownFeature from '../DropdownFeature';
import Sidebar from './SidebarFeatures/Sidebar';
import Image from 'next/image';
import menuIcon from 'src/components/ui/public/menuIcon.svg';


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
    <header className="fixed flex items-center justify-between p-4 !bg-black shadow-lg">
      <NextUIProvider>
        <DropdownFeature name={name}/>
      </NextUIProvider>
      <button className="fixed top-5 right-10  flex flex-row-reverse items-center text-white text-xl" onClick={handleToggle}>
      {active && (
        <div className="flex flex-col !right-0">
          <Sidebar />
        </div>
      )}
      <Image src={menuIcon} alt="menu-icon"/>
      </button>
    </header>
    </>
  )
};
export default MainNavigation;