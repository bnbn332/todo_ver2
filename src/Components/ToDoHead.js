// 날짜, 요일, 남은 할 일의 개수 표기하는 컴포넌트

import styled from "styled-components";
import Calendar from "./Calender";

const ToDoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0px;
    font-size: 36px;
    color: #cfffcf;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function ToDoHead() {
  return (
    <ToDoHeadBlock>
      <h1>
        <Calendar />
      </h1>
      <div className="tasks-left">할 일 개수</div>
    </ToDoHeadBlock>
  );
}

export default ToDoHead;
