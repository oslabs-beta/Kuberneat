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
		/*
		// actual data
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
		*/
		// create variable to store the values from the
		// dummy data:
		setNodes([
			{Namespace: 'default', Name: 'alertmanager-prometheus-kube-prometheus-alertmanager-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '250Mi(6%)'},
			{Namespace: 'default', Name: 'prometheus-grafana-6fdd6868b4-bc5s6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'default', Name: 'prometheus-kube-prometheus-operator-6ffc69cf67-lrvng', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'default', Name: 'prometheus-kube-state-metrics-6cfd96f4c8-lfgr6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'default', Name: 'prometheus-prometheus-kube-prometheus-prometheus-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '50Mi(1%)'},
			{Namespace: 'default', Name: 'prometheus-prometheus-node-exporter-94nxk', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'kube-system', Name: 'coredns-565d847f94-l5z28', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '70Mi(1%)'},
			{Namespace: 'kube-system', Name: 'etcd-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '100Mi(2%)'},
			{Namespace: 'kube-system', Name: 'kube-apiserver-zeus-monitoring', CPU_Requests: '250m(6%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'kube-system', Name: 'kube-controller-manager-zeus-monitoring', CPU_Requests: '200m(5%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'kube-system', Name: 'kube-proxy-dkkwq', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'kube-system', Name: 'kube-scheduler-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
			{Namespace: 'kube-system', Name: 'storage-provisioner', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'}
			])
	}, []);
	console.log('visualizer 12/1 nodes', nodes);

	const podProps: any[] = [];
	for (let i = 0; i < nodes.length; i++) {
		podProps.push(
			<Pod
				info={nodes[i]}
				key={i}
				nodeNum={i}
			></Pod>
		);
	};
	
	console.log('pod', podProps);

	return (	
		<div id={darkModeOn ? "vis-dark" : "vis-light"}>
			{podProps}
		</div>
	)
};
