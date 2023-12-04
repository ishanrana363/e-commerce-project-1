const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    userID : {
        type : mongoose.Types.objectId,
        required : true
    },
    productID : {
        type: mongoose.Types.objectId,
        required: true
    },
    description:{
        type : String,
        required : true,
    },
    rating : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});


const reviewModel = mongoose.model("review",dataSchema);
module.exports = reviewModel






