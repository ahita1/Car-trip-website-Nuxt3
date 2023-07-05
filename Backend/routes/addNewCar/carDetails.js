const { Router } = require("express");
const router = Router();
const carDetails = require("../models/car/carDetail");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//Register route
router.post("/register", async (req, res) => {
  console.log(req.params);
  try {
    var { carName, carID, carType , carModel , carYear , carLPN} = req.body;

    if (!carName || !carID || !carType || !carModel || !carYear || !carLPN) {
      return res.json({
        status: "bad",
        msg: "please enter the field space ma darling haha ",
      });
    }

    // var Username = username.trim().toLowerCase();
    // var Password = password.trim().toLowerCase();

    // if (Username.length < 4) {
    //   return res.json({
    //     status: "bad",
    //     msg: "sorry username length can't be is less than 4 ",
    //   });
    // }

    // if (Username.length > 20) {
    //   return res.json({
    //     status: "bad",
    //     msg: "sorry ahhhh.....username  length cannot be greater than 20 characters",
    //   });
    // }

    // if (Password.length < 8) {
    //   return res.json({
    //     status: "bad",
    //     msg: "Ahhh...sorry password length cannot be lessthan 5",
    //   });
    // }
    const existCar = await carDetail.findOne({ carID });
    if (existCar) {
      return res.json({
        status: "bad",
        msg: "Ahhhh....username Already exists",
      });
    }
    // const hashedPass = await bcrypt.hash(Password, 10);
    const newCar = await new carDetail({
      carName,
      carID,
      carType ,
      carModel , 
      carYear ,
      carLPN
    });
    const savedCar = await newCar.save();
    // const token = await jwt.sign({ user: existCar }, "tokensecret");

    // console.log(user);

    res.json({
      status: "ok haha",
      msg: "user saved successfully haha....don't worry the next time u login owgay haha",
      user: savedCar,
      // token,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// login routes haha
// router.post("/login", async (req, res) => {
//   try {
//     var { username, password } = req.body;

//     if (!username || !password) {
//       return res.json({
//         status: "bad",
//         msg: "please enter the field space ma darling haha",
//       });
//     }

//     const existUser = await User.findOne({ username });
//     if (!existUser) {
//       return res.json({
//         status: "bad",
//         msg: "username doesn't exist nigga haha instead click the signUp button and register there",
//       });
//     }
//     const comparedPass = await bcrypt.compare(password, existUser.password);
//     if (!comparedPass) {
//       return res.json({
//         status: "bad",
//         msg: "incorrect password nigga haha....try to remember or click the forgot password button to retrieve your account!!!",
//       });
//     }
//     const token = await jwt.sign({ user: existUser }, "tokensecret");
//     // const decodedToken = await jwt.decode(
//     //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NGI4NmExOGFiZGUyY2YwNTcwY2EwYyIsInVzZXJuYW1lIjoiZ2FtbWUiLCJwYXNzd29yZCI6IiQyYiQxMCRrQlVDMUkvV2pkMjQ1eFIvUUhzZXVPSTZQcUpkczVCaE4wYXVvNWdKSGU0aWtBYzZjbkhUSyIsImNyZWF0ZWRBdCI6IjIwMjMtMDQtMjhUMDg6NDE6MDUuMzQ5WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDQtMjhUMDg6NDE6MDUuMzQ5WiIsIl9fdiI6MH0sImlhdCI6MTY4MjY4MTI3Mn0.cO5fW5XaP7oYGCGdbAuW4qeaWseVPNryVecFjpKlQHA"
//     // );
//     // console.log(decodedToken);  
//     res.json({
//       status: "ok haha",
//       msg: "you loggen in successfully haha....enjoy it haha",
//       user: existUser,
//       token,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// Admin login
// router.post('admin' , async (req , res) => {
//   try {
//     const { username , password } = req.body
//     if( !username || !password){
//       return res.json({
//         status : 'bad', msg : 'incorrect username and password' 
//       })
//     }
//     if( !username !== "ahita"){
//       return res.json({
//         status : 'bad', msg : 'incorrect username ' 
//       })
//     }
//     if(password !== "72442686"){
//       return res.json({
//         status : 'bad', msg : 'incorrect password' 
//       })
//     }
//     if( !username || !password){
//       return res.json({
//         status : 'bad', msg : 'hey lol haha ' 
//       })
//     }

//     const token = jwt.sign({user : {username , password}} , tokensecret)

//     res.json({status : 'ok'  , msg : 'token checked haha'} , token)
//   } catch (error) {
//     console.log(error.message);
//   }
// })
module.exports = router;