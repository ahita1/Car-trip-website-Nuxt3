const { model , Schema } = require("mongoose")
const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    userPassword : {
        type : String,
        required : true,
        unique : true
    },
    userPN : {
        type : String,
        required : true,
        unique : true
    },
    userEmail : {
        type : String,
        required : true,
        unique : true
    }
})


module.exports  =  model("User" , userShema)

