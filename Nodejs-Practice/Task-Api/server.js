const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const taskRoutes = require("./Routes/taskRoutes")

const app = express()

const port = process.env.PORT || 8081

const connection = async() => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(connect.connection.host, connect.connection.name,"db connected");
  } catch (error) {
    console.log(error)   
}
}

connection()

app.use(express.json());
app.use("/api/tasks",taskRoutes)


app.listen(port, () => {
  console.log("Server started port: ", port);
});

