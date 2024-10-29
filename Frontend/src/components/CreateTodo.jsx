import { useState } from "react";
import "./CreateTodo.css";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function AddingTodo() {
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    alert("Todo added");

    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <br />
      <input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <br />
      <br />
      <button onClick={AddingTodo}>Add Todo</button>
    </div>
  );
}

export default CreateTodo;
