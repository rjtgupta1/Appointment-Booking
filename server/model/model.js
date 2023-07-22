import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true,
        },
        mobile:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        date:{
            type:String,
            require:true
        },
        orderId:{
            type:String,
            require:true
        },
        paymentId:{
            type:String,
            require:true
        }
},
{
    versionKey:false
})

const booking = mongoose.model('booking',paymentSchema)
export default booking