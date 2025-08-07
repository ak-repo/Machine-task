import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export const todos = todoSlice.reducer;
