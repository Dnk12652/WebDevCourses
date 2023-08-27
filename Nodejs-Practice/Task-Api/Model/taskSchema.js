const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    is_completed: {
      type: Boolean,
      required: [true, "Please add a is_completed field"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Tasks",taskSchema)