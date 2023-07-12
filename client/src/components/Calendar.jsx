import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box } from "@mui/material";

const Calendar = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "TimePicker"]}>
          <Box
            sx={{
              // margin: "auto",
              position: 'absolute',
              width:'300px'
            }}
          >
            <DatePicker sx={{marginLeft:'0px'}}
              label="Select a Date"
              name="date"
            />
            {/* <TimePicker sx={{marginTop:'10px',marginLeft:'0px'}} label="Select Time" /> */}
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
