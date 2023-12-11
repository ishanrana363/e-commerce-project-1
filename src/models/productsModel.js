const mongoose =  require("mongoose");
const dataSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    shortDes : {
        type:String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    discount : {
        type : String
    },
    discountPrice : {
        type : String
    },
    image : {
        type : String,
        required : true
    },
    star : {
        type : String
    },
    stock : {
        type : String,
        required : true
    },
    remark : {
        type : String,
        required : true
    },
    categoryID : {
        type : mongoose.Types.objectId,
        required : true
    }
},{timestamps:true,versionKey:false});

const productModel = mongoose.model("products",dataSchema);
module.exports = productModel;
















