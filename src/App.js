import { createGlobalStyle } from "styled-components"; /*글로벌 스타일 추가*/
import ToDoTemplate from "./Components/ToDoTemplate";
import ToDoHead from "./Components/ToDoHead";
import ToDoList from "./Components/ToDoList";
import ToDoCreate from "./Components/ToDoCreate";
import { ToDoProvider } from "./ToDoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <ToDoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoTemplate>
    </ToDoProvider>
  );
}

export default App;
