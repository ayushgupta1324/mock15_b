const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    destination:{type:String,required:true},
    travellers:{type:Number,required:true},
    budget:{type:Number,required:true},
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = {
    UserModel
}