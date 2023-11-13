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
    image?: string;
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
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1 className="relative flex justify-center text-bold">Dashboard</h1>
      {name && <h1 className="relative flex justify-center text-bold">Welcome {name}!</h1>}
    </div>
  );
};


export default Home;