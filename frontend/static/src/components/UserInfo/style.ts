import styled from "styled-components";
import { TeamProps } from "./types";

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
