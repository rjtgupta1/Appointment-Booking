import axios from 'axios'
import handleOpenRazorpay from "./handleOpenRazorpay";

const handleMakePayment = (formData)=>{
    axios.post(`${process.env.REACT_APP_API_URL}/order`)
    .then(res=>{
      console.log("Payment Initiated");
      handleOpenRazorpay(res.data.data,formData);
    })
    .catch(error=>{
      console.log(error);
    })
}

export default handleMakePayment;