const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    des : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
},{timestamps:true,versionKey:false})

const productSlider = mongoose.model("productSlider",dataSchema)
module.exports = productSlider












