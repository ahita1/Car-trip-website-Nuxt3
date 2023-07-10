const { Router } = require("express");
const router = Router();
const carSpec = require("../models/car/carSpec");


//Register route
router.post("/register", async (req, res) => {
  try {
    var { carSeat, carColor, carTransmission , carFuelType} = req.body;

    if (!carSeat || !carColor || !carTransmission || !carFuelType) {
      return res.json({
        status: "bad",
        msg: "please enter the field space ma darling haha ",
      });
    }
    const newCarSpec = await new carSpec({
        carSeat,
        carColor,
        carTransmission ,
        carFuelType 
    });
    const savedCarSpec = await newCarSpec.save();

    res.json({
      status: "ok haha",
      msg: "user saved successfully haha....don't worry the next time u login owgay haha",
      user: savedCarSpec,
    
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;