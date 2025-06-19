import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    console.log("todostrong : ", todostring);
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const AddLS = () => {
    // console.log("Adding to Local Storage");
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleAdd = () => {
    setTodos([...todos, { id: nanoid(), todo, isCompleted: false }]);
    setTodo("");
    AddLS();
  };
  const handleCheckbox = (e) => {
    // This function will handle the checkbox click event
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    AddLS();
  };
  const handleEdit = (e, id) => {
    setTodo(todos.find((todo) => todo.id === id).todo); // this will set the todo to the input field
    console.log("edit todo: ", todos.find((todo) => todo.id === id).todo);
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.id !== id)); //this will remove the todo from the list
    console.log("todos after edit : ", todos);
    AddLS();
  };

  const handleDelete = (e, id) => {
    alert("Are you sure you want to delete this todo?");
    console.log("delete id : ", id);
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Navbar />
      <div className="bg-violet-400 min-h-[80vh] py-8 px-4 flex justify-center items-start">
        <div className="w-full max-w-3xl bg-white/70 p-6 rounded-xl shadow-md text-black">
          <h1 className="font-bold text-center text-3xl mb-6">
            iTask - Manage your todos at one place
          </h1>

          {/* Add Todo Section */}
          <div className="addtodo mb-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Add Todos</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
              <input
                type="text"
                value={todo}
                className="bg-white py-2 px-3 rounded-lg w-full sm:w-2/3"
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter your task..."
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-violet-300 hover:bg-violet-800 hover:text-white px-4 py-2 rounded-lg transition cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>

          {/* Show Finished Checkbox */}
          <div className="flex items-center mb-4">
            <input
              className="mr-2"
              id="show"
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            <label htmlFor="show" className="text-sm sm:text-base">
              Show Finished
            </label>
          </div>

          <div className="h-[1px] bg-black opacity-20 w-full mx-auto my-4"></div>

          {/* Todos List */}
          <h2 className="text-xl font-semibold mb-3">Your Todos</h2>
          <div className="todos space-y-3">
            {todos.length === 0 && (
              <div className="text-center text-gray-700">No Todos</div>
            )}
            {todos.map((todo) => {
              return (
                (showFinished || !todo.isCompleted) && (
                  <div
                    key={todo.id}
                    className="todo flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-2 sm:mb-0">
                      <input
                        type="checkbox"
                        name={todo.id}
                        checked={todo.isCompleted}
                        onChange={handleCheckbox}
                      />
                      <span
                        className={`text-base ${
                          todo.isCompleted ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {todo.todo}
                      </span>
                    </div>

                    <div className="buttons flex gap-2">
                      <button
                        onClick={(e) => handleEdit(e, todo.id)}
                        className="bg-violet-300 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition cursor-pointer"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={(e) => handleDelete(e, todo.id)}
                        className="bg-violet-300 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition cursor-pointer"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
