"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const Pod_1 = __importDefault(require("./Pod"));
// import { ResponsiveNetwork } from '@nivo/network';
const bar_1 = require("@nivo/bar");
// import { Air } from '@mui/icons-material';
//import {ForceGraph} from "@d3/force-directed-graph"
const Dashboard = () => {
    const [nodes, setNodes] = (0, react_1.useState)([]);
    //fetching to the backend
    (0, react_1.useEffect)(() => {
        fetch('/cluster', { headers: { 'Content-Type': 'application/json' } }) //{headers: { 'Content-Type': 'application/json' },}
            .then((data) => data.json())
            .then((data) => {
            console.log('this is fetching from the  backend:', data);
            for (let i = 0; i < data.Name.length; i++) {
                //looping through the objet of arrays
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
            .catch((err) => console.log(err));
        ///create variable to store the values from the
    }, []);
    // console.log('nodes', nodes);
    //Rendering/passing props to Pod component
    const podProps = [];
    nodes.forEach((info = {}, i) => {
        podProps.push(React.createElement(Pod_1.default, { info: info, key: i }));
    });
    console.log('pod', podProps);
    //creating visualizer with d3
    const nodesArray = [];
    podProps.forEach((p, i) => {
        // node resources
        nodesArray.push(p.props.info);
    });
    const barChart = ({ nodesArray }) => (React.createElement(bar_1.ResponsiveBar, { data: nodesArray, keys: [
            'Namespace',
            'Name',
            'CPU_Requests',
            'CPU_Limits',
            'Memory_Requests',
            'Memory_Limits',
            'Age',
        ], indexBy: "Name", margin: { top: 50, right: 130, bottom: 50, left: 60 }, padding: 0.3, valueScale: { type: 'linear' }, indexScale: { type: 'band', round: true }, colors: { scheme: 'nivo' }, defs: [
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ], fill: [
            {
                match: {
                    id: 'Namespace',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'Name',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'CPU_Requests',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'CPU_Limits',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'Memory_Requests',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'Memory_Limits',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'Age',
                },
                id: 'dots',
            },
        ], borderColor: { from: 'color', modifiers: [['darker', 1.6]] }, axisTop: null, axisRight: null, axisBottom: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Name',
            legendPosition: 'middle',
            legendOffset: 32,
        }, axisLeft: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Resources',
            legendPosition: 'middle',
            legendOffset: -40,
        }, labelSkipWidth: 12, labelSkipHeight: 12, labelTextColor: { from: 'color', modifiers: [['darker', 1.6]] }, legends: [
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ], role: "application", ariaLabel: "Kubernetes Nodes", barAriaLabel: (e) => {
            return `${e.data.Name} ${e.data.Namespace} ${e.data.CPU_Requests} ${e.data.CPU_Limits} ${e.data.Memory_Requests} ${e.data.Memory_Limits} ${e.data.Age}`;
        } }));
    //pass in the nodesArray to render in graph
    // const netowrkOfNodes: React.FunctionComponent<
    // 	ResponsiveNetwork & React.HTMLAttributes<HTMLOrSVGElement>
    // > = (nodeArray) => (
    // 	<ResponsiveNetwork
    // 		data={
    // 			{
    // 				nodes: [],
    // 				links: [],
    // 			} // 	nodeData = { nodeData }
    // 			// 	margin = ({top: 0, right: 0, bottom: 0, left: 0})
    // 			// 	linkDistance = { (e) => {return e.distance} }
    // 			// 	centerStrength = { 0.5 }
    // 			// 	replusivity = {6}
    // 			// 	nodeSize = {(n) => {return n.size}}
    // 			// 	activeNodeSize = {(activeNode) => {return (1.5)*activeNode.size}}
    // 			// 	nodeColor ={(n) => {retun namespace.color}}
    // 			// 	nodeBorderWidth = { 1 }
    // 			// 	nodeBorderColor = {{ from: 'color', modifiers: [['darker', 0.8]] }}
    // 			// 	linkThinkness = {{(n){return 2+2*n.target.data.height}}
    // 			// 	linkBlendMode =  'multiply'
    // 			// 	montionConfig = 'wobbly'
    // 		}
    // 	/>
    // );
    // const visualizer = ({ nodesArray: [], links }: any, {} = {}) => {
    // 	// Constructing forces
    // 	const forceNode = d3.forceManyBody().strength(-100);
    // 	//Linkage of nodes (each node has unique id)
    // 	const forceLink = d3.forceLink();
    // 	//creating stimulation: By default the nodes should be in an array to work
    // 	//nodes is an array passed from line 39
    // 	const simulation = d3
    // 		.forceSimulation(nodes)
    // 		//makes each node repel each other
    // 		.force('charge', d3.forceManyBody())
    // 		//size of node
    // 		.force('center', d3.forceCenter(400, 400))
    // 		//to start stimulator -updates position of each tick (node)
    // 		.on('tick', () => {});
    // 	console.log('simulation', simulation);
    // };
    // visualizer({});
    return (React.createElement("div", null,
        React.createElement("div", null, podProps),
        React.createElement("div", null, barChart(nodesArray))));
};
exports.Dashboard = Dashboard;
exports.default = exports.Dashboard;
///private/var/folders/_y/vn2b15j12t161bb71w16rgn00000gn/T
{
    /* <iframe
    src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&from=1669661032419&to=1669662832419&panelId=2"
    width="1000"
    height="500"
    frameBorder="0"
></iframe> */
}
{
    /* <iframe src="http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2" width="1000" height="500" frameBorder="0"></iframe> */
}
// export default Dashboard;
// function runForceGraph(
// 	current: any,
// 	linksInfo: any,
// 	nodeInfo: any,
// 	nodeHoverTooltip: any
// ) {
// 	throw new Error('Function not implemented.');
// }
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
