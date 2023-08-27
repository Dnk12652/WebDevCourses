const taskValidation = (obj) => {
  isTitle = false
  isCompleted = false
  console.log(obj)
  console.log(typeof obj.title, typeof obj.is_completed);
  if (typeof obj.title === "string") {
    isTitle = true
  }
  if (typeof obj.is_completed === "boolean") {
   isCompleted = true;
  }
  return isTitle && isCompleted
}
module.exports = taskValidation