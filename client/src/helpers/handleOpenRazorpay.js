const handleOpenRazorpay = async (order) =>{
    let  options = {
        "key": "rzp_test_Gx0GvcqCgV0D0g",
        "amount": "100000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Appointment Booking",
        "image": "https://cdn1.vectorstock.com/i/1000x1000/07/65/avatar-money-bill-coin-vector-10810765.jpg",
        "order_id": order.id, 
        "handler": function (response){
            alert('Payment Successful 🎉')
            console.log(response);
        },
        "prefill": {
            "name": "Rajat Gupta",
            "email": "imrjtgupta@gmail.com",
            "contact": "9565679102"
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
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
      rzp.open();
    }

export default handleOpenRazorpay