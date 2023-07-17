import axios from "axios";

const handleOpenRazorpay = (order,formData) =>{
    console.log("Open Razorpay ",formData);
    let  options = {
        "key": "rzp_test_Gx0GvcqCgV0D0g",
        "amount": Number(order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Appointment Booking",
        "image": "https://cdn1.vectorstock.com/i/1000x1000/07/65/avatar-money-bill-coin-vector-10810765.jpg",
        "order_id": order.id, 
        "handler": function (response){
            alert('Payment Initiated')
            console.log(response);
            axios({
                method:'post',
                url:'/verifyPayment',
                data:{razorpay : response,user : formData}
            })   //  Sending paymentID,orderID & signature to the server
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
            console.log(response)
    });
      rzp.open();
    }

export default handleOpenRazorpay