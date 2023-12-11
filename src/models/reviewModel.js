const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.objectId,
        required : true,
    },
    productID : {
        type: mongoose.Types.objectId,
        required: true
    },
    comments : {
        type : String,
        required : true
    },
    ratings : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});
const reviewModel = mongoose.model("reviews",dataSchema);
module.exports = reviewModel