import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Formik, Form, useFormik } from "formik";
import Model from "../model/model";
import ErrorAlert from "./ErrorAlert";

const today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;
let formattedDate = dd + "/" + mm + "/" + yyyy;

const initialValues = {
  name: "",
  mobile: "",
  address: "",
  pincode: "",
  date: formattedDate,
};

const AppointmentForm = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues, // initialValues:initialValues
    validationSchema: Model,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors);
  const paperStyle = {
    padding: 20,
    height: "450px",
    width: "300px",
    margin: "auto",
  };

  return (
    <>
    <ErrorAlert />
      <Grid>
        <Paper elevation={12} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1976d2" }}>
              <MedicalServicesIcon />
            </Avatar>
            <h2>Book Appointment</h2>
            <Formik>
              {(props) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    id="standard-basic"
                    name="name"
                    label="Name"
                    placeholder="Enter Full Name"
                    variant="standard"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                  />
                  {/* <p>{ touched ? errors.name : null }</p> */}
                  <TextField
                    id="standard-basic"
                    name="mobile"
                    label="Mobile No."
                    placeholder="Enter Mobile Number"
                    variant="standard"
                    fullWidth
                    value={values.mobile}
                    onChange={handleChange}
                  />
                  <TextField
                    id="standard-basic"
                    name="address"
                    label="Address"
                    placeholder="Enter Full Address"
                    variant="standard"
                    fullWidth
                    value={values.address}
                    onChange={handleChange}
                  />
                  {touched.address ? <p>{errors.address}</p> : null}
                  <TextField
                    id="standard-basic"
                    name="pincode"
                    label="Pin Code"
                    placeholder="eg: 221001"
                    variant="standard"
                    fullWidth
                    value={values.pincode}
                    onChange={handleChange}
                  />
                  {touched.pincode ? <p>{errors.pincode}</p> : null}
                  <TextField
                    id="standard-basic"
                    name="date"
                    label={formattedDate}
                    variant="standard"
                    fullWidth
                    disabled
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ top: "50px", textTransform: "none" }}
                  >
                    Make Payment
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default AppointmentForm;
