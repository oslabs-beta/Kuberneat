import React from 'react';
import { useSession } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/system';
import DropdownFeature from './ui/DropdownFeature';

interface Session {
  user: {
    name: string;
  };
}
const MainNavigation = () => {
  const { data: session } = useSession();
  const name = session?.user?.name|| "";
  return (
    <header className="flex items-center justify-between p-4 !bg-black">
          <NextUIProvider>
            <DropdownFeature name={name}/>
          </NextUIProvider>
    </header>
  )
};
export default MainNavigation;