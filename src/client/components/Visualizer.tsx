import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Pod from './Pod';

import { Context } from '../Context';

import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


export const Visualizer: React.FC = () => {
	const [nodes, setNodes]: any = useState([]);

	const { darkModeOn } = useContext(Context);

	//fetching to the backend
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
	
	console.log('pod', podProps);

	return (	
	<div className={darkModeOn ? "vis-dark" : "vis-light"}>
		<div style={{fontSize: 50 , textAlign: 'center' }}>Visualizer</div>
		<div id='pods'>{podProps}</div>


	</div>)
};
