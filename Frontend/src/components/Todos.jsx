import "./Todos.css";

//you get these todos from the backend
function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h2 className="heading">{todo.title}</h2>
            <h3 className="subHeading">{todo.description}</h3>
            <button>
              {todo.completed == true ? "Completed" : "Mark as compleate"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
