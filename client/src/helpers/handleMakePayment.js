import axios from 'axios'
import handleOpenRazorpay from "./handleOpenRazorpay";

const handleMakePayment = ()=>{
    axios.post('/order')
    .then(res=>{
      console.log(res.data);
      handleOpenRazorpay(res.data);
    })
    .catch(error=>{
      console.log(error);
    })
}

export default handleMakePayment;