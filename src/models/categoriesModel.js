const mongoose = require("mongoose")
const categoriesSchema = mongoose.Schema({
    categoryName : {
        type : String,
        unique : true,

    },
    categoryImg : {
        type : String,
        unique : true,
    },
},{timestamps:true,versionKey:false})

const categoriesModel = mongoose.model("categories",categoriesSchema)
module.exports = categoriesModel