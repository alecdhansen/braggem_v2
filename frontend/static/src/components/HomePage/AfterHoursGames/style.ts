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
    height: 480px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div``;

export const Status = styled.h4`
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

export const Location = styled.h5`
  font-size: 12px;
  margin-bottom: 30px;
`;

export const AfterHoursStatus = styled.h4`
  display: flex;
  justify-content: center;
  margin: 12px 0px 0px 0px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  @media (min-width: 1128px) and (max-width: 1205px) {
    margin-top: 30px;
  }
  @media (max-width: 1205px) {
    margin: 0px 0px 10px 0px;
  }
`;

export const ScoreContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Tricode = styled.span`
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Score = styled.span`
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bold;
  }
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
