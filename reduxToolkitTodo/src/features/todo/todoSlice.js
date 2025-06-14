import { createSlice, nanoid } from "@reduxjs/toolkit"; //import createSlice from redux toolkit
//nanoid is used to generate unique ids for todos

const initialState = {
  //state of the todo slice , initial state
  todos: [{ id: 1, text: "hello pranav" }],
};
export const todoSlice = createSlice({
  //create a slice of the store
  //createSlice takes an object with the name, initialState, and reducers
  name: "todo",
  initialState,
  reducers: {
    //it contains the reducers for the slice , used to update the state
    addTodo: (state, action) => {
      //action is the payload passed from the component
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //push the new todo to the todos array
    },
    removeTodo: (state, action) => {
      //action.payload is the id of the todo to be removed
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //filter the todos array to remove the todo with the given id
      //action.payload is the id of the todo to be removed
    },
    // updateTodo : (state, action) => {
    //   //action.payload is the updated todo object , it is a todo object with the same id as the todo to be updated
    //   const { id, text } = action.payload;
    //   state.todos = state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    //   //map through the todos array and update the todo with the given id

    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //export the actions to be used in the components
export default todoSlice.reducer; //export the reducer to be used in the store
