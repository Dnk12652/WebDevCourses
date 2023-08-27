const express = require("express")
const Task = require("../Model/taskSchema")
const taskValidation = require("../Utills/taskFieldValidation");
const taskSchema = require("../Model/taskSchema");

const route = express.Router()


route.get("/", async(req, res) => {
  const task = await Task.find()
  console.log(task)
  res.status(200).json({
    message: "List of task fetched successfully",
    tasks:task
  });
});
route.post("/", async (req, res) => {
  try {
    let task = []
    if (req.body.tasks) {
      const tasks = req.body.tasks
      

      for (let key in tasks) {
        if (taskValidation(tasks[key])) {
           const tasksData = await Task.create(tasks[key]);
           task.push({
             message: "tasks created successfully",
             task: tasksData,
           });
        } else {
         task.push({
            message: "One or more field type is invalid",
            task:tasks[key]
          })
        }

      }
    } else {
      if (taskValidation(req.body)) {
        const taskData = await Task.create(req.body);
        taskresp = {
          message: "task created successfully",
          task: taskData,
        };
        task.push(taskresp);
      } else {
         task.push({
           message: "One or more field type is invalid",
           task: req.body,
         });
      }
      
      
    }

     res.status(200).json({
       data: task,
     });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      messsage:"Internal server error"
    })
  }
});

route.put("/:id", async(req, res) => {
  const {title,is_completed} = req.body
  if (!title, !is_completed) {
    res.status(400).json({
      messsage:"One or More fields required"
    })
    return 
  }
  const taskData = await Task.findById(req.params.id)
  if (taskData) {
    const taskData = await Task.findByIdAndUpdate(req.params.id, { title, is_completed }, { new: true })
    res.status(200).json({
      message: "task updated successfully",
      data:taskData
    })
    return
  } else {
    res.status(400).json({
      message: "With Provided id unable to fetch task ",
      id:req.params.id
    })
    return
  }
});
route.delete("/:id", async(req, res) => {
  const task = await Task.deleteOne({ _id: req.params.id })
  res.status(200).json({
    message: "Provided  task deleted successfully",
  });
});
module.exports = route