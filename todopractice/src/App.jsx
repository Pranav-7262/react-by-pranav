import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handleAddTodo = () => {
    if (todo.trim().length === 0) {
      alert("Please enter a valid todo");
      return;
    }
    settodos([...todos, { id: Date.now(), todo }]); //this contains array of objects with id and todo(todo text)
    AddLS();
    settodo("");
  };
  const AddLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  useEffect(() => {
    //
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure for delete this todo?")) {
      settodos(todos.filter((todo) => todo.id !== id));
    }
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    settodo(todos.find((todo) => todo.id == id).todo); // this will set the todo to the input field
    console.log("want to update", todos.find((todo) => todo.id == id).todo);
    settodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button onClick={handleAddTodo} disabled={todo.length <= 3}>
        Add todo
      </button>

      <h2>Your todos </h2>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              {item.todo}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              delete
            </button>
            <button
              onClick={(e) => handleEdit(e, item.id)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              edit
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <button style={{ padding: "10px 20px" }} onClick={() => settodos([])}>
          Clear All todos
        </button>
      </div>
    </div>
  );
}

export default App;
