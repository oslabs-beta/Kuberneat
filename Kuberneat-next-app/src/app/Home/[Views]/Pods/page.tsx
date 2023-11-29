/**
 * Renders the Pods component.
 *
 * @return {JSX.Element} The rendered JSX element.
 */

import React from 'react';
import PodsView from '@/components/Pods/PodView';
import MainNavigation from '@/components/ui/navigation/MainNavigation';

function Pods (){

  return (
    <>
    <MainNavigation />
    <h1>Pods</h1>
    <PodsView />
    </>
  )

};

export default Pods;