import * as React from 'react';
import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Pod from './Pod';

// const Visualizer: React.FC = () => {
// 	const [nodes, setNodes]: any = useState([]);

// 	//fetching to the backend
// 	useEffect(() => {
// 		console.log('use effect launched')
// 		//{headers: { 'Content-Type': 'application/json' },}
// 		// fetch('/cluster', { headers: { 'Content-Type': 'application/json' } })
// 		// 	.then((data) => data.json())
// 		// 	.then((data) => {
// 		// 		console.log('this is fetching from the backend:', data)
// 		// 		for (let i = 0; i < data.Name.length; i++) {
// 		// 			//looping through the object of arrays
// 		// 			setNodes((oldArray: any) => [
// 		// 				...oldArray,
// 		// 				{
// 		// 					Namespace: data.Namespace[i],
// 		// 					Name: data.Name[i],
// 		// 					CPU_Requests: data.CPU_Requests[i],
// 		// 					CPU_Limits: data.CPU_Limits[i],
// 		// 					Memory_Requests: data.Memory_Requests[i],
// 		// 					Memory_Limits: data.Memory_Limits[i],
// 		// 					Age: data.Age[i],
// 		// 				},
// 		// 			])
// 		// 		}
// 		// 	})
// 		// 	.catch((err) => console.log('Error in Fetch request: ', err));

// 			const getNodes = 	async () => {
// 				try { 
// 					const response = await fetch('/cluster',{ headers: { 'Content-Type': 'application/json' } })
// 				const data = await response.json();
// 				for (let i = 0; i < data.Name.length; i++) {
// 					//looping through the object of arrays
// 					setNodes((oldArray: any) => [
// 						...oldArray,
// 						{
// 							Namespace: data.Namespace[i],
// 							Name: data.Name[i],
// 							CPU_Requests: data.CPU_Requests[i],
// 							CPU_Limits: data.CPU_Limits[i],
// 							Memory_Requests: data.Memory_Requests[i],
// 							Memory_Limits: data.Memory_Limits[i],
// 							Age: data.Age[i],
// 						},
// 					])
// 				}
// 			}
// 			catch (err) {
// 				console.log('Fetch error :', err);
// 			}
// 				}
// 			getNodes();
// 		// create variable to store the values from the
// 	}, []);
// 	console.log('nodes: ', nodes)
// 	//Rendering/passing props to Pod component
// 	const podProps: any[] = [];
// 	nodes.forEach((info: Object = {}, i: number) => {
// 		podProps.push(
// 			<Pod
// 				info={info}
// 				key={i}
// 			></Pod>
// 		);
// 	});

// 	console.log('pod', podProps);

// 	// const nodesArray: any[] = [];
// 	// podProps.forEach((p) => {
// 	// 	// node resources
// 	// 	nodesArray.push(p.props.info);
// 	// });
	
// 	return (	
// 		<div>
// 	<div>test</div>
// 	{/* <ResponsiveBar data={nodesArray}></ResponsiveBar> */}
// 		{podProps}
// 	</div>)
// };

export const Visualizer: React.FC = () => {
	// useEffect(() => {
	// 	fetch('http://localhost:3000/')
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log('this is fetching to backend', data)
	// 	})
	// 	.catch(err => console.log(err));
	// },[]);
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
	console.log('visualizer 12/1 nodes', nodes);

	const podProps: any[] = [];
	nodes.forEach((info: Object = {}, i: number) => {
		podProps.push(
			<Pod
				info={info}
				key={i}
			></Pod>
		);
	});
	console.log('podprops: ', podProps);
	return (
		<div>
			<div>

				{/* <iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2" width="1000" height="500" frameBorder="0"></iframe> */}
				{/* <iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2" width="1000" height="500" frameBorder="0"></iframe> */}

				{podProps}
			</div>
		</div>
	);
}

// export default Visualizer;