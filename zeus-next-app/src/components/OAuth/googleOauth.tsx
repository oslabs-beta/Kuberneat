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
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../ui/public/googleIcon.svg';
import Home from '@/app/Home/page';

/**
 * Renders the Google login button.
 * @return {null} The function does not return any value.
 */
const GoogleOAuth = () => {
    return (
      <button onClick={()=> signIn('google')} className="!mt-2 p-4">
        <Image src={googleIcon} alt="Google Icon" width={50} height={24} />
      </button>
    )
};

export default GoogleOAuth; 
