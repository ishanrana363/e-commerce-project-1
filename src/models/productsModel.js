const mongoose = require("mongoose")
const {Mongoose, Mongoose} = require("mongoose");
const dataSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    shortDes : {
        type : String,
        required: true
    },
    price : {
        type : String,
        required : true,
    },discount: {
        type : Boolean,
    },
    image : {
        type : String,
        required : true,
    },
    star : {
        type : String,
    },
    stock : {
        type : Boolean,
    },
    remark : {
        type : Boolean
    },
    categoryID : {
        type : Mongoose.Types.ObjectId,
        required : true
    },
    brandID : {
        type : Mongoose.Types.ObjectId,
        required : true
    }

},{timestamps:true,versionKey:false})

const productModels = mongoose.model("products",dataSchema)
module.exports = productModels





















