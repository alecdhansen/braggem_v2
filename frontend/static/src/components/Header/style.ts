import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  /* height: 100vh; */
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
  border-top: 0px;
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

export const HeaderTitle = styled.h2`
  margin-bottom: 0px;
  font-family: "Bowlby One SC", cursive;
  font-size: 80px;
  text-shadow: 5px 5px 2px var(--navyblue);
  color: rgb(236, 236, 236);
  z-index: 20;
  @media (max-width: 768px) {
    font-size: 65px;
    font-stretch: expanded;
  }
  @media (max-width: 400px) {
    font-size: 65px;
    font-stretch: expanded;
  }
`;

export const CourtLogoContainer = styled.div`
  position: absolute;
  z-index: 50;
  width: 150px;
  right: 18%;
  top: -75%;
  opacity: 0.8;
  @media (max-width: 1080px) {
    display: none;
  }
  & > img {
    width: 100%;
  }
`;
