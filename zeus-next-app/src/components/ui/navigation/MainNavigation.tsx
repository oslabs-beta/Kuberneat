"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/system';
import DropdownFeature from './DropdownFeature';
import Sidebar from './SidebarFeatures/Sidebar';
import Image from 'next/image';
import menuIcon from 'src/components/ui/public/menuIcon.svg';
import './MainNavigation.style.css';

const MainNavigation = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  }

  const name = session?.user?.name|| "";
  return (
    <>  
    <header className="flex justify-between p-4 !bg-black shadow-lg">
      {/* User Profile  */}
      <div id="user" className="flex start-1">
      <NextUIProvider>
        <DropdownFeature name={name}/>
      </NextUIProvider>
      </div>
      {/* Z E U S */}
      <div id="zeus" className="flex-grow">
        <h1 className="text-2xl font-bold">Zeus</h1>
      </div>

      {/* Menu */}
        <div id="menu-button">
        <button className="fixed top-5 right-10  flex flex-row-reverse items-center text-white text-xl" onClick={handleToggle}>
      {active && (
        <div className="flex flex-col !right-0">
          <Sidebar />
        </div>
      )}
      <Image src={menuIcon} alt="menu-icon"/>
      </button>
        </div>
    </header>
    </>
  )
};
export default MainNavigation;