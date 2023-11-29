import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Visualizer from '@/components/D3/D3visualizer';
import MainNavigation from '@/components/ui/navigation/MainNavigation';
import '@/components/ui/pagesUI/ClusterWebUI.css';

function D3visualizer (){
  const memoWeb = useMemo(() => <Visualizer />, [Visualizer]);
  const LazyComponent = dynamic(() => import('@/components/D3/D3visualizer'));
  return (
    <div>
      <MainNavigation />
      {/* {memoWeb} */}
      <LazyComponent />
    </div>

  )
}

export default D3visualizer;