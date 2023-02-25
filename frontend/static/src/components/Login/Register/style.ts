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
