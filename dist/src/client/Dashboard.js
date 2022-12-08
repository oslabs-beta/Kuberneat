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
const Context_1 = require("./Context");
const Dashboard = () => {
    const { darkModeOn } = (0, react_1.useContext)(Context_1.Context);
    return (React.createElement("div", { className: darkModeOn ? 'dash-dark' : 'dash-light' },
        React.createElement("div", { style: { fontSize: 35, textAlign: 'center' } }, "Dashboard"),
        React.createElement("iframe", { src: "http://localhost:3001/d/0dsovdF4z/zeus?orgId=1&refresh=5s&kiosk=&from=1669924943773&to=1669925243773", frameBorder: "0", loading: "eager", title: "Grafana Chart", className: darkModeOn ? 'iframe-dark' : 'iframe-light' })));
};
exports.Dashboard = Dashboard;
exports.default = exports.Dashboard;
