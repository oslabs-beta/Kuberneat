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
const Login_1 = __importDefault(require("./Login"));
const Main_1 = __importDefault(require("./components/Main"));
const material_1 = require("@mui/material");
const BarChartTwoTone_1 = __importDefault(require("@mui/icons-material/BarChartTwoTone"));
const Hub_1 = __importDefault(require("@mui/icons-material/Hub"));
const LightModeTwoTone_1 = __importDefault(require("@mui/icons-material/LightModeTwoTone"));
const DarkModeTwoTone_1 = __importDefault(require("@mui/icons-material/DarkModeTwoTone"));
const LogoutTwoTone_1 = __importDefault(require("@mui/icons-material/LogoutTwoTone"));
// import css from './styles.css'
// import Yaku from './Yaku.png'
const App = () => {
    //destructuring functions from Context object
    const { darkModeOn, toggleDarkMode, user } = (0, react_1.useContext)(Context_1.Context);
    //returns a method that routes any endpoint
    const navigate = (0, react_router_dom_1.useNavigate)();
    function goToMain() {
        navigate('./main');
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { id: darkModeOn ? 'navbar1' : 'navbar2' },
            React.createElement("div", { className: darkModeOn ? 'user1' : 'user2' },
                React.createElement("img", { alt: "user-pic", width: "75px", height: "75px", 
                    /* src={user.picture} */
                    src: './Yaku.png', style: { cursor: 'pointer', borderRadius: '50%' } }),
                React.createElement("p", null, "user.name"),
                React.createElement("p", null, "user.email")),
            React.createElement("div", { id: "logo", className: darkModeOn ? 'darkMode' : 'lightMode' }, "Zeus"),
            React.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", marginRight: 5 },
                React.createElement(material_1.IconButton, { sx: darkModeOn
                        ? { '&:hover': { color: 'green' } }
                        : { '&:hover': { color: 'floralwhite' } }, size: "large", onClick: toggleDarkMode }, darkModeOn ? React.createElement(DarkModeTwoTone_1.default, null) : React.createElement(LightModeTwoTone_1.default, null)),
                React.createElement(react_router_dom_1.Link, { to: "/charts" },
                    React.createElement(material_1.IconButton, { sx: darkModeOn
                            ? { '&:hover': { color: 'green' } }
                            : { '&:hover': { color: 'floralwhite' } }, size: "large" },
                        React.createElement(BarChartTwoTone_1.default, null))),
                React.createElement(react_router_dom_1.Link, { to: "/nodes" },
                    React.createElement(material_1.IconButton, { sx: darkModeOn
                            ? { '&:hover': { color: 'green' } }
                            : { '&:hover': { color: 'floralwhite' } }, size: "large" },
                        React.createElement(Hub_1.default, null))),
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement(material_1.IconButton, { sx: darkModeOn
                            ? { '&:hover': { color: 'green' } }
                            : { '&:hover': { color: 'floralwhite' } }, size: "large" },
                        React.createElement(LogoutTwoTone_1.default, null))))),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Login_1.default, { onClick: goToMain }) }),
            React.createElement(react_router_dom_1.Route, { path: "/about", element: React.createElement(Main_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/main", element: React.createElement(Main_1.default, null) }))));
};
exports.default = App;
