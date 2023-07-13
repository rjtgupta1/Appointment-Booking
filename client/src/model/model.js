import * as Yup from 'yup'

const Model = Yup.object({
    name:Yup.string().min(3).max(25).required("Please enter your name"),
    mobile:Yup.string().min(10).max(10).required("Please enter your mobile number"),
    address:Yup.string().min(5).required("Please enter your address"),
    pincode:Yup.string().min(6).max(6).required("Please enter your pincode ")
})

export default Model