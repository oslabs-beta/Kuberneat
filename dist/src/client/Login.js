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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Context_1 = require("./Context");
const formik_1 = require("formik"); // need formik to use yup for form validation
const schemas_1 = require("./schemas"); // import validation schema
const jwt_decode_1 = __importDefault(require("jwt-decode"));
function Login({ onClick }) {
    const { darkModeOn, toggleDarkMode, user, setUser, handleCallbackResponse } = (0, react_1.useContext)(Context_1.Context);
    // const navigate = useNavigate();
    // function goToMain() {
    //     navigate('/dashboard')
    //   }
    // onSubmit or Login handler function -> add Authentication logic here
    const onSubmit = (values, actions) => __awaiter(this, void 0, void 0, function* () {
        console.log('login submitted');
        console.log({ values });
        //   console.log({actions});
        fetch('/user', {});
        // below is just a mock API call for testing, add logic for AUTH here later...
        yield new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        actions.resetForm(); // resets form fields 
    });
    // console.log(errors)
    // console.log(loginSchema)
    /* console.log(formik) */
    const { // destructured props from the object returned from useFormik hook
    values, // value inside input fields
    errors, // object that holds all form validation logic
    touched, // allows for better dynamic form validation, only shows err after input has been touched
    isSubmitting, // boolean to allow button disabling when submitting
    handleBlur, // validates the form when clicking off the input
    handleChange, // sets formik state whenever state chnages
    handleSubmit // handles form submitting
     } = (0, formik_1.useFormik)(// using the useFormik hook to return an object...
    {
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: schemas_1.loginSchema,
        onSubmit: onSubmit,
    });
    /* global google object coming from html script*/
    (0, react_1.useEffect)(() => {
        function handleCallbackResponse(response) {
            console.log('Encoded JWT ID token: ' + response.credential);
            const userObject = (0, jwt_decode_1.default)(response.credential);
            console.log(userObject);
            setUser(userObject);
        }
        ;
        /* global google */
        /* can use ( window as any ) to access google object instead of using unofficial type libraries */
        window.google.accounts.id.initialize({
            client_id: "833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
        window.google.accounts.id.renderButton(document.getElementById("signInDiv"), { them: "outline", size: "large" });
        window.google.accounts.id.prompt();
    }, [user]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: darkModeOn ? 'login-page-dark' : 'login-page-light' },
            react_1.default.createElement("div", { className: darkModeOn ? "auth-1" : "auth-2" },
                react_1.default.createElement("div", { id: "signInDiv" })),
            react_1.default.createElement("form", { autoComplete: 'off' // turns off auto-complete of inputs
                , className: darkModeOn ? 'login1' : 'login2', onSubmit: handleSubmit },
                react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
                react_1.default.createElement("input", { value: values.email, onChange: handleChange, id: "email", type: "email", placeholder: "Enter your email", onBlur: handleBlur, className: errors.email && touched.email ? "input-error" : "" }),
                errors.email && touched.email && react_1.default.createElement("p", { className: 'error' }, errors.email),
                react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                react_1.default.createElement("input", { value: values.password, onChange: handleChange, id: "password", type: "password", placeholder: "Enter your password", onBlur: handleBlur, className: errors.password && touched.password ? "input-error" : "" }),
                errors.password && touched.password && react_1.default.createElement("p", { className: 'error' }, errors.password),
                react_1.default.createElement("label", { htmlFor: "confirmPassword" }, "Confirm Password"),
                react_1.default.createElement("input", { value: values.confirmPassword, onChange: handleChange, id: "confirmPassword", type: "password", placeholder: "Confirm your password", onBlur: handleBlur, className: errors.confirmPassword && touched.confirmPassword ? "input-error" : "" }),
                errors.confirmPassword && touched.confirmPassword && react_1.default.createElement("p", { className: 'error' }, errors.confirmPassword),
                react_1.default.createElement("div", { className: "login-box" },
                    react_1.default.createElement("button", { id: darkModeOn ? "login-button1" : "login-button2", 
                        // onClick={goToMain} // disabled naviagte for now, waiting to implement actual AUTH
                        type: "submit", disabled: isSubmitting }, "Login"),
                    react_1.default.createElement("button", { id: darkModeOn ? "login-button1" : "login-button2" }, "Sign-up"))))));
}
;
exports.default = Login;
