"use client"
/**
 * Need to wrap Oauths with Session providers 
 * @param {ReactNode} children - The children of the component.
 * @return {ReactNode} - The children of the component.
 */
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <SessionProvider>{props.children}</SessionProvider>
  )
}

export default Providers;