/*
The purpose of this component is to render the visualizer for the current cluster.
 */
import * as React from 'react';
import { useContext, useMemo } from 'react'; //removed useState, useEffect, 
import { Context } from '../Context';
import { AppProps } from '../interfaces';
import {  ReactElement } from 'react'; //removed ReactNode

import Visualizer from './Visualizer';
import Header from './Header';
import { Box } from '@mui/material';


function VisD3(): ReactElement {
	const { darkModeOn } = useContext<AppProps>(Context);
	//use memo to prevent rerendering of component
	const memoizedPods = useMemo(() => <Visualizer />, []);

	//fix bleeding frame
	return (
			<>
			<Header title='Kubernetes Cluster Chart' />
				<Box
					sx={{
						backgroundColor: darkModeOn ? '#121212' : '#ffffff',
						height: '100vh',
						width: '70vw',
						overflow: 'hidden',
						boxBorder: '100px solid #000000',
					}}
				>
			{memoizedPods}
		</Box>
		</>
	);
}

export default VisD3;
