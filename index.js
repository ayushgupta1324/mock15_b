const express = require('express');
const app = express();
app.use(express.json())

const cors = require('cors')
app.use(cors())

const {connection} = require("./configs/db")

require('dotenv').config

const {userRouter} = require("./routes/User.route")

app.get("/",(req,res)=>{
    res.send("HomePage")
})

app.use("/traveller",userRouter)

// -------------------------SERVER--------------------

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server connected to DB")
    } catch (error) {
        console.log("Error is",error.message)
    }
    console.log("Server started at port 8080")
})