"use client"
import React, { useState, useEffect } from 'react';
import AllPods from './AllPods';

const PodsView = () => {
  const [nodes, setNodes]: any[] = useState([]);

	//fetching to the backend
	useEffect(() => {
		//Hard coded data of the nodes from K8s -Need to dynamically render this out 
		fetch('/cluster', { headers: { 'Content-Type': 'application/json' } })
		.then((data) => data.json())
		.then((data) => {
			// iterate through our array response from the server
			for (let i = 0; i < data.Name.length; i++) {
				// setting state containing our array of objects containing our cluster info
				setNodes((oldArray : {}[]) => [
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
		.catch((err) => console.log('Fetch Error: ', err));
		///create variable to store the values from the
	}, []);

	//creating an array to store the props for the AllPods component
	const podProps: any[] = [];

	//looping through the nodes and passing down props to the AllPods component
	for (let i = 0; i < nodes.length; i++) {
		podProps.push(<AllPods id={i} info={nodes[i]} key={i}/>);
	}
	//use context for light and dark mode


	return (
		<div>
				{podProps}
		</div>
	);

};

export default PodsView;