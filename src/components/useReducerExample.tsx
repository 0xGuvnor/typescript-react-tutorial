import React, { useReducer } from "react";
import { Todo } from "../model";

type Actions =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
  }
};

const useReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return <div>useReducerExample</div>;
};

export default useReducerExample;
