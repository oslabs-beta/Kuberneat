"use client" //https://nextjs.org/docs/app/building-your-application/rendering/client-components
//authorize login -functional component
/**
 * Handles the event of user wanting to sign in with google. Head over to
 * app/layout.tsx and components/Providers.tsx files for more more details.
 * @param {GoogleProvider} provider
  @param {GoogleUser} googleOauth
 * 
 */
import React, { useEffect } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../ui/public/googleIcon.svg';
import Home from '@/app/Home/page';

type Status = 'loading' | 'authenticated' | 'unauthenticated';


const useGoogleLogin = () => {
  const {data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && status === 'authenticated') {
      router.push('/Home');
    }
  }, [session, status, router]);

  const showGoogleLoginButton = !session || !session.user;
  return {
    handleGoogleLogin: async () => {await signIn('google', {redirect:false})},
    showGoogleLoginButton
  }

};

const GoogleOAuth = () => {
  const {handleGoogleLogin, showGoogleLoginButton} = useGoogleLogin();

  if (showGoogleLoginButton) {
    return (
      <button onClick={handleGoogleLogin}
      >
        <Image src={googleIcon} alt="Google Icon" width={50} height={24} />
      </button>
    );
  }
  return null;
}

export default GoogleOAuth; 
