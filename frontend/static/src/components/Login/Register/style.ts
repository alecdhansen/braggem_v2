import { Form } from "react-bootstrap";
import styled from "styled-components";

export const RegisterForm = styled(Form)``;

export const FormGroup = styled(Form.Group).attrs(() => ({
  className: "mb-3",
}))``;

export const FormLabel = styled(Form.Label)``;

export const FormControl = styled(Form.Control)``;

export const FormText = styled(Form.Text)`
  @media (max-width: 768px) {
    font-size: 12px;
    color: rgb(149, 149, 149);
  }
`;

export const ErrorContainer = styled.p`
  display: flex;
  align-items: center;
  color: #ff0033;
  font-size: 12px;
`;

export const RegisterContainer = styled.main`
  margin-top: 10px;
`;

export const GoBackButton = styled.button`
  padding: 4px 52px;
  margin-left: 30px;
  border: none;
  border-radius: 24px;
  background-color: var(--navyblue);
  color: var(--offwhite);
  cursor: pointer;
  font-weight: 500;
  font-size: 30px;
  transition: 0.3s;
  &:hover {
    background-color: #123548;
    transition: 0.3s;
  }
  @media (max-width: 768px) {
    .registergobackbtn {
      padding: 4px 26px;
      margin-left: 0px;
      margin-bottom: 20px;
    }
  }
`;
export const LoginContainer = styled.div.attrs(() => ({
  className: "col-md-4 offset-md-4 col-10 offset-1",
}))`
  background-color: var(--offwhite);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 3px 2px var(--mainorange);
`;
