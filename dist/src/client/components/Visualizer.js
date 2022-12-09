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
const React = __importStar(require("react"));
const react_1 = require("react");
const Pod_1 = __importDefault(require("./Pod"));
const Context_1 = require("../Context");
const Header_1 = __importDefault(require("./Header"));
const material_1 = require("@mui/material");
function Visualizer() {
    const [nodes, setNodes] = (0, react_1.useState)([]);
    const { darkModeOn } = (0, react_1.useContext)(Context_1.Context);
    //fetching to the backend
    (0, react_1.useEffect)(() => {
        setNodes([
            { Namespace: 'default', Name: 'alertmanager-prometheus-kube-prometheus-alertmanager-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '250Mi(6%)' },
            { Namespace: 'default', Name: 'prometheus-grafana-6fdd6868b4-bc5s6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'default', Name: 'prometheus-kube-prometheus-operator-6ffc69cf67-lrvng', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'default', Name: 'prometheus-kube-state-metrics-6cfd96f4c8-lfgr6', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'default', Name: 'prometheus-prometheus-kube-prometheus-prometheus-0', CPU_Requests: '200m(5%)', CPU_Limits: '200m(5%)', Memory_Requests: '50Mi(1%)' },
            { Namespace: 'default', Name: 'prometheus-prometheus-node-exporter-94nxk', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'kube-system', Name: 'coredns-565d847f94-l5z28', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '70Mi(1%)' },
            { Namespace: 'kube-system', Name: 'etcd-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '100Mi(2%)' },
            { Namespace: 'kube-system', Name: 'kube-apiserver-zeus-monitoring', CPU_Requests: '250m(6%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'kube-system', Name: 'kube-controller-manager-zeus-monitoring', CPU_Requests: '200m(5%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'kube-system', Name: 'kube-proxy-dkkwq', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'kube-system', Name: 'kube-scheduler-zeus-monitoring', CPU_Requests: '100m(2%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' },
            { Namespace: 'kube-system', Name: 'storage-provisioner', CPU_Requests: '0(0%)', CPU_Limits: '0(0%)', Memory_Requests: '0(0%)' }
        ]);
        ///create variable to store the values from the
    }, []);
    console.log('visualizer 12/1 nodes', nodes);
    const podProps = [];
    for (let i = 0; i < nodes.length; i++) {
        podProps.push(React.createElement(Pod_1.default, { info: nodes[i], key: i, nodeNum: i }));
    }
    ;
    console.log('pod', podProps);
    return (React.createElement(material_1.Box, { m: "20px" },
        React.createElement("div", { id: darkModeOn ? "vis-dark" : "vis-light" },
            React.createElement(Header_1.default, { title: "Visualizer", subtitle: "Just one of the many ways to visualize your cluster" }),
            podProps)));
}
;
exports.default = Visualizer;
