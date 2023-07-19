import axios from "axios";

const handleOpenRazorpay = (order,formData) =>{
    console.log("Opening Razorpay...");
    let  options = {
        "key": process.env.REACT_APP_KEY_ID,
        "amount": Number(order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Appointment Booking",
        "image": "https://cdn1.vectorstock.com/i/1000x1000/07/65/avatar-money-bill-coin-vector-10810765.jpg",
        "order_id": order.id, 
        "handler": function (response){
            axios({
                method:'post',
                url:`${process.env.REACT_APP_API_URL}/verifyPayment`,
                data:{razorpay : response,user : formData}
            })   //  Sending paymentID,orderID,signature & form data to the server
        },
        "prefill": {
            "name": formData.name,
            "email": formData.email,
            "contact": formData.mobile
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#1976d2"
        }
    };
    let rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response){
            alert(response.error.description);
    });
      rzp.open();
    }

export default handleOpenRazorpay