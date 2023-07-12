import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box } from "@mui/material";

const Calendar = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "TimePicker"]}>
          <Box
            sx={{
              margin: "auto",
              position: 'relative',
              width:'300px'
            }}
          >
            <DatePicker sx={{marginLeft:'15px'}}
              helperText="Please select a Date"
              label="Select a Date"
            />
            <TimePicker sx={{marginTop:'10px',marginLeft:'15px'}} label="Select Time" />
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
