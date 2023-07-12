import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const NewForm = () => {
  const paperStyle = {
    padding: 20,
    height: "450px",
    width: "300px",
    margin: "auto",
  };
  const today = new Date()
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  console.log(mm)
  if(dd<10) dd = '0' + dd
  if(mm<10) mm = '0' + mm
  let formattedDate = dd + '/' + mm + '/' + yyyy;
  return (
    <>
      <Grid>
        <Paper elevation={12} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1976d2" }}>
              <MedicalServicesIcon />
            </Avatar>
            <h2>Book Appointment</h2>
            <TextField
              id="standard-basic"
              name="name"
              label="Name"
              placeholder="Enter Full Name"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              id="standard-basic"
              name="mobile"
              label="Mobile No."
              placeholder="Enter Mobile Number"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              id="standard-basic"
              name="address"
              label="Address"
              placeholder="Enter Full Address"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              id="standard-basic"
              name="pincode"
              label="Pin Code"
              placeholder="eg: 221001"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              id="standard-basic"
              name="date"
              label={formattedDate}
              variant="standard"
              fullWidth
              disabled
            />
            <Button type="submit" variant="contained" style={{top:"50px", textTransform: "none"}}>Make Payment</Button>            
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default NewForm;
