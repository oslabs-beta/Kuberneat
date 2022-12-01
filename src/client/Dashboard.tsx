import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Pod from './components/Pod';
import * as d3 from 'd3-force';

import {Context} from './Context';

export const Dashboard: React.FC = () => {

	const { darkModeOn } = useContext(Context);

	return (
	<div className={darkModeOn ? "dash-dark" : "dash-light"}>
		<div style={{fontSize: 35 , textAlign: 'center' }}>Dashboard</div>
		<iframe src="http://localhost:3001/d/0dsovdF4z/zeus?orgId=1&refresh=5s&kiosk=&from=1669924943773&to=1669925243773"
		frameBorder="0"
		loading="eager"
		title="Grafana Chart"
		className={darkModeOn ? "iframe-dark" : "iframe-light"}
		width="500" 
		height="500" 
		></iframe>
	</div>
	)

};

export default Dashboard;
