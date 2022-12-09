import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { Box } from "@mui/material";

import { AppProps } from '../interfaces';
import { ReactNode, ReactElement } from 'react';
import Visualizer from './Visualizer';



function Dashboard2(): ReactElement {

	const { darkModeOn } = useContext <AppProps> (Context);

	return (
		<div>
			<Visualizer></Visualizer>
		</div>
	);
};

export default Dashboard2;
