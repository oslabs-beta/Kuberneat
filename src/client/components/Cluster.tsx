/**
 * The purpose of this component is to render out the Kluster page.
 */
import { Box } from '@mui/material'; //removed , Container
import Header from './Header';
import React, { useState, useEffect,useContext } from 'react';
import { Context } from '../Context';
import { AppProps } from '../interfaces';
import { ReactElement } from 'react'; //ReactNode,
import Pod2 from './Pod2';

function Cluster(): ReactElement {
	const [nodes, setNodes]: any[] | null = useState([]);

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

	//creating an array to store the props for the Pod2 component
	const podProps: any[] = [];

	//looping through the nodes and passing down props to the Pod2 component
	for (let i = 0; i < nodes.length; i++) {
		podProps.push(<Pod2 id={i} info={nodes[i]} key={i} nodeNum={i} />);
	}
	//use context for light and dark mode
	const { darkModeOn } = useContext<AppProps>(Context);

	return (
		<div className={darkModeOn ? 'faq-dark' : 'faq-light'}>
			<Box m='20px'>
				{/* Header passing down props for title and subtitle */}
				<Header 
					path='/cluster'
					title='Cluster Summary' 
					subtitle='Cluster Data' 
				/>

				{podProps}
			</Box>
		</div>
	);
}

export default Cluster;
