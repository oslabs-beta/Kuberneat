import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Pod from './Pod';

import { Context } from '../Context';
import * as d3 from "d3"

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
	// 	setNodes([
	// 		{Namespace: 'default', Name: 'alertmanager-prometheus-kube-prometheus-alertmanager-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '250Mi(6%)'},
	// 		{Namespace: 'default', Name: 'prometheus-grafana-6fdd6868b4-bc5s6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'default', Name: 'prometheus-kube-prometheus-operator-6ffc69cf67-lrvng', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'default', Name: 'prometheus-kube-state-metrics-6cfd96f4c8-lfgr6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'default', Name: 'prometheus-prometheus-kube-prometheus-prometheus-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '50Mi(1%)'},
	// 		{Namespace: 'default', Name: 'prometheus-prometheus-node-exporter-94nxk', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'kube-system', Name: 'coredns-565d847f94-l5z28', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '70Mi(1%)'},
	// 		{Namespace: 'kube-system', Name: 'etcd-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '100Mi(2%)'},
	// 		{Namespace: 'kube-system', Name: 'kube-apiserver-zeus-monitoring', CPU_Requests: '250m(6%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'kube-system', Name: 'kube-controller-manager-zeus-monitoring', CPU_Requests: '200m(5%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'kube-system', Name: 'kube-proxy-dkkwq', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'kube-system', Name: 'kube-scheduler-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'},
	// 		{Namespace: 'kube-system', Name: 'storage-provisioner', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)'}
	// 		])
}, []);
	console.log('visualizer 12/1 nodes', nodes);

	// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/force-directed-graph
function ForceGraph({
  nodes, // an iterable of node objects (typically [{id}, …])
  links  // an iterable of link objects (typically [{source, target}, …])
} : { nodes : any, links : any }, {
  nodeId = (d : {id : string}) => d.id, // given d in nodes, returns a unique identifier (string)
  nodeGroup, // given d in nodes, returns an (ordinal) value for color
  nodeGroups, // an array of ordinal values representing the node groups
  nodeTitle, // given d in nodes, a title string
  nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  nodeStrength,
  linkSource = ({source} : {source : any}) => source, // given d in links, returns a node identifier string
  linkTarget = ({target} : {target : any}) => target, // given d in links, returns a node identifier string
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkStrokeLinecap = "round", // link stroke linecap
  linkStrength,
  colors = d3.schemeTableau10, // an array of color strings, for the node groups
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  invalidation // when this promise resolves, stop the simulation
} : (string | number | any) = {}) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  if (nodeTitle === undefined) nodeTitle = (_ : any, i : number) => N[i];
  const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
  const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);
  const L = typeof linkStroke !== "function" ? null : d3.map(links, linkStroke);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({id: N[i]}));
  links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", forceNode)
      .force("center",  d3.forceCenter())
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", typeof linkStroke !== "function" ? linkStroke : null)
      .attr("stroke-opacity", linkStrokeOpacity)
      .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
      .attr("stroke-linecap", linkStrokeLinecap)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("fill", nodeFill)
      .attr("stroke", nodeStroke)
      .attr("stroke-opacity", nodeStrokeOpacity)
      .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", nodeRadius)
      .call(drag(simulation));

  if (W) link.attr("stroke-width", ({index: i}) => W[i]);
  if (L) link.attr("stroke", ({index: i}) => L[i]);
  if (G) node.attr("fill", ({index: i}) => color(G[i]));
  if (T) node.append("title").text(({index: i}) => T[i]);
  if (invalidation != null) invalidation.then(() => simulation.stop());

  function intern(value : (void | {})) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  function ticked() {
    link
      .attr("x1", (d : { source : { x : any } }) => d.source.x)
      .attr("y1", (d : { source : { y : any } }) => d.source.y)
      .attr("x2", (d : { target : { x : any } }) => d.target.x)
      .attr("y2", (d : { target : { y : any } }) => d.target.y);

    node
      .attr("cx", (d : { x : any } ) => d.x)
      .attr("cy", (d : { y : any } ) => d.y);
  }

  function drag(simulation : { alphaTarget( (a : number) => a) { restart : Function} }) {    
    function dragstarted(event : {active: any, subject: { x : any, y : any, fx: any, fy : any} }) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event : {subject: {fx: any, fy : any}, x : any, y : any} ) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event : {active: any, subject: {fx: any, fy : any} }) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), {scales: {color}});
}

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
