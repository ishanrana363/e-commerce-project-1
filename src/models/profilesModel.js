const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    userID : {
        type : mongoose.Types.ObjectId,
        required : true,
    },
    cus_Add : {
        type : String,
        required: true
    },
    cus_City : {
        type : String,
        required : true
    },
    cus_Country : {
        type : String,
        required : true
    },
    cus_Fax : {
        type : String,
        unique : true
    },
    cus_name : {
        type : String,
        required : true
    },
    cus_Phone : {
        type : String,
        required : true
    },
    cus_PostCode : {
        type : String,
        required : true
    },
    cus_State : {
        type : String,
        required : true
    },
    ship_Add : {
        type : String,
        required : true
    },
    ship_City : {
        type : String,
        required : true
    },
    ship_Country : {
        type : String,
        required : true
    },
    ship_Name : {
        type : String,
        required : true
    },
    ship_Phone : {
        type : String,
        required : true,
        unique: true
    },
    ship_PostCode : {
        type : String,
        required : true,
    },
    ship_State : {
        type : String,
        required : true,
    },
},{timestamps:true,versionKey:false})

const profileModel = mongoose.model("profiles",dataSchema)
module.exports = profileModel
