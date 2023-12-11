const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    userID : {
        type : mongoose.Types.objectId,
        required : true
    },
    invoiceID : {
        type : mongoose.Types.objectId,
        required: true
    },
    productID : {
        type : mongoose.Types.objectId,
        required : true
    },
    qty : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true,
    },
    color : {
        type : String,
        required : true
    },
    size : {
        type : String
    }
},{timestamps:true,versionKey:false});
const invoiceProductModel = mongoose.model("invoiceProducts",dataSchema);
module.exports = invoiceProductModel