import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Pod from './components/Pod';
import * as d3 from 'd3-force';

import {Context} from './Context';

export const Dashboard: React.FC = () => {

	const { darkModeOn } = useContext(Context);

	return (
	<div className={darkModeOn ? "dash-dark" : "dash-light"}>
		<div style={{fontSize: 50 , textAlign: 'center' }}>Dashboard</div>
		<iframe src='http://localhost:3001/d/v3fgrNKVz/osp-zeus?orgId=1&refresh=5s&kiosk=&from=1669854243495&to=1669875843495&viewPanel=2' 
		frameBorder="0"
		loading="eager"
		title="Grafana Chart"
		className={darkModeOn ? "iframe-dark" : "iframe-light"}
		></iframe>

		<iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&kiosk=tv&panelId=10" width="450" height="200" frameBorder="0"></iframe>

	</div>
	)

};

export default Dashboard;
