"use client";
/**
 * @type {string} User login page 
 * @param {Home} Home - The home component.
 * @param {useSession} useSession - The useSession hook -persist current user cession
 */
import React, { useState, useEffect, useMemo } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


interface Session {
  user: {
    name?: string;
    email?: string;
  };
  expires: string;
}
function Home(){
  const { data: session } = useSession();
  const [name, setName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!(session as Session)) {
      router.push('/');
    } else {
      setName((session as Session).user?.name || null);
    }
  }, [session]);

  if (!name) return null;

  return (
    <header className="flex justify-between p-4 bg-gray-200">
      {name && <h1 className="relative flex justify-right text-bold">Welcome {name}!</h1>}
      <button
        className="relative flex justify-left text-bold"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </header>
  )
};


export default Home;