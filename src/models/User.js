const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    //Create an object to add different params eg.a required field
    username:{type:String,default:null},
    //unique=true is to prevent registering two similar email addresses
    email:{type:String,unique:true},
    password:{type:String},
    token:{type:String}

});

module.exports = model('user', userSchema);