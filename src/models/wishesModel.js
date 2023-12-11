const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    productID : {
        type : mongoose.Types.objectId,
        required : true
    },
    userID : {
        type: mongoose.Types.objectId,
        required: true
    }
},{timestamps:true,versionKey:false})
const wisheModel = mongoose.model("wishes",dataSchema);
module.exports = wisheModel