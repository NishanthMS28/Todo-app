const express = require("express");
const app = express();
const { createSchema, updateSchema } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// to add/create a todo
app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newTodo = {
    title: title,
    description: description,
    completed: false,
  };

  try {
    createSchema.parse(newTodo);
    await todo.create(newTodo);

    res.json({
      msg: "Todo created",
    });
  } catch (err) {
    res.status(404).json({
      msg: "Invalid inputs",
    });
  }
});

// to show all the todo's
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

// to mark a specific todo as done/completed
app.put("/completed", async (req, res) => {
  const id = req.body.id;

  const newTodo = { id };

  try {
    updateSchema.parse(newTodo);

    const todos = await todo.updateOne(
      {
        _id: id,
      },
      {
        completed: true,
      }
    );

    res.json({
      msg: "Marked as completed",
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      msg: "Invalid inputs",
    });
  }
});

app.listen(3000);
