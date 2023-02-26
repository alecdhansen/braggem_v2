import styled from "styled-components";
import { GameButtonProps } from "../types";

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

export const TeamButton = styled.button.attrs(() => ({
  className: "col-12",
}))<GameButtonProps>`
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  border-radius: 20px;
  border: none;
  background-color: black;
  width: 500px;
  height: 140px;
  color: #000;
  &:disabled {
    color: rgb(114, 114, 114);
  }
  @media (max-width: 1205px) {
    margin-bottom: 30px;
    width: 450px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 75px;
  pointer-events: none;
`;

export const TeamLogoImage = styled.img`
  width: 100%;
`;

export const GameDetailsContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(201, 201, 201);
  width: 100%;
  border-radius: 0px 0px 14px 14px;
  pointer-events: none;
  font-family: "Maven Pro", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TeamCity = styled.div`
  font-size: 18px;
`;

export const WinLoss = styled.div`
  font-size: 12px;
`;

export const PickSubmittedContainer = styled.div``;

export const SubmittedAlert = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgb(22, 124, 22);
  margin-bottom: 6px;
  font-family: "Fjalla One", sans-serif;
  @media (max-width: 1205px) {
    margin: 0px;
  }
  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;
  }
`;

export const SubmitButton = styled.button`
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
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 10px 50px;
    &:disabled {
      pointer-events: none;
      opacity: 0.6;
      padding: 10px 40px;
    }
  }
`;
