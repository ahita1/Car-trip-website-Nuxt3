const { model , Schema } = require("mongoose")
const driverSchema = new Schema({
    driverName : {
        type : String,
        required : true,
        unique : true
    },
    driverID : {
        type : String,
        required : true,
        unique : true
    },
    driverPN : {
        type : String,
        required : true,
        unique : true
    },
    driverEmail : {
        type : String,
        required : true,
        unique : true
    },

})


module.exports  =  model("Driver" , driverSchema)

