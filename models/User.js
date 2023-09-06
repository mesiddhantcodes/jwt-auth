var mongoose=require('mongoose');

var { isEmail }=require('validator');
const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please enter the email'],
        unique:true,
        lowercase:true,
        validate:[isEmail ,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter the password'],
        minlength:[6,'Minimum password length is 6 character']
    },
});

const User=mongoose.model('user',UserSchema)
module.exports=User