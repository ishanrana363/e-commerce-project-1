const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'User email address required']
    },
    otp : {
        type : String,
        required: true
    }
}, {timestamps:true,versionKey:false});
const userModel = mongoose.model("users",dataSchema);
module.exports = userModel;