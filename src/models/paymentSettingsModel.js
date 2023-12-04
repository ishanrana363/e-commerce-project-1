const mongoose = require("mongoose");
const dataSchema  = mongoose.Schema({
    store_Id : {
        type : String,
        required : true
    },
    store_Password : {
        type : String,
        required : true
    },
    currency : {
        type : String,
        required : true
    },
    success_url : {
        type : String,
        required : true
    },
    fil_Url : {
        type : String,
        required : true
    },
    cancel_Url : {
        type : String,
        required : true
    },
    ipn_Url : {
        type : String,
        required : true
    },
    init_Url : {
        type : String,
        required : true
    },
},{timestamps:true,versionKey:false})

const paymentSettingModel = mongoose.model("paymentsSetting",dataSchema);
module.exports = paymentSettingModel






























