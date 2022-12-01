import * as React from 'react';
import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Pod from './Pod';

const Visualizer: React.FC = () => {
	const [nodes, setNodes]: any = useState([]);

	//fetching to the backend
	useEffect(() => {
		console.log('use effect launched')
		fetch('/cluster', { headers: { 'Content-Type': 'application/json' } }) //{headers: { 'Content-Type': 'application/json' },}
			.then((data) => data.json())
			.then((data) => {
				console.log('this is fetching from the backend:', data)
				for (let i = 0; i < data.Name.length; i++) {
					//looping through the object of arrays
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
					])
				}
			})
			.catch((err) => console.log(err));
		///create variable to store the values from the
	}, []);

	//Rendering/passing props to Pod component
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
	// const barChart = ({ nodesArray }: any) => (
	// 	<ResponsiveBar
	// 		data={nodesArray}
	// 		keys={[
	// 			'Namespace',
	// 			'Name',
	// 			'CPU_Requests',
	// 			'CPU_Limits',
	// 			'Memory_Requests',
	// 			'Memory_Limits',
	// 			'Age',
	// 		]}
	// 		indexBy="Name"
	// 		margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
	// 		padding={0.3}
	// 		valueScale={{ type: 'linear' }}
	// 		indexScale={{ type: 'band', round: true }}
	// 		colors={{ scheme: 'nivo' }}
	// 		defs={[
	// 			{
	// 				id: 'dots',
	// 				type: 'patternDots',
	// 				background: 'inherit',
	// 				color: '#38bcb2',
	// 				size: 4,
	// 				padding: 1,
	// 				stagger: true,
	// 			},
	// 			{
	// 				id: 'lines',
	// 				type: 'patternLines',
	// 				background: 'inherit',
	// 				color: '#eed312',
	// 				rotation: -45,
	// 				lineWidth: 6,
	// 				spacing: 10,
	// 			},
	// 		]}
	// 		fill={[
	// 			{
	// 				match: {
	// 					id: 'Namespace',
	// 				},
	// 				id: 'dots',
	// 			},

	// 			{
	// 				match: {
	// 					id: 'Name',
	// 				},
	// 				id: 'dots',
	// 			},
	// 			{
	// 				match: {
	// 					id: 'CPU_Requests',
	// 				},
	// 				id: 'dots',
	// 			},
	// 			{
	// 				match: {
	// 					id: 'CPU_Limits',
	// 				},
	// 				id: 'dots',
	// 			},
	// 			{
	// 				match: {
	// 					id: 'Memory_Requests',
	// 				},
	// 				id: 'dots',
	// 			},
	// 			{
	// 				match: {
	// 					id: 'Memory_Limits',
	// 				},
	// 				id: 'dots',
	// 			},
	// 			{
	// 				match: {
	// 					id: 'Age',
	// 				},
	// 				id: 'dots',
	// 			},
	// 		]}
	// 		borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
	// 		axisTop={null}
	// 		axisRight={null}
	// 		axisBottom={{
	// 			tickSize: 5,
	// 			tickPadding: 5,
	// 			tickRotation: 0,
	// 			legend: 'Name',
	// 			legendPosition: 'middle',
	// 			legendOffset: 32,
	// 		}}
	// 		axisLeft={{
	// 			tickSize: 5,
	// 			tickPadding: 5,
	// 			tickRotation: 0,
	// 			legend: 'Resources',
	// 			legendPosition: 'middle',
	// 			legendOffset: -40,
	// 		}}
	// 		labelSkipWidth={12}
	// 		labelSkipHeight={12}
	// 		labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
	// 		legends={[
	// 			{
	// 				dataFrom: 'keys',
	// 				anchor: 'bottom-right',
	// 				direction: 'column',
	// 				justify: false,
	// 				translateX: 120,
	// 				translateY: 0,
	// 				itemsSpacing: 2,
	// 				itemWidth: 100,
	// 				itemHeight: 20,
	// 				itemDirection: 'left-to-right',
	// 				itemOpacity: 0.85,
	// 				symbolSize: 20,
	// 				effects: [
	// 					{
	// 						on: 'hover',
	// 						style: {
	// 							itemOpacity: 1,
	// 						},
	// 					},
	// 				],
	// 			},
	// 		]}
	// 		role="application"
	// 		ariaLabel="Kubernetes Nodes"
	// 		barAriaLabel={(e : any) => {
	// 			return `${e.data.Name} ${e.data.Namespace} ${e.data.CPU_Requests} ${e.data.CPU_Limits} ${e.data.Memory_Requests} ${e.data.Memory_Limits} ${e.data.Age}`;
	// 		}}
	// 	></ResponsiveBar>
	// );


	return (	
	<div>
	<div>test</div>
		{podProps}
	</div>)
};

export default Visualizer;

/*
	const visualization = () => {
		const chart = ForceGraph(nodes, {
			nodeName: (name: { Name: any }) => name.Name,
			nodeCPU_Request: (val: { CPU_Requests: any }) => val.CPU_Requests,
			nodeCPU_Limit: (val: { CPU_Limits: any }) => val.CPU_Limits,
			nodeMemory_Request: (val: { Memory_Requests: any }) =>
				val.Memory_Requests,
			nodeMemory_Limit: (val: { Memory_Limits: any }) => val.Memory_Limits,
			nodeAge: (val: { Age: any }) => val.Age,
		});
		console.log('this is ForceGraph object:', chart);
	};*/