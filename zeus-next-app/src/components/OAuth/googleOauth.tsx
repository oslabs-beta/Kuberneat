"use client" //https://nextjs.org/docs/app/building-your-application/rendering/client-components
//authorize login -functional component
/**
 * Handles the event of user wanting to sign in with google. Head over to
 * app/layout.tsx and components/Providers.tsx files for more more details.
 * @param {GoogleProvider} provider
  @param {GoogleUser} googleOauth
 * 
 */
import React, { useEffect, Suspense, useMemo } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../ui/public/googleIcon.svg';
import Home from '@/app/Home/page';
import Loading from '@/components/ui/Loading';

type Status = 'loading' | 'authenticated' | 'unauthenticated';
type Session = {
  user: {
    email: string | null;
    image: string | null;
    name: string | null | undefined;
  }
}
type UseGoogleLoginProps = {
  session: Session | null;
  status: Status;
}

type UseGoogleLoginResult = {
  handleGoogleLogin: ()=> Promise<void>;
  showGoogleLoginButton: boolean;
}

/**
 * Generates a custom hook for Google login functionality.
 *
 * @return {Object} An object containing the `handleGoogleLogin` function and `showGoogleLoginButton` flag.
 * Memoizes user login
 */

const UseGoogleLogin = (): UseGoogleLoginResult => {// props: UseGoogleLoginProps
  const {data: session, status } = useSession();
  const router = useRouter();

  useMemo(() => {
      if (session && status === 'authenticated') {
          router.push('/Home');
      }
  }, [session, status, router]);

  const showGoogleLoginButton = !session || !session.user;
  return {
    handleGoogleLogin: async () => {
      await signIn('google', {redirect: true, session})},
    showGoogleLoginButton
  }

};

/**
 * Renders the Google login button.
 * @return {null} The function does not return any value.
 */
const GoogleOAuth = () => {
  const { handleGoogleLogin, showGoogleLoginButton } = UseGoogleLogin();
  if (showGoogleLoginButton) {
    return (
      <button onClick={handleGoogleLogin} className="!mt-2 p-4">
        <Image src={googleIcon} alt="Google Icon" width={50} height={24} />
      </button>
    );
  }
  return null;
}

export default GoogleOAuth; 
