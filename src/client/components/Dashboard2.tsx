import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Header from './Header'

import { Box } from "@mui/material";


const Dashboard2: React.FC = () => {

	const { darkModeOn } = useContext(Context);

	return (
		<Box m="20px">
			<div className={darkModeOn ? 'dash-dark' : 'dash-light'}>

				<Header title="Dashboard 2" subtitle="Just one of the many ways to visualize your cluster" />

				<iframe
					src="http://localhost:3001/d/0dsovdF4z/zeus?orgId=1&refresh=5s&kiosk=&from=1669924943773&to=1669925243773"
					frameBorder="0"
					loading="eager"
					title="Grafana Chart"
					className={darkModeOn ? 'iframe-dark' : 'iframe-light'}
				></iframe>

			</div>
		</Box>
	);
};

export default Dashboard2;
