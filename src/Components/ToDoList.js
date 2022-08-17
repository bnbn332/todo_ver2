// ToDoItemList들을 담아서 보여줄 컴포넌트

import styled from "styled-components";
import ToDoItemList from "./ToDoItemList";

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
  background: white;
`;

function ToDoList() {
  return (
    <ToDoListBlock>
      <ToDoItemList text="Todo-List ver.2" done={false} />
      <ToDoItemList text="리액트" done={true} />
    </ToDoListBlock>
  );
}

export default ToDoList;
