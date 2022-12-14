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
		setNodes([
			{
				Namespace: 'default',
				Name: 'alertmanager-prometheus-kube-prometheus-alertmanager-0',
				CPU_Requests: '200m(5%)',
				CPU_Limits: '200m(5%)',
				Memory_Requests: '250Mi(6%)',
			},
			{
				Namespace: 'default',
				Name: 'prometheus-grafana-6fdd6868b4-bc5s6',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'default',
				Name: 'prometheus-kube-prometheus-operator-6ffc69cf67-lrvng',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'default',
				Name: 'prometheus-kube-state-metrics-6cfd96f4c8-lfgr6',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'default',
				Name: 'prometheus-prometheus-kube-prometheus-prometheus-0',
				CPU_Requests: '200m(5%)',
				CPU_Limits: '200m(5%)',
				Memory_Requests: '50Mi(1%)',
			},
			{
				Namespace: 'default',
				Name: 'prometheus-prometheus-node-exporter-94nxk',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'coredns-565d847f94-l5z28',
				CPU_Requests: '100m(2%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '70Mi(1%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'etcd-zeus-monitoring',
				CPU_Requests: '100m(2%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '100Mi(2%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'kube-apiserver-zeus-monitoring',
				CPU_Requests: '250m(6%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'kube-controller-manager-zeus-monitoring',
				CPU_Requests: '200m(5%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'kube-proxy-dkkwq',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'kube-scheduler-zeus-monitoring',
				CPU_Requests: '100m(2%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
			{
				Namespace: 'kube-system',
				Name: 'storage-provisioner',
				CPU_Requests: '0(0%)',
				CPU_Limits: '0(0%)',
				Memory_Requests: '0(0%)',
			},
		]);
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
