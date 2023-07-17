import * as Yup from 'yup'

const Model = Yup.object({
    name:Yup.string().min(3).max(25).required("Please enter your name"),
    mobile:Yup.string().min(10).max(10).required("Please enter your mobile number"),
    email:Yup.string().email().required("Please enter your email"),
    address:Yup.string().required("Please enter your address")
})

export default Model