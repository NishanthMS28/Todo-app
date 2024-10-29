/*
Todo {
    title: string,
    description: string,
    compleated: boolean
}
*/
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://NishanthMS28:<**password**>@webdev.vpvky.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
