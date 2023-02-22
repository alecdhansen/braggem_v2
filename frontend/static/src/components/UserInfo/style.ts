import styled from "styled-components";
import { LabelProps, TeamProps } from "./types";

export const BackButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  font-size: 20px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin: 20px;
  }
`;

export const BackButton = styled.button`
  @media (max-width: 768px) {
    margin-bottom: 0px;
    padding: 10px 20px;
  }
`;

export const UserBoxContainer = styled.div.attrs(() => ({
  className: "col-md-6 offset-md-3 col-10 offset-1",
}))`
  border-radius: 20px;
  background: linear-gradient(315deg, #051720, #051b25);
  box-shadow: -0px -0px 46px #082636, 23px 23px 46px #082636;
  height: 600px;
  margin-bottom: 75px;
  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const LandscapeContainer = styled.div<TeamProps>`
  height: 150px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ background }) => background};
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  margin-right: 0px;
  @media (max-width: 768px) {
    width: 100px;
    margin-right: 0px;
  }
`;

export const TeamImage = styled.img`
  width: 100%;
`;

export const AvatarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid var(--navyblue);
  background-color: #fff;
  position: absolute;
`;

export const UserImage = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
`;

export const UsernameContainer = styled.div`
  margin-top: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.h4`
  display: flex;
  justify-content: center;
  color: rgb(236, 236, 236);
  font-size: 40px;
  margin: 0px;
`;

export const DateJoined = styled.span`
  display: flex;
  justify-content: center;
  color: rgb(236, 236, 236);
  margin-bottom: 20px;
`;

export const MainStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LifetimeContainer = styled.div`
  border-radius: 0px 0px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background-color: #143348;
  color: var(--offwhite);
  width: 80%;
  height: 170px;
  font-weight: 700;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const StatsHeader = styled.h2`
  display: flex;
  justify-content: center;
  color: var(--offwhite);
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const TitlesContainer = styled.div.attrs(() => ({
  className: "row",
}))`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 0px 6px;
`;

export const Label = styled.span.attrs(() => ({
  className: "col-4",
}))<LabelProps>`
  text-decoration: ${({ textDecoration }) => textDecoration};
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0px 2px;
  }
`;

export const NumbersContainer = styled.div.attrs(() => ({
  className: "row",
}))`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 0px 6px;
  color: rgb(150, 157, 171);
`;

export const ChallengeContainer = styled.div``;

export const ChallengeButton = styled.button`
  padding: 4px 52px;
  margin: 6px 0px 50px 0px;
  border: none;
  border-radius: 24px;
  background-color: var(--offwhite);
  color: var(--navyblue);
  font-weight: 500;
  transition: 0.3s;
`;
