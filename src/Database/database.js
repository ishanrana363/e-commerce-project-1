const mongoose = require("mongoose")
require("dotenv").config()

const dbPort = process.env.MONGO_URL

const connectDb = () => {
  try{
      mongoose.connect(dbPort)
      console.log("Db is connect ")
  }catch (e){
      console.log("Db is not connect ")
  }
}

module.exports = connectDb