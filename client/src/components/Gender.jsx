import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Gender = () => {
//   const [value, setValue] = React.useState("male");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
  return (
    <>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
    </>
  );
};

export default Gender;
