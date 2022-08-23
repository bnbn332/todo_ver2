// 할 일 항목들을 담는 컴포넌트
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdModeEditOutline } from "react-icons/md";
/* react-icons에서 완료,삭제 아이콘 사용 */
import { useToDoDispatch } from "../ToDoContext";
import ToDoEdit from "./ToDoEdit";
/* dispatch를 통해 토글 기능과 삭제 기능 구현 */

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #b1d7b4;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Edit} {
      display: initial;
    }
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function ToDoItemList({ id, done, text }) {
  const dispatch = useToDoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  const [edit, setEdit] = useState(false);
  const onClick = () => setEdit(!edit);
  console.log(edit);
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      {edit && <ToDoEdit />}
      <Edit onClick={onClick} edit={edit}>
        <MdModeEditOutline />
      </Edit>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(ToDoItemList);
/* React.memo로 리렌더링 방지 성능 최적화 */
