const mongoose=require('mongoose');
const validator=require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
        }
        }
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})




//now we need to create a collections

const visitor = new mongoose.model("Visitor",userSchema);

module.exports = visitor; 