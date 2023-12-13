const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    img1 : {
        type : String,
        required : true,
    },
    img2 : {
        type : String,
        required: true
    },
    img3 : {
        type : String,
        required : true
    },
    img4 : {
        type : String
    },
    img5 : {
        type : String,
    },
    img6 : {
        type : String,
    },
    img7 : {
        type : String,
    },
    img8 : {
        type : String,
    },
    des : {
        type : String,
        required : true,
    },
    color : {
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    productID : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    }
},{timestamps:true,versionKey:false});
const productDetails = mongoose.model("productsdetails",dataSchema);
module.exports = productDetails;