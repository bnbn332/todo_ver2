//다른 컴포넌트들이 올라갈 템플릿

import styled from "styled-components";

const ToDoTemplateBlock = styled.div`
  width: 512px;
  height: 769px;

  position: relative;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function ToDoTemplate({ children }) {
  return <ToDoTemplateBlock>{children}</ToDoTemplateBlock>;
}
/* children: A컴포넌트사이에 B컴포넌트가 있을 때, A컴포넌트에서 B컴포넌트 내용을 보여주려고 사용*/

export default ToDoTemplate;
