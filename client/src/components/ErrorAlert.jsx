import React,{ useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ErrorAlert = () => {
    const showAlert = {
        width: "20%",
        display: "flex",
        position: "fixed",
        paddingBottom: 5,
        paddingTop: 0,
      };
      const hideAlert = {
        width: "100%",
        display: "none",
      };
      const [displayAlert, setDisplayAlert] = useState(false);
    
      const handleCloseAlert = () => {
        setDisplayAlert(true);
      };
  return (
    <>
      <Stack sx={displayAlert ? hideAlert : showAlert} spacing={2}>
        <Alert
          severity="error"
          onClose={() => {
            handleCloseAlert();
          }}
        >
          This is an error alert — check it out!
        </Alert>
      </Stack>
    </>
  );
};

export default ErrorAlert;
