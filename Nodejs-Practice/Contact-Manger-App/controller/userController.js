const User = require("../models/userModel")
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const currentUser = (req, res) => {
  res.status(200).json({
    message: "currentuser",
  })
}
const registerUser = async (req, res) => {

  try {
    const { username, email, password } = req.body;
    if (!username  || !email || !password) {
       res.status(200).json({
         message: "one or more fields are not valid",
       });
      return
    }
    const isEmail = validator.validate(email)
    if (!isEmail) {
       res.status(200).json({
         message: "Please provide valid email id",
       });
      return
    } 
    if (password.length < 5 || username.length < 3) {
       res.status(200).json({
         message: "Please enter password must be 5 or username must be 3 characters",
         
       });
      return
    }


    const validUser = await User.find({ email });
    console.log(typeof(validUser),validUser=== [],validUser==={},validUser)
    console.log("hello");

    if(validUser.length  === 0){
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const registeredData = await User.create({
        email,
        password: hashedPassword,
        username,
      });
      res.status(201).json({
        message: "user registered",
        email: email,
      });
    } else {
      res.status(201).json({
        message: "User email id already registerd",
        email: email,
      });
    }

  } catch(error) {
    console.log(error)
  }  
}
const loginUser = async(req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(200).json({
      message:"Please provide email or password"
    })
    return
  }
  const isEmail = validator.validate(email);
  if (!isEmail) {
    res.status(200).json({
      message: "Please provide valid email id",
    });
    return;
  }
  if (password.length < 5 ) {
    res.status(200).json({
      message:
        "Please enter password must be 5 characters",
    });
    return;
  }
  const user = await User.findOne({ email })
  if (user && bcrypt.compare(password, user.password)) {
    const token = await jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.SECRETE_KEY,
      {expiresIn:"15m"}
    );
    res.status(200).json({
      token:token
    })
  } else {
      res.status(401).json({
        message: " Please Enter valid password",
      });
  }
  
}
module.exports = {registerUser,currentUser,loginUser}