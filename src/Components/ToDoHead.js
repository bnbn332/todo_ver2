// 날짜, 요일, 남은 할 일의 개수 표기하는 컴포넌트

import styled from "styled-components";
import { useToDoState } from "../ToDoContext";

const ToDoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0px;
    font-size: 36px;
    color: #fce2db;
  }
  .day {
    margin-top: 4px;
    color: #ff8fb1;
    font-size: 21px;
  }
  .tasks-left {
    color: #b270a2;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function ToDoHead() {
  const todos = useToDoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <ToDoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </ToDoHeadBlock>
  );
}

export default ToDoHead;
