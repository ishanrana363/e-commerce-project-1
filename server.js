const app = require("./app")
require('dotenv').config()
const port = process.env.PORT
const connectDb = require("./src/Database/database")
app.listen(port,async ()=>{
    console.log(`Server run successfully at http://localhost:${port} `)
    await connectDb()
})