import React from 'react';
import '@/components/ui/pagesUI/HealthUI.css';
import HealthVisual from '@/components/HealthPods/HeathVisual';
import MainNavigation from '@/components/ui/navigation/MainNavigation';

function Health () {
  return (
    <>
    <MainNavigation />
    <div>
      <h1>Health</h1>
      <div>
     { <HealthVisual />}
      </div>
    </div>
    </>
  )
}
export default Health;