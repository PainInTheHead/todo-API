import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 50vh;
  border: 2px solid #ff9540;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #ff9540;
  background-color: white;
  font-size: 3vh;
  > span + span {
    margin-left: 10px;
  }
`;