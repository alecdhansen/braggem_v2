import { Form } from "react-bootstrap";
import styled from "styled-components";

export const LoginForm = styled(Form)``;

export const FormGroup = styled(Form.Group).attrs(() => ({
  className: "mb-3",
}))``;

export const FormLabel = styled(Form.Label)``;

export const FormControl = styled(Form.Control)``;

export const ErrorContainer = styled.p`
  display: flex;
  align-items: center;
  color: #ff0033;
  font-size: 12px;
`;
