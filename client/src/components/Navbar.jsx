import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1,marginBottom:'45px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Appointment
          </Typography>
        <Button variant="contained" color="primary"  sx={{color:'#fff',fontFamily:'Arial',textTransform: 'none'}}>Check Status</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar