import React from 'react';
import '@/components/ui/pagesUI/HealthUI.css';
import HealthVisual from '@/components/HealthPods/HeathVisual';

function Health () {
  return (
    <div>
      <h1>Health</h1>
      <div>
     { <HealthVisual />}
      </div>
    </div>
  )
}
export default Health;