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
// import Graph from 'react-graph-vis';
const Dashboard = () => {
    const [nodes, setNodes] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch('/cluster', { headers: { 'Content-Type': 'application/json' } }) //{headers: { 'Content-Type': 'application/json' },}
            .then((data) => data.json())
            .then((data) => {
            console.log('this is fetching from the  backend:', data);
            for (let i = 0; i < data.Name.length; i++) {
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
    console.log('nodes', nodes);
    const podProps = [];
    nodes.forEach((info = {}, i) => {
        podProps.push(React.createElement(Pod_1.default, { info: info, key: i }));
        const webNode = {
        // nodes: [{ id: i, label: podProps[info] }],
        };
    });
    console.log('podprops: ', podProps);
    return (React.createElement("div", null,
        React.createElement("div", null, podProps)));
};
exports.Dashboard = Dashboard;
///private/var/folders/_y/vn2b15j12t161bb71w16rgn00000gn/T
