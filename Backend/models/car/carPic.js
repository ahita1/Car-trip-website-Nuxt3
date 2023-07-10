const { model , Schema } = require("mongoose")
const carPicSchema = new Schema({
    carPhoto : {
        type : String,
        required : true,
        unique : true
    },
})
module.exports  =  model("car/carPic" , carPicSchema)