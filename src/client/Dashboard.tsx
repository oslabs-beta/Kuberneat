import * as React from 'react';
import { useState, useEffect } from 'react';
import Pod from './Pod';

import { ReactDOM } from 'react';
// import Graph from 'react-graph-vis';

export const Dashboard: React.FC = () => {
	const [nodes, setNodes]: any = useState([]);

	useEffect(() => {
		fetch('/cluster', { headers: { 'Content-Type': 'application/json' } }) //{headers: { 'Content-Type': 'application/json' },}
			.then((data) => data.json())
			.then((data) => {
				console.log('this is fetching from the  backend:', data);
				for (let i = 0; i < data.Name.length; i++) {
					setNodes((oldArray: any) => [
						...oldArray,
						{
							Namespace: data.Namespace[i],
							Name: data.Name[i],
							CPU_Requests: data.CPU_Requests[i],
							CPU_Limits: data.CPU_Limits[i],
							Memory_Requests: data.Memory_Requests[i],
							Memory_Limits: data.Memory_Limits[i],
							Age: data.Age[i],
						},
					]);
				}
			})
			.catch((err) => console.log(err));
		///create variable to store the values from the
	}, []);
	console.log('nodes', nodes);

	const podProps: any[] = [];
	nodes.forEach((info: Object = {}, i: number) => {
		podProps.push(
			<Pod
				info={info}
				key={i}
			></Pod>
		);

		const webNode = {
			// nodes: [{ id: i, label: podProps[info] }],
		};
	});
	console.log('podprops: ', podProps);
	return (
		<div>
			<div>
				{/* <iframe
					src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&from=1669661032419&to=1669662832419&panelId=2"
					width="1000"
					height="500"
					frameBorder="0"
				></iframe> */}
				{/* <iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2" width="1000" height="500" frameBorder="0"></iframe> */}

				{podProps}
			</div>
		</div>
	);
};

///private/var/folders/_y/vn2b15j12t161bb71w16rgn00000gn/T
