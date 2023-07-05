const { model , Schema } = require("mongoose")
const carSpecSchema = new Schema({
    carSeat : {
        type : String,
        required : true,
        unique : true
    },
    carColor : {
        type : String,
        required : true,
        unique : true
    },
    carTransmission : {
        type : String,
        required : true,
        unique : true
    },
    carFuelType : {
        type : String,
        required : true,
        unique : true
    },
})