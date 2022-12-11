import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header';

import { Box } from '@mui/material';

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';
import Visualizer from './Visualizer';

function VisD3(): ReactElement {
	const { darkModeOn } = useContext<AppProps>(Context);

	return (
		<Box m='20px'>
			{' '}
			{/* removed className chart from div, replaced it below, not sure what it was for? */}
			<div className={darkModeOn ? 'dash-dark' : 'dash-light'}>
				<Header 
					path='/visualizer'
					title='Kubernetes Cluster Visualizer' 
					subtitle='' 
				/>
				<Visualizer></Visualizer>
			</div>
		</Box>
	);
}

export default VisD3;
