import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  textDecoration: 'none',
  color:'#1976d2'
}

const Paymentfailed = () => {
  return (
    <>
      <Grid align="center" marginTop="200px">
        <h1>Payment Failed ❌</h1>
        <Link style={style} to={'/'}>Retry Booking Appointment</Link>
      </Grid>
    </>
  )
}

export default Paymentfailed