import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 4px 52px;
  margin: 10px 0px 10px 0px;
  border: none;
  border-radius: 24px;
  background-color: var(--navyblue);
  color: var(--offwhite);
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    background-color: #123548;
    transition: 0.3s;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
    padding: 4px 40px;
    transition: 0.3s;
  }
  @media (max-width: 768px) {
    &:disabled {
      pointer-events: none;
      opacity: 0.6;
      padding: 10px 40px;
      transition: 0.3s;
    }
  }
`;
