"use client" //https://nextjs.org/docs/app/building-your-application/rendering/client-components
/**
 * Need to wrap Oauths with Session NextAuthProviders 
 * @param {Login} login - The login component.
 * @return {ReactNode} - The children of the component.
 */
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface NextAuthProvidersProps {
  children: ReactNode;
}

function NextAuthProviders({ children }: NextAuthProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}


export default NextAuthProviders;