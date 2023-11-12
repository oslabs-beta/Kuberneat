"use client"
/**
 * Need to wrap Oauths with Session providers 
 * @param {Login} login - The login component.
 * @return {ReactNode} - The children of the component.
 */
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';


//wrap session provider when user logs into their account
interface SessionProviderWrapperProps {
  children: React.ReactNode;

}

function Providers({ children }: SessionProviderWrapperProps) {
  return (
    <SessionProvider session={null}>
      {children}
    </SessionProvider>
  )
}


export default Providers;