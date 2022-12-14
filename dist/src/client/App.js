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
const react_router_dom_1 = require("react-router-dom");
const Context_1 = require("./Context");
require("./styles.css");
const material_1 = require("@mui/material");
const LightModeTwoTone_1 = __importDefault(require("@mui/icons-material/LightModeTwoTone"));
const DarkModeTwoTone_1 = __importDefault(require("@mui/icons-material/DarkModeTwoTone"));
const LogoutTwoTone_1 = __importDefault(require("@mui/icons-material/LogoutTwoTone"));
const LiveHelpTwoTone_1 = __importDefault(require("@mui/icons-material/LiveHelpTwoTone"));
const ElectricBoltTwoTone_1 = __importDefault(require("@mui/icons-material/ElectricBoltTwoTone"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const Sidebar_1 = __importDefault(require("./Sidebar"));
const Login_1 = __importDefault(require("./Login"));
const Signup_1 = __importDefault(require("./Signup"));
const CustomDash_1 = __importDefault(require("./components/CustomDash"));
const GrafanaDash_1 = __importDefault(require("./components/GrafanaDash"));
const Kluster_1 = __importDefault(require("./components/Kluster"));
const VisD3_1 = __importDefault(require("./components/VisD3"));
const Faq_1 = __importDefault(require("./components/Faq"));
function App() {
    //destructuring functions from Context object
    const { darkModeOn, toggleDarkMode, setUser, user } = (0, react_1.useContext)(Context_1.Context);
    function logout() {
        // for now, this mocks logout from logout icon on far right of top navbar
        // navigate('/');
        setUser(null);
    }
    function signup() {
        // write logic for signup, reroute to login page
        setUser(null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'loginPage', id: darkModeOn ? 'navbar1' : 'navbar2' },
            !user && React.createElement("div", { style: { width: '200px', marginLeft: '25px' } }),
            user && (React.createElement("div", { className: darkModeOn ? 'user-dark' : 'user-light' },
                ' ',
                React.createElement("div", { id: 'avatar-id', className: darkModeOn ? 'user-pic-dark' : 'user-pic-light' }, "Y"),
                ' ',
                React.createElement("div", { className: 'user-info' },
                    ' ',
                    React.createElement("p", null, "Yaku"),
                    " ",
                    ' '))),
            React.createElement("div", { id: 'logo', className: darkModeOn ? 'darkMode' : 'lightMode' }, "Zeus"),
            React.createElement(material_1.Box, { id: 'icons-header', display: 'flex', justifyContent: 'space-between', marginRight: 5 },
                React.createElement(Tooltip_1.default, { title: darkModeOn ? 'Light Mode' : 'Dark Mode', arrow: true },
                    React.createElement(material_1.IconButton, { sx: {
                            // refactored ICON hover effect, applied to all
                            color: '#DAA520',
                            '&:hover': { backgroundColor: '#22A39F' },
                        }, size: 'large', onClick: toggleDarkMode }, darkModeOn ? React.createElement(LightModeTwoTone_1.default, null) : React.createElement(DarkModeTwoTone_1.default, null))),
                React.createElement(react_router_dom_1.Link, { to: `${user ? '/' : ''}` },
                    React.createElement(Tooltip_1.default, { title: 'Zeus', arrow: true },
                        React.createElement(material_1.IconButton, { sx: {
                                color: '#DAA520',
                                '&:hover': { backgroundColor: '#FFE15D' },
                            }, size: 'large' },
                            React.createElement(ElectricBoltTwoTone_1.default, null)))),
                React.createElement(react_router_dom_1.Link, { to: `${user ? '/faq' : ''}` },
                    React.createElement(Tooltip_1.default, { title: 'FAQ', arrow: true },
                        React.createElement(material_1.IconButton, { sx: {
                                color: '#DAA520',
                                '&:hover': { backgroundColor: '#22A39F' },
                            }, size: 'large' },
                            React.createElement(LiveHelpTwoTone_1.default, null)))),
                React.createElement(react_router_dom_1.Link, { to: `${user ? '/' : ''}` },
                    React.createElement(Tooltip_1.default, { title: 'Logout', arrow: true },
                        React.createElement(material_1.IconButton, { onClick: () => setUser(null), sx: {
                                color: '#DAA520',
                                '&:hover': { backgroundColor: '#fc8181' },
                            }, size: 'large' },
                            React.createElement(LogoutTwoTone_1.default, null)))))),
        !user && (React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Login_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: '/signup', element: React.createElement(Signup_1.default, { onClick: signup }) }))),
        user && (React.createElement("div", { className: darkModeOn ? 'app-dark' : 'app-light' },
            React.createElement("div", null,
                React.createElement(Sidebar_1.default, null)),
            React.createElement("main", { className: 'content' },
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(CustomDash_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/grafanadash', element: React.createElement(GrafanaDash_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/visualizer', element: React.createElement(VisD3_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/kluster', element: React.createElement(Kluster_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/faq', element: React.createElement(Faq_1.default, null) })))))));
}
exports.default = App;
