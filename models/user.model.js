import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    password_reset: {
        token: { 
            type: String 
        },
        expires: { 
            type: Date 
        }
      }
   
},{timestamps:true})

const User=mongoose.model('User',userSchema)

export default User
