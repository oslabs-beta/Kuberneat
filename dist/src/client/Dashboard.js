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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
// import iframe from 'react-iframe';
const Dashboard = () => {
    (0, react_1.useEffect)(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(data => {
            console.log('this is fetching to backend', data);
        })
            .catch(err => console.log(err));
    }, []);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("iframe", { src: "http://localhost:3001/d-solo/bSUQyqO4z/zeus-monitoring-dashboard?orgId=1&refresh=10s&panelId=2", width: "1000", height: "500", frameBorder: "0" }))));
};
exports.Dashboard = Dashboard;
///private/var/folders/_y/vn2b15j12t161bb71w16rgn00000gn/T
