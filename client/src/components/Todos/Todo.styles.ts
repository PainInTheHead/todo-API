import styled from "styled-components";
export interface ComponentProps {
  done: boolean;
  isEdit: boolean;
}

export const TodosWrap = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
`;

export const TodoWrapper = styled.li<ComponentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffb173;
  position: relative;
  list-style-type: none;
  width: 100%;
  box-shadow: 1px 5px 6px 0 #ff9540;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px auto;
  background-color: white;

  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  box-shadow: ${(props) =>
    props.done
      ? "1px 5px 1px 0 #c2ffbc"
      : props.isEdit
      ? "1px 5px 1px 0 #4681ee"
      : ""};

  .todo-wrapper {
    display: flex;
    align-items: center;
    width: 80%;
  }

  input {
    font-size: 20px;
    color: #ff7100;
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
  }

  button {
    position: relative;
    display: inline-block;
    width: 3vh;
    height: 3vh;
    height: 3vh;
    margin-right: 4px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #ffffff;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
  }
`;
