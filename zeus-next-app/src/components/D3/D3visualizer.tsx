"use client"
import * as React from 'react';
import * as d3 from 'd3';
import { useState, useEffect, useRef } from 'react';
import Pod from './D3pod';

interface Node { 
	id: string; 
	group: number;
};

interface Link {
	source: string;
	target: string;
	value: number;
};

interface D3Props {
	nodes: Node[];
	links: Link[];
	nodeId?: (d: Node) => string;
	nodeGroup: (d: Node) => string;
	nodeGroups: string[];
	nodeFill?: string;
	nodeStroke?: string;
	nodeStrokeWidth?: number;
	nodeStrokeOpacity?: number;
	nodeRadius?: number;
	nodeStrength?: number;
	linkSource?: (d: Link) => string;
	linkTarget?: (d: Link) => string;
	linkStroke?: string;
	linkStrokeOpacity?: number;
	linkStrokeWidth?: number;
	linkStrokeLinecap?: string;
	linkStrength?: number;
	colors?: string[];
	width?: number;
	height?: number;
	invalidation?: Promise<any>;
};


// To create our D3 Visualizer
export const Visualizer: React.FunctionComponent = () => {
	const [nodes, setNodes] = useState<Node[]>([]);
	// Copyright 2021 Observable, Inc.
	// Released under the ISC license.
	// https://observablehq.com/@d3/force-directed-graph
	function ForceGraph( { nodes, links} : {nodes: Node[], links: Link[]}, 
		{
			nodeId = (d: Node) => d.id, // given d in nodes, returns a unique identifier (string)
			//@ts-expect-error
			nodeGroup, // given d in nodes, returns an (ordinal) value for color
			//@ts-expect-error
			nodeGroups, // an array of ordinal values representing the node groups
			// nodeTitle, // given d in nodes, a title string
			nodeFill = 'currentColor', // node stroke fill (if not using a group color encoding)
			nodeStroke = '#fff', // node stroke color
			nodeStrokeWidth = 1.5, // node stroke width, in pixels
			nodeStrokeOpacity = 5, // node stroke opacity
			nodeRadius = 12, // node radius, in pixels
			//@ts-expect-error
			nodeStrength, // node strength
			linkSource = ({ source }: Link) => source, // given d in links, returns a node identifier string
			linkTarget = ({ target }: Link) => target, // given d in links, returns a node identifier string
			linkStroke = '#999', // link stroke color
			linkStrokeOpacity = 0.6, // link stroke opacity
			linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
			linkStrokeLinecap = 'round', // link stroke linecap
			//@ts-expect-error
			linkStrength,
			colors = d3.schemeTableau10, // an array of color strings, for the node groups
			width = 640, // outer width, in pixels
			height = 400, // outer height, in pixels
			//@ts-expect-error
			invalidation, // when this promise resolves, stop the simulation
		} = {}
	) {
		// Compute values.
		const N = d3.map(nodes, nodeId).map(intern);
		const LS = d3.map(links, linkSource).map(intern) as string[];
		const LT = d3.map(links, linkTarget).map(intern);
		// if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
		// const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
		const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
		const W = typeof linkStrokeWidth !== 'function' ? null : d3.map(links, linkStrokeWidth);
		const L = typeof linkStroke !== 'function' ? null : d3.map(links, linkStroke);
		
		// Replace the input nodes and links with mutable objects for the
		// simulation.
		//@ts-expect-error
		nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
		//@ts-expect-error
		links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));
		
		// Compute default domains.
		if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);
		
		// Construct the scales.
		const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);
		
		// Construct the forces.
		const forceNode = d3.forceManyBody();
		
		const forceLink = d3.forceLink(links).id(({ index: i }) => N[i as number]);
		if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
		if (linkStrength !== undefined) forceLink.strength(linkStrength);
		
		const simulation = d3
		//@ts-expect-error
			.forceSimulation(nodes)
			.force('link', forceLink)
			.force('charge', forceNode)
			.force('center', d3.forceCenter())
			//@ts-expect-error
			.on('tick', ticked);
		
		const svg = d3
		.create('svg')
		.attr('id', 'D3Graph')
		.attr('width', width)
		.attr('height', height)
		.attr('viewBox', [-width / 2, -height / 2, width, height])
		.attr('style', 'max-width: 200%')
		.attr('style', 'max-width: 200%; height: auto;');
		// .attr("style", {maxWidth: "100%", height: "auto", height: "intrinsic"});
		
		const link = svg
		.append('g')
		.attr('stroke', typeof linkStroke !== 'function' ? linkStroke : null)
		.attr('stroke-opacity', linkStrokeOpacity)
		.attr('stroke-width', typeof linkStrokeWidth !== 'function' ? linkStrokeWidth : null)
		.attr('stroke-linecap', linkStrokeLinecap)
		.selectAll('line')
		.data(links)
			.join('line');
			
			const node = svg
			.append('g')
			.attr('fill', nodeFill)
			.attr('stroke', nodeStroke)
			.attr('stroke-opacity', nodeStrokeOpacity)
			.attr('stroke-width', nodeStrokeWidth)
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', nodeRadius)
			//@ts-expect-error
			.call(drag(simulation));
			
			// displays text in svg element for the name of the pods
			const texts = svg
			.selectAll('text.label')
			.data(nodes)
			.enter()
			.append('text')
			.attr('class', function (d) {
				return d.id;
			})
			.attr('fill', 'black')
			.attr('x', -20)
			.attr('y', 30)
			.attr('font-size', '15px')
			.attr('color', '#ffffff')
			.text(function (d) {
				return d.id;
			});
		//@ts-expect-error
		if (W) link.attr('stroke-width', ({ index: i }) => W[i]);
		//@ts-expect-error
		if (L) link.attr('stroke', ({ index: i }: any) => L[i]);
		//@ts-expect-error
		if (G) node.attr('fill', ({ index: i }) => color(G[i]));
		// if (T) node.append("title").text(({index: i}) => T[i]);
		if (invalidation != null) invalidation.then(() => simulation.stop());
		
		//@ts-expect-error
		function intern(value) {
			return value !== null && typeof value === 'object' ? value.valueOf() : value;
		}
		
		
		function ticked() {
			link
			//@ts-expect-error
			.attr('x1', (d) => d.source.x)
			//@ts-expect-error
			.attr('y1', (d) => d.source.y)
			//@ts-expect-error
			.attr('x2', (d) => d.target.x)
			//@ts-expect-error
			.attr('y2', (d) => d.target.y);
			//@ts-expect-error
			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
			
			texts.attr('transform', function (d) {
				//@ts-expect-error
				return 'translate(' + d.x + ',' + d.y + ')';
			});
		}
		//@ts-expect-error
		function drag(simulation) {
			function dragstarted(event: any) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				event.subject.fx = event.subject.x;
				event.subject.fy = event.subject.y;
			}
			function dragged(event: any) {
				event.subject.fx = event.x;
				event.subject.fy = event.y;
			}

			function dragended(event: any) {
				if (!event.active) simulation.alphaTarget(0);
				event.subject.fx = null;
				event.subject.fy = null;
			}
			return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
		}
		// returns an SVG element containing the visualizer
		//@ts-ignore
		return Object.assign(svg.node(), { scales: { color } });
	}

	const svg = useRef(null);

	useEffect(() => {
		// fetch our cluster info from the backend through http request
		fetch('/cluster', { headers: { 'Content-Type': 'application/json' } })
			.then((data) => data.json())
			.then((data) => {
				// iterate through our array response from the server
				for (let i = 0; i < data.Name.length; i++) {
					// setting state containing our array of objects containing our
					// cluster info
					//@ts-expect-error
					setNodes((oldArray) => [
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
	}, []);

	// arguments that will be passed into the D3 visualizer functions
	
	const miserables = { nodes: [{ id: 'cluster', group: 1 }], links: [] };

	
	const namespaces: any[] = [];
	const groups = {};
	// find namespaces in data obtained

	for (let i = 0; i < nodes.length; i++) {
		//@ts-expect-error
		if (!namespaces.includes(nodes[i].Namespace)) namespaces.push(nodes[i].Namespace);
	}
	// add namespaces
	for (let i = 0; i < namespaces.length; i++) {
		miserables.nodes.push({ id: `${namespaces[i]}`, group: i + 2 });
		//@ts-expect-error
		groups[namespaces[i]] = i + 2;
		//@ts-expect-error
		miserables.links.push({ source: `${namespaces[i]}`, target: 'cluster', value: 24 });
	}

	for (let i = 0; i < nodes.length; i++) {
		//@ts-expect-error
		miserables.nodes.push({ id: `${nodes[i].Name}`, group: groups[nodes[i].Namespace] });
		//@ts-ignore
		miserables.links.push({
			//@ts-ignore
			source: `${nodes[i].Name}`,
			//@ts-ignore
			target: nodes[i].Namespace,
			value: 24,
		});
	}

	// invoke the D3 visualizer function with the arguments passed in
	const chart = ForceGraph(miserables, {
		//@ts-ignore
		nodeId: (d) => d.id,
		//@ts-ignore
		nodeGroup: (d) => d.group,
		// nodeTitle: (d) => `${d.id}\n${d.group}`,
		//@ts-ignore
		linkStrokeWidth: (l) => Math.sqrt(l.value),
		// colors: ['red', 'blue', 'green'],
		linkStrength: 0.1,
		width: 900,
		height: 600,
	});
	if (svg.current) {
		//@ts-expect-error
		svg.current.appendChild(chart);
	}

	// compile our array containing pod elements to display our popover on the svg
	const podProps = [];
	//@ts-ignore
	for (let i = 0; i < nodes.length; i++) {
		//@ts-ignore
		podProps.push(<Pod info={nodes[i]} key={i} nodeNum={i}></Pod>);
	}
	return (
		<div>
			<div ref={svg}></div>
			<div>{podProps}</div>
		</div>
	);
};
export default Visualizer;