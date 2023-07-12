import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Calendar from "./Calendar";
import Gender from "./Gender";

const AppointmentForm = () => {
  const pincode = [
    {
      label: 277503,
    },
    {
      label: 201301,
    },
    {
      label: 206021,
    },
    {
      label: 226013,
    },
  ];
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "30ch",
            height: "7ch",
            display: "flex",
            margin: "auto",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Gender />
        <TextField id="outlined-basic" label="Mobile No" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField
          id="outlined-select"
          select
          label="Pincode"
        >
          {pincode.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Calendar />
      <Stack direction="row" spacing={20}>
        <Button
          sx={{ margin: "30px auto",textTransform: 'none' }}
          variant="contained"
          type="submit"
          href="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
        >
          Make Payment
        </Button>
      </Stack>
    </>
  );
};

export default AppointmentForm;
