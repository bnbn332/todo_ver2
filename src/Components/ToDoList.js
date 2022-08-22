// ToDoItemList들을 담아서 보여줄 컴포넌트

import styled from "styled-components";
import ToDoItemList from "./ToDoItemList";
import { useToDoState } from "../ToDoContext";

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
  background: white;
`;

function ToDoList() {
  const todos = useToDoState();

  return (
    <ToDoListBlock>
      {todos.map((todo) => (
        <ToDoItemList
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ToDoListBlock>
  );
}

export default ToDoList;
