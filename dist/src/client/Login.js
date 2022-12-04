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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Context_1 = require("./Context");
// import { Google } from "@mui/icons-material"
// import jwt_decode from 'jwt_decode';
// import * as JWT from 'jwt-decode';
function Login(props) {
    const [loginForm, setLoginForm] = (0, react_1.useState)({ user: "", pass: "" });
    const { darkModeOn, toggleDarkMode, user, handleCallbackResponse } = (0, react_1.useContext)(Context_1.Context);
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(loginForm);
        setLoginForm(oldData => {
            return (Object.assign(Object.assign({}, oldData), { [name]: value }));
        });
    }
    const navigate = (0, react_router_dom_1.useNavigate)();
    function goToMain() {
        navigate('/dashboard');
    }
    /* global google object coming from html script*/
    (0, react_1.useEffect)(() => {
        // function handleCallbackResponse(response) {
        //     console.log('Encoded JWT ID token: ' + response.credential);
        //     const userObject = JWT(response.credential);
        //     console.log(userObject);
        //     setUser(userObject);
        // };
        /* global google */
        google.accounts.id.initialize({
            client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), { them: "outline", size: "large" });
        // { darkModeOn ? }
        google.accounts.id.prompt();
    }, [user]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: darkModeOn ? "auth-1" : "auth-2" },
            react_1.default.createElement("div", { id: "signInDiv" })),
        react_1.default.createElement("div", { id: darkModeOn ? "log-dark" : "log-light" },
            react_1.default.createElement("div", { className: darkModeOn ? 'login1' : 'login2' },
                react_1.default.createElement("label", { htmlFor: "user" }, "Username: "),
                react_1.default.createElement("input", { id: "user", type: "text", placeholder: "username", onChange: handleChange, name: "user", value: loginForm.user }),
                react_1.default.createElement("label", { htmlFor: "pass" }, "Password: "),
                react_1.default.createElement("input", { id: "pass", type: "password", placeholder: "password", onChange: handleChange, name: "pass", value: loginForm.pass }),
                react_1.default.createElement("div", { className: "login-box" },
                    react_1.default.createElement("div", { id: darkModeOn ? "login-button1" : "login-button2", onClick: goToMain }, "Login"),
                    react_1.default.createElement("div", { id: darkModeOn ? "login-button1" : "login-button2" }, "Sign-up"))))));
}
exports.default = Login;
