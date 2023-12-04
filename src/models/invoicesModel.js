const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    userID : {
        type : mongoose.Types.objectId,
        required : true
    },
    payable : {
        type: String,
        required: true
    },
    cus_Details : {
        type: String,
        required: true
    },
    ship_Details : {
        type: String,
        required: true
    },
    tran_ID : {
        type: String,
        required: true
    },
    val_ID : {
        type: String,
        required: true
    },
    delivery_Status : {
        type: String,
        required: true
    },
    payment_Status : {
        type: String,
        required: true
    },
    total : {
        type: String,
        required: true
    },
    vat : {
        type: String,
        required: true
    }
},{timestamps:true,versionKey:false});

const invoicesModel = mongoose.model("invoice",dataSchema);
module.exports = invoicesModel;
















