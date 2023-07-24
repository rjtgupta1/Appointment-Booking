import { Button, Container, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Formik, Form, useFormik } from "formik";
import Box from "@mui/material/Box";
import React from "react";

const initialValues = {
  mobile: "",
  paymentId:''
};

const Checkstatus = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues, // initialValues:initialValues
    onSubmit: () => {
      alert('working')
    },
  });
  console.log(values);
  return (
    <>
      <Container maxWidth="sm">
        <h1 style={{ textAlign: "center" }}>Check Status</h1>
          <Formik>
            {(props) => (
              <Form onSubmit={handleSubmit}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "18ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    name="mobile"
                    value={values.name}
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <span>or</span>
                  <TextField
                    id="outlined-basic"
                    label="Payment Id"
                    name="paymentId"
                    value={values.paymentId}
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained">
                    Check <SearchOutlinedIcon />{" "}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
      </Container>
    </>
  );
};

export default Checkstatus;
