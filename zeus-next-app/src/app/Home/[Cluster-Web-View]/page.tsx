import React, { useMemo } from 'react';
import Visualizer from '@/components/D3/D3visualizer';
import MainNavigation from '@/components/ui/navigation/MainNavigation';
import '@/components/ui/pagesUI/ClusterWebUI.css';

function D3visualizer (){
  const memoWeb = useMemo(() => <Visualizer />, [Visualizer]);
  return (
    <div>
      <MainNavigation />
      <div className="cluster-web-container">
        {memoWeb}
    </div>
    </div>

  )
}
export default D3visualizer;