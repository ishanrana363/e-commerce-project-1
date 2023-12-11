const mongoose = require("mongoose");
const {mongo} = require("mongoose");
const dataSchema = mongoose.Schema({
    userID : {
        type : mongoose.Types.objectId,
        required : true
    },
    payable : {
        type: String,
        required: true
    },
    cus_details : {
        type : String,
        required : true
    },
    ship_details : {
        type : String,
        required : true
    },
    tran_id : {
        type : String,
        required : true
    },
    val_id : {
        type : String,
        required : true,
    },
    delivery_status : {
        type : String,
        required : true
    },
    payment_status : {
        type : String,
        required : true
    },
    total : {
        type : String,
        required : true
    },
    vat : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});
const invoicesModel = mongoose.model("invoices",dataSchema);
module.exports = invoicesModel










