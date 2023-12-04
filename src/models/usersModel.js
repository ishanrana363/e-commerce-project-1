const mongoose = require("mongoose")
const dataSchema = mongoose.Schema({
    email : {
        type : String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User email required']
    },
    otp:{
        type : String,
        required: true
    }
},{timestamps:true,versionKey:false})



const userModel = mongoose.model("users",dataSchema);
module.exports = userModel


















