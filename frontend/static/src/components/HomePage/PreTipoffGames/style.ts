import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--offwhite);
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 30px;
  @media (min-width: 1128px) and (max-width: 1205px) {
    height: 375px;
  }
  @media (max-width: 1205px) {
    height: 550px;
    margin-bottom: 60px;
  }
  @media (min-width: 768px) and (max-width: 1128px) {
    height: 550px;
  }
  @media (max-width: 768px) {
    height: 525px;
  }
`;

export const GameStatusHeader = styled.h4`
  display: flex;
  justify-content: center;
  margin: 25px 0px 2px 0px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  @media (min-width: 1128px) and (max-width: 1205px) {
    margin-top: 30px;
  }
  @media (max-width: 1205px) {
    margin: 0px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const GameLocationHeader = styled.h5`
  font-size: 12px;
  margin: 2px 0px 25px 0px;
  @media (max-width: 1205px) {
    margin-bottom: 26px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SpanBar = styled.div`
  width: 95%;
  border: 0.5px solid rgba(0, 0, 0, 0.193);
  margin-bottom: 20px;
`;

export const GameButtonContainer = styled.div.attrs(() => ({
  className: "row",
}))`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1205px) {
    height: 325px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const TeamButton = styled.button``;
