import styled from "styled-components";

export const MainContainer = styled.main``;

export const WelcomeContainer = styled.div``;

export const WelcomeHeader = styled.h4`
  text-align: center;
  color: var(--offwhite);
  padding: 0px;
  font-family: "Fjalla One", sans-serif;
`;

export const WelcomeText = styled.p`
  font-size: 14px;
  margin-top: 5px;
  font-family: "Fjalla One", sans-serif;
  padding: 0px 20px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  align-items: center;
  font-family: "Bebas Neue";
  font-size: 20px;
  width: 100%;
  height: 105px;
  background-color: var(--navyblue);
  z-index: 30;
  position: sticky;
  top: 5%;
  padding: 0px;
  @media (max-width: 768px) {
    top: 8%;
    padding: 0px;
    justify-content: center;
  }
  @media (max-width: 400px) {
    top: 7%;
    padding: 0px;
    justify-content: flex-end;
  }
`;

export const CardsContainer = styled.div.attrs(() => ({
  className: "col-md-10 offset-md-1 col-12",
}))`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 30px;
  margin-bottom: 150px;
  @media (max-width: 1205px) {
    margin-top: 30px;
    padding: 0px 30px;
  }
`;
