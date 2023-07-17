import axios from 'axios'
import handleOpenRazorpay from "./handleOpenRazorpay";

const handleMakePayment = (formData)=>{
    axios.post('/order')
    .then(res=>{
      // console.log(res.data.data);
      handleOpenRazorpay(res.data.data,formData);
    })
    .catch(error=>{
      console.log(error);
    })
}

export default handleMakePayment;