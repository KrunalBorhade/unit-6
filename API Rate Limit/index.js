const express = require('express');
const cors = require('cors');
require("dotenv").config()
const rateLimit = require('express-rate-limit');

const PORT = process.env.PORT || 5000

const app = express()

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max:10
})

app.use(limiter)
app.set('trust proxy',1)

app.use("/api",require("./routes"))

app.use(cors())

app.listen(PORT,()=>{
    console.log("Server running on PORT 5000")
})