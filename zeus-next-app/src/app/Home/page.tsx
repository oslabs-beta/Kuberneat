"use client";
/**
 * @type {string} User login page 
 * @param {Home} Home - The home component.
 * @param {useSession} useSession - The useSession hook -persist current user cession
 */
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import Sidebar from '@/components/ui/Sidebar';

function Home(){
  return (
    <div>
      <header>
      <MainNavigation  />
      </header>
      <div >
        <Sidebar />
      </div>
    </div>
  )
};

export default Home;