import { createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

type TodoState = Todo[];

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo(state, action) {
      const nextId = state.length
        ? Math.max(...state.map((item) => item.id)) + 1
        : 1;
      state.push({ id: nextId, text: action.payload, isDone: false });
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
