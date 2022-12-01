import * as React from 'react';
import { useState, useEffect } from 'react';
import Pod from './components/Pod';
import * as d3 from 'd3-force';

export const Dashboard: React.FC = () => {

	return (
	<div>
		<div>Dashboard</div>
		<iframe src='http://localhost:3001/d/v3fgrNKVz/osp-zeus?orgId=1&refresh=5s&kiosk=&from=1669854243495&to=1669875843495&viewPanel=2' width="1000" height="500" frameBorder="0"></iframe>
	</div>
	)

};

export default Dashboard;
