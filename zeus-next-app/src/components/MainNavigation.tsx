import React from 'react';
import { useSession } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/system';
import DropdownFeature from './ui/DropdownFeature';
import SidebarToggle from './ui/Sidebar-toggle';

interface Session {
  user: {
    name: string;
  };
}
const MainNavigation = () => {
  const { data: session } = useSession();
  const name = session?.user?.name|| "";
  return (
    <div>

    <header className="flex items-center justify-between p-4 !bg-black">
          <NextUIProvider>
            <DropdownFeature name={name}/>
          </NextUIProvider>
    </header>
    <div className="absolute-center p-4">
    <SidebarToggle />
    </div>
    </div>
  )
};
export default MainNavigation;