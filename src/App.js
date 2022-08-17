import { createGlobalStyle } from "styled-components"; /*글로벌 스타일 추가*/
import ToDoTemplate from "./Components/ToDoTemplate";
import ToDoHead from "./Components/ToDoHead";
import ToDoList from "./Components/ToDoList";
import ToDoCreate from "./Components/ToDoCreate";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo-List ver.2",
    },
  ]);
  return (
    <div>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoTemplate>
    </div>
  );
}

export default App;
