import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from 'crypto'

dotenv.config();

const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = (req, res) => {
  let options = {
    amount: 1000 * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "Order_receipt_id_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    } else {
      return res.status(200).json({ message: "Order Created", data: order });
    }
  });
};

const verifyPayment = (req, res) => {
  //  Getting payment_id, order_id, signature & user data from client side
  let body_response = req.body.razorpay.razorpay_order_id + '|' + req.body.razorpay.razorpay_payment_id
  // generating signature by hashing the payment credentials
  let generated_signature = crypto.createHmac('sha256',KEY_SECRET).update(body_response.toString()).digest('hex')
  if(generated_signature===req.body.razorpay.razorpay_signature){
    res.status(200).json({message:'Payment Successful'})
    console.log('Payment Successful')
  }else{
    res.status(500).json({message:'Payment failed'})
    console.log('Payment Failed');
  }
};

export { createOrder, verifyPayment };
