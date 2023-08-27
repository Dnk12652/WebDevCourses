const jwt = require("jsonwebtoken")


const validateToken = (req, res, next) => {
  let token 
  const authheader = req.headers.Authorization || req.headers.authorization;
  if (authheader.startsWith("Bearer")) {
    token = authheader.split(" ")[1]
    jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message:"Unauthrized"
        })
        return
      }
      console.log(decoded.user,"data from middle");
      req.user = decoded.user
      next()
    });
    if (!token) {
       res.status(401).json({
         message: "Unauthrized",
       });
      return
    }
  } else {
     res.status(401).json({
       message: "Unauthrized",
     });
    return
  }
}
module.exports = validateToken