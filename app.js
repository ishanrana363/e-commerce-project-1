const express = require("express")
const path = require("path");
const app = express()

// Security Middleware library Import

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require('cors');
const morgan = require("morgan")


// Security Middleware library Implement

app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())
app.use(morgan("dev"))


const limit = rateLimit(
    {
        windowMs : 15*60*10000,
        max : 3000
    }
)

app.use(limit)

app.use(express.static("client/dist"))


// Add React Front-End Routing

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})





module.exports = app







































































