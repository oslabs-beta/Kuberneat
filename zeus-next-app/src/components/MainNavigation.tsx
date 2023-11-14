import React, { useState, useEffect } from 'react';
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
  const [active, setActive] = useState(false);

  useEffect(()=>{
    setActive(!active);
  
  })

  const name = session?.user?.name|| "";
  return (
    <>  
    <header className="flex-inline items-center justify-between p-4 !bg-black">
      <NextUIProvider>
        <DropdownFeature name={name}/>
      </NextUIProvider>
      <h2 className="fixed top-5 right-10 flex flex-col">Menu</h2>
    </header>
    </>
  )
};
export default MainNavigation;