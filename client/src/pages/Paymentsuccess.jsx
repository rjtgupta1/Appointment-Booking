import { Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

const style = {
  textDecoration: 'none',
  color:'#1976d2'
}

const Paymentsuccess = () => {
  const param = useParams();
  const transactionId = param.paymentId;
  return (
    <>
      <Grid align="center" marginTop="200px">
        <h1>Payment Successful 🎉</h1>
        <h5>Transaction id : {transactionId} </h5>
        <Link style={style} to={'/'}>Go to Homepage</Link>
      </Grid>
    </>
  );
};

export default Paymentsuccess;
