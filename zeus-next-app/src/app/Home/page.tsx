"use client";
/**
 * @type {string} User login page 
 * @param {Home} Home - The home component.
 * @param {useSession} useSession - The useSession hook -persist current user cession
 */
import React from 'react';
import MainNavigation from '@/components/ui/navigation/MainNavigation';
import '@/components/ui/pagesUI/HomeUI.css';
import '@/components/ui/navigation/SidebarFeatures/Sidebar.style.css';


function Home(){
  return (
    <div id='home-dash' className="flex flex-col h-screen">
    <header>
      <MainNavigation  />
    </header>
    <div className="flex items-center justify-center h-full">
				<iframe
        id="grafana-dash"
					src="http://localhost:3001/d/I1MUxS54k/final-dashboard?orgId=1&from=1670948876446&to=1670949776446"
					loading="eager"
					title="Grafana Chart"
				></iframe>
    </div>
    </div>
  )
};

export default Home;