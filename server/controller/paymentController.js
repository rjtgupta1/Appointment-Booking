import dotenv from 'dotenv'
import Razorpay from "razorpay";

dotenv.config()

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = () =>{
  let options = {
    amount: 100000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "Order_receipt_id_11"
  };
  instance.orders.create(options, function(err, order) {
    if(err){
      console.log('Order creation failed ',err);
    }else{
      console.log('Order Details :',order);
    }
  });
}

export default createOrder