import styled from "styled-components";

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  button {
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 50%;
    border: none;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    background: #ffb173;
    box-shadow: 0 5px 0 #ff9540;
    margin: 0 5px;

    &:hover {
      background: #ff9540;
      box-shadow: none;
      position: relative;
      top: 5px;
    }
  }
`;

