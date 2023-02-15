import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const CurveHead = styled.div.attrs(() => ({
  className: "col-10 offset-1",
}))`
  height: 100px;
  /* here */
  background-color: #30618c;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-style: groove;
  /* here */
  border: 3px solid #20425f;
  border-top: none;
  top: 0;
  z-index: 20;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Circle = styled.div`
  border: 3px solid #05192357;
  border-radius: 50%;
  position: absolute;
  height: 300px;
  width: 300px;
  z-index: 10;
  margin-bottom: 10px;
  /* here */
  background-color: #25374f;
`;
