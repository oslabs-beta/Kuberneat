import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from 'react'

const Form = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // adding initVals solved the helperText error
  const handleFormSubmit = (values: initVals) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>


            <Box
              display="grid" // using css grid
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))" // split the grid with css grid: 4 columns of 1fr each
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, // span 4 means take whole page horizontally
              }}
            >
              <TextField // creating the textfield..
                fullWidth
                variant="filled" // type of text field
                type="text"
                label="First Name" // title
                onBlur={handleBlur} // touch and out
                onChange={handleChange}
                value={values.firstName} // values of the field
                name="firstName"
                error={!!touched.firstName && !!errors.firstName} // double bang forces it to become a boolean, once both conditons are true/ visited -> it triggers helper text
                helperText={touched.firstName && errors.firstName} // 2:14 on vdo -> 
                sx={{ gridColumn: "span 2" }} // that's why it takes only half screeen 2:4
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

              
            <Box // allows alignment of buttonto far right
              display="flex" 
              justifyContent="end" 
              mt="20px"
            > 
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>

          </form>
        )}


      </Formik>
    </Box>
  );
};

interface initVals {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    address1: string;
    address2: string;
  }

  // REGEX 
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"), // makes it a re'q field
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"), //.email is native error checking feature for yup
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid") // error handler
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});


const initialValues: initVals = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;