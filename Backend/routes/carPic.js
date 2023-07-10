const { Router } = require("express")
const router = Router()
const carPic = require("../models/car/carPic")

router.post("/register" , async(req , res) => {
    var { carPhoto } = req.body

    if(!carPhoto){
        return  res.json({
            status : "bad",
            msg : "please upload the picture of the car"
        })
    }

    const carNewPic = await new carPic({
        carPhoto
    })

    const savedCarPic = await carNewPic.save()

    res.json({
        status : "ok haha",
        msg : "the picture of the car is saved successfully haha",
        user : savedCarPic
    })
})

module.exports = router