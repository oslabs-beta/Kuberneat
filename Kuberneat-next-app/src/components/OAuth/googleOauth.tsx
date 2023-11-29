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
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '../ui/public/googleIcon.svg';


/**
 * Renders the Google login button.
 * @return {null} The function does not return any value.
 */
const GoogleOAuth: React.FC = (): JSX.Element => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session){ //(session && session.user) && status === 'authenticated'
    router.push('/Home');
  }
  const handleButtonClick = (): void => {
    router.push('http://localhost:3000/api/auth/signin');
    signIn();
  };

  return (
    <>
      <button
      className="flex justify-start items-center p-2 rounded-sm border-gray-300"
      onClick={() => handleButtonClick()}
      >
      <Image src={googleIcon} alt="google icon" width={50} height={25} />
      </button>
    </>
  );
};
export default GoogleOAuth; 
