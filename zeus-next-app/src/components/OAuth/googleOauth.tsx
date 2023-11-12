"use client" //https://nextjs.org/docs/app/building-your-application/rendering/client-components
//authorize login -functional component
/**
 * Handles the event of user wanting to sign in with google. Head over to
 * app/layout.tsx and components/Providers.tsx files for more more details.
 * @param {GoogleProvider} provider
  @param {GoogleUser} googleOauth
 * 
 */
import React from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';
import googleIcon from '../ui/public/googleIcon.svg';

const GoogleOAuth = () => {
  // const { data: session } = useSession();
  return (
    <>
      <button className="mr-4 !mt-2" type="button" onClick={() => signIn('google')}>
    {/* Google */}
      <Image 
      src={googleIcon} 
      alt="Google icon" 
      width={50} 
      height={24} 
      />
      </button>
    </>
  )
}

export default GoogleOAuth; 
