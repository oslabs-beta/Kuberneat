import * as React from 'react';
import { useState, useEffect } from 'react';
// import iframe from 'react-iframe';

export const Dashboard: React.FC = () => {
	// useEffect(() => {
	// 	fetch('http://localhost:3000/')
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log('this is fetching to backend', data)
	// 	})
	// 	.catch(err => console.log(err));
	// },[]);

	return (
		<div>
			<div>
				{/* <iframe
					src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&from=1669661032419&to=1669662832419&panelId=2"
					width="1000"
					height="500"
					frameBorder="0"
				></iframe> */}
				<iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2" width="1000" height="500" frameBorder="0"></iframe>
			</div>
		</div>
	);
};

///private/var/folders/_y/vn2b15j12t161bb71w16rgn00000gn/T
