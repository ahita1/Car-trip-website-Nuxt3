// const { Router } = require("express");
// const router = Router();
// const carSpec = require("../models/car/carSpec");
const { Router }  = require("express")
const router = Router()
const drivers = require("../models/driver/drivers")


router.post("/register" , async (req , res) => {
    try {
       var { driverName ,  driverID , driverPN , driverEmail} = req.body 


       if(!driverName || !driverID || !driverPN || !driverEmail){
        return res.json({
            status : "bad",
            msg : "please enter the field space"
        })
       }
       const newCarDriver = await new drivers({
        driverName ,
          driverID ,
           driverPN ,
            driverEmail
    })

    const savedDriver = await newCarDriver.save()

    res.json({
        status : "ok haha",
        msg : "user saved successfully haha",
        user : savedDriver
    })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router