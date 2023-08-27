const express = require("express")
const router = express.Router()
const validateToken = require("../middleWare/validateToken");
const {registerUser,loginUser,currentUser}  = require("../controller/userController")


console.log("entered")
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/currentuser",validateToken, currentUser);
module.exports = router