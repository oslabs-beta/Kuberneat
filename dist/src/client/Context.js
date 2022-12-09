"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.ContextProvider = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const Context = react_1.default.createContext(null);
exports.Context = Context;
// const google: any;
function ContextProvider({ children }) {
    const [user, setUser] = (0, react_2.useState)("signed in"); // set to defined for testing, default is null
    const [darkModeOn, setDarkModeOn] = (0, react_2.useState)(true);
    function toggleDarkMode() {
        setDarkModeOn((old) => !old);
        console.log('dark mode toggled');
    }
    ;
    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        setUser('signed in');
        console.log('User:', user);
        const userObject = (0, jwt_decode_1.default)(response.credential);
        console.log('UserObject:', userObject);
        setUser(userObject); // later set it to the userObject */
    }
    /* global google object coming from html script*/
    (0, react_2.useEffect)(() => {
        /* global google */
        window.google.accounts.id.initialize({
            client_id: '833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
    }, [user]);
    return (react_1.default.createElement(Context.Provider, { value: {
            user,
            setUser,
            darkModeOn,
            setDarkModeOn,
            toggleDarkMode,
            handleCallbackResponse,
        } },
        children,
        " "));
}
exports.ContextProvider = ContextProvider;
