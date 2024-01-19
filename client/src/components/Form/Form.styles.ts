import styled from "styled-components";



export const FormWrapper = styled.form`
 .input-con{
  display: flex;
  width: 100%;
  border: 2px solid #ff7100;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  background-color: #ffffff;
 }

 .form-input{
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
 }

 .btn-input-icon{
  position: relative;
  display: inline-block;
  width: 3vh;
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
`