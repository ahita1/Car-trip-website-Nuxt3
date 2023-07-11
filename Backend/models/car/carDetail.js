const { model , Schema } = require("mongoose")
const carDetailSchema = new Schema({
    carName : {
        type : String,
        required : true,
    },
    carID : {
        type : String,
        required : true,
        unique : true
    },
    carType : {
        type : String,
        required : true,
       
    },
    carModel : {
        type : String,
        required : true,
    },
    carYear : {
        type : String,
        required : true, 
    },
    carLPN : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports  =  model("car/carDetail" , carDetailSchema)