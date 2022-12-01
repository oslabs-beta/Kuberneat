"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.ContextProvider = void 0;
const icons_material_1 = require("@mui/icons-material");
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
// import jwt_decode from 'jwt_decode'; // ---> WHY ISN'T THIS WORKING!
// import * as jwtJsDecode from 'jwt-js-decode';
// import { jwtDecode } from 'jwt-js-decode';
const Context = react_1.default.createContext();
exports.Context = Context;
function ContextProvider({ children }) {
    const [user, setUser] = (0, react_2.useState)(null);
    const [darkModeOn, setDarkModeOn] = (0, react_2.useState)(false);
    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
    }
    ;
    function toggleDarkMode() {
        setDarkModeOn(old => !old);
        console.log('dark mode toggled');
    }
    ;
    /* global google object coming from html script*/
    (0, react_2.useEffect)(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
    }, [user]);
    return (react_1.default.createElement(Context.Provider, { value: { user, setUser, darkModeOn, setDarkModeOn, toggleDarkMode, handleCallbackResponse } },
        children,
        " "));
}
exports.ContextProvider = ContextProvider;
;
