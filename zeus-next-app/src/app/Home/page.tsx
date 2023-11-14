"use client";
/**
 * @type {string} User login page 
 * @param {Home} Home - The home component.
 * @param {useSession} useSession - The useSession hook -persist current user cession
 */
import React from 'react';
import MainNavigation from '@/components/ui/navigation/MainNavigation';

function Home(){
  return (
    <div>
      <header>
      <MainNavigation  />
      </header>
    </div>
  )
};

export default Home;