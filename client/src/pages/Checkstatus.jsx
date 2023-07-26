import { Button, Container, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Formik, Form, useFormik } from "formik";
import Box from "@mui/material/Box";
import {React,useState} from "react";
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const initialValues = {
  mobile: "",
  paymentId:''
};

const Checkstatus = () => {
  const [userData,setUserData] = useState([])
  const [showTable,setShowTable] = useState(false)
  const { values, handleChange,handleSubmit } = useFormik({
    initialValues, // initialValues:initialValues
    onSubmit: (values) => {
      axios({
        method:'post',
        url:`${process.env.REACT_APP_API_URL}/check-status`,
        data:{ mobile:values.mobile, paymentId:values.paymentId }
      })
      .then((response)=>{
        setUserData(response.data)
        if(response.data.length){
          setShowTable(true)
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    },
  });

  const hideTable = {
    display:'none'
  }

  const unHideTable = {
    display:'flex'
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1 style={{ textAlign: "center" }}>Check Status</h1>
          <Formik>
            {(props) => (
              <Form onSubmit={handleSubmit}>
                <Box
                  // component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "18ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    name="mobile"
                    value={values.name}
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <span>or</span>
                  <TextField
                    id="outlined-basic"
                    label="Payment Id"
                    name="paymentId"
                    value={values.paymentId}
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained">
                    Check <SearchOutlinedIcon />
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        <Box sx={ showTable ? unHideTable : hideTable }>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{background:'#f5f7f6',}}>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Payment Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          userData.length ?
          userData.map((data) => (
            <TableRow
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.mobile}</TableCell>
              <TableCell align="right">{data.date}</TableCell>
              <TableCell align="right">{data.paymentId}</TableCell>
            </TableRow>
          ))
        : console.log("No Data Found")
        }
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default Checkstatus;
