const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const contactroutes = require("./routes/contactroutes")
const userRoutes =require("./routes/userRoutes")
const Mongoose = require("mongoose")
const port = process.env.PORT || 8080


const connection =async () => {
  try {
      const connect = await Mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(
        connect.connection.host,
        connect.connection.name,
        "db connected"
      );
    
  } catch (error) {
    console.log(error)
  }

}

connection();

app.use(express.json());
app.use("/api/contacts", contactroutes);
app.use("/api/user", userRoutes);
 
app.listen(port, () => {
  console.log(`server running on ${port}`)
})