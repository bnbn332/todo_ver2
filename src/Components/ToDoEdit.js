import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useToDoDispatch, useToDoNextId } from "../ToDoContext";

const EditFormPositioner = styled.div`
  width: 100%;
  right: 100;
  bottom: 0px;
  left: 0px;
  position: absolute;
`;

const EditForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Edit = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  background: #38d9a9;
  color: white;
  border: 2px solid #38d9a9;
  margin: auto;
`;

function ToDoEdit() {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");

  const onClick = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      {open && (
        <EditFormPositioner>
          <EditForm>
            <Edit
              autoFocus
              placeholder="할 일을 수정 후 , Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
            <Button onClick={onClick}>취소</Button>
          </EditForm>
        </EditFormPositioner>
      )}
    </>
  );
}

export default ToDoEdit;
