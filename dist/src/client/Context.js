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
    const [user, setUser] = (0, react_2.useState)(null); // set to defined for testing, default is null
    const [darkModeOn, setDarkModeOn] = (0, react_2.useState)(true);
    function toggleDarkMode() {
        setDarkModeOn((old) => !old);
        console.log('dark mode toggled');
    }
    //John's comment: function handling Oauth, when we get user object back
    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        console.log('User:', user);
        const userObject = (0, jwt_decode_1.default)(response.credential);
        //create a new object from user object, make the shape match the shape of the object we get from own oauth
        //console.log('UserObject:', userObject);
        const { name, email } = userObject;
        const newUser = { name: name, email: email };
        setUser(newUser); // set user to userObject */ going from null to defined and allows routes to display 
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
