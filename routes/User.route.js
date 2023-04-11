const express = require('express')

const app = express()

const userRouter = express.Router()

const {UserModel} = require("../model/Usermodel")

app.use(express.json())


// -----------------CREATE USER DATA--------------------

userRouter.post("/postdata",async(req,res)=>{
    const postData = req.body
    try {
        const userData = new UserModel(postData)
        await userData.save()
        res.send(userData)
    } catch (error) {
        res.send({"msg":error.message})
    }
})

userRouter.get("/getdata", async(req,res)=>{
    try {
        const userData = await UserModel.find();
        res.send(userData)
    } catch (error) {
        res.send({"msg":error.message})
    }
})

// userRouter.get("/getdata/asc", async(req,res)=>{
    
//     try {
//         const userData = await UserModel.find().sort({budget:1});
//         res.send(userData)
//     } catch (error) {
//         res.send({"msg":error.message})
//     }
// })


userRouter.get("/getdata/sort", async(req,res)=>{
    
    try {        
        const userData = await UserModel.find().sort({budget:req.query.budget});
        res.send(userData)
    } catch (error) {
        res.send({"msg":error.message})
    }
})


userRouter.get("/getdata/:destination", async(req,res)=>{
    
    try {    
        const destination = req.params.destination    
        const userData = await UserModel.find({destination:destination});
        res.send(userData)
    } catch (error) {
        res.send({"msg":error.message})
    }
})



module.exports = {
    userRouter
}