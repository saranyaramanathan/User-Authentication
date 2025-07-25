const jwt=require("jsonwebtoken")
const JWT_KEY=process.env.SECRET_KEY;
function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not Aloowed" })
  } else {
    try {
      const payload = jwt.verify(req.headers.authorization, JWT_KEY)
      console.log(payload)
      req.user = payload
      next()
    } catch (error) {
      return res.status(401).json({ message: "Not a valid token" })
    }
  }
}
module.exports={authenticate}