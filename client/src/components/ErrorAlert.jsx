import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ErrorAlert = (props) => {
    const showAlert = {
        width: "25%",
        display: "flex",
        position: "fixed",
        paddingBottom: 5,
        paddingTop: 0,
      };
  return (
    <>
      <Stack sx={showAlert} spacing={2}>
        <Alert
          severity="error"
        >
          {props.props}
        </Alert>
      </Stack>
    </>
  );
};

export default ErrorAlert;
