import * as yup from "yup"; // yup is what formik uses for form vaildation

const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/; // Regex for password rules
// MUST be: min 5 characters -> 1 uppercase letter, 1 lowercase letter, 1 numeric digit

// we first must create a schema for form validation
export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email")
    .required("Required"),
    /* passcode: yup.number().positive().integer().required("Required"), */ // if we want to include a numerical passcode
    password: yup.string().min(5)
    /* .matches(passwordRules, {message: "Please create a stronger password"}) */ // can make password req stronger with this later
    .required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match")
    .required("Required"),
});