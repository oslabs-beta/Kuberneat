//@ts-nocheck
import React from 'react';
import MainNavigation from '@/components/ui/navigation/MainNavigation';
import AllPods from '@/components/Pods/AllPods';
function Pods (){

  return (
    <>
    <MainNavigation />

    <div>
      <AllPods />
    </div>
  
    </>
  )

};

export default Pods;