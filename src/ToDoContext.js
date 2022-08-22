import React, { createContext, useContext, useReducer, useRef } from "react";

const initalTodos = [
  {
    id: 1,
    text: "ToDo List ver.2",
    done: false,
  },
  {
    id: 2,
    text: "React",
    done: false,
  },
  {
    id: 3,
    text: "복습하기",
    done: true,
  },
];

/* useReducer를 사용하여 상태를 관리하는 ToDoProvider컴포넌트 */
function ToDoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/* 두개의 Context를 만들어서 dispatch만 필요한 컴포넌트에서 불피요한 렌더링을 방지 */
const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
/* nextId를 위한 Context */
const ToDoNextIdContext = createContext();

export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(ToDoReducer, initalTodos);
  const nextId = useRef(5);
  return (
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        <ToDoNextIdContext.Provider value={nextId}>
          {children}
        </ToDoNextIdContext.Provider>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

/* Hook이 ToDoProvider 컴포넌트 내부에 렌더링 되어 있어야 한다. */
export function useToDoState() {
  const context = useContext(ToDoStateContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useToDoDispatch() {
  const context = useContext(ToDoDispatchContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}

export function useToDoNextId() {
  const context = useContext(ToDoNextIdContext);
  if (!context) {
    throw new Error("Cannot find ToDoProvider");
  }
  return context;
}
