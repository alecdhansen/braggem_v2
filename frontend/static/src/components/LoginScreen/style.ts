import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: 100px;
`;

export const LoginContainer = styled.div.attrs(() => ({
  className: "col-md-4 offset-md-4 col-10 offset-1",
}))`
  background-color: var(--offwhite);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 3px 2px var(--mainorange);
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;

export const QuestionContainer = styled.span`
  margin-right: 6px;
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  color: #fff;
`;

export const QuickAccessContainer = styled.div`
  margin-right: 100px;
`;

export const H3 = styled.h3``;

export const H5 = styled.h5``;
