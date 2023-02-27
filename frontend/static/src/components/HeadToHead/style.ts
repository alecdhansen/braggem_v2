import styled from "styled-components";

export const HeaderContainer = styled.header.attrs(() => ({
  className: "col-md-8 offset-md-2 col-10 offset-1",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--offwhite);
  background-color: #1c293e;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const MainHeader = styled.h2`
  margin-top: 15px;
  font-size: 30px;
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  padding: 0px 5px;
`;

export const RulesText = styled.h3`
  text-decoration: underline;
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  padding: 0px 5px;
`;

export const Instructions = styled.p`
  font-family: "Fjalla One", sans-serif;
  text-align: center;
  padding: 0px 5px;
`;

export const FindOpponentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FindOpponentHeader = styled.h2`
  text-align: center;
  color: var(--offwhite);
  margin-bottom: 10px;
  font-size: 30px;
`;

export const FindOpponentButton = styled.button<{
  display?: string;
  alignItems?: string;
  fontSize?: string;
}>`
  padding: 4px 52px;
  border: none;
  background-color: var(--offwhite);
  color: var(--navyblue);
  font-weight: 500;
  transition: 0.3s;
  border-radius: 24px;
  &:hover {
    background-color: #b3b3b3;
    transition: 0.3s;
  }
`;

export const MainContainer = styled.section.attrs(() => ({
  className: "col-md-10 offset-md-1 col-12",
}))`
  margin-top: 50px;
`;

export const MyChallengesHeader = styled.h3`
  text-align: center;
  color: var(--offwhite);
  margin-bottom: 10px;
  font-size: 30px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const FilterButton = styled.button<{
  padding?: string;
  borderRadius?: string;
}>`
  margin-bottom: 30px;
  border: none;
  background-color: var(--offwhite);
  color: var(--navyblue);
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    background-color: #b3b3b3;
    transition: 0.3s;
  }
  &:focus {
    background-color: #b3b3b3;
  }
`;

export const NoChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--offwhite);
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 300px;
`;

export const ChallengesContainer = styled.div`
  height: 100vh;
  overflow: scroll;
`;

export const ChallengeContainer = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--offwhite);
  min-height: 100px;
  margin-bottom: 60px;
  border-radius: 12px 10px 10px 12px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 25px 5px;
  }
`;

export const DateContainer = styled.div.attrs(() => ({
  className: "col-3",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 800;
  background-color: #1c293e;
  min-height: 100px;
  border-radius: 10px 0px 0px 10px;
  color: var(--offwhite);
  padding: 0px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ChallengeDate = styled.span``;

export const LogoAndGamesContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px 5px 0px 0px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 25px;
`;

export const NBALogo = styled.img`
  width: 100%;
`;

export const ChallengeInfoContainer = styled.div.attrs(() => ({
  className: "col-9",
}))`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div.attrs(() => ({
  className: "row",
}))``;

export const DetailsContainer = styled.div.attrs(() => ({
  className: "col-4",
}))<{ paddingBottom?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  min-height: 100px;
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
  }
`;

export const Matchup = styled.span`
  font-weight: 800;
  margin: 0px 15px 0px 20px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 11px;
    margin: 0px 0px 0px 5px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const AvatarContainer = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: fill;
  border: 0.5px solid var(--navyblue);
  margin-right: 3px;
`;

export const Avatar = styled.img`
  width: 100%;
  vertical-align: top;
`;

export const ResultHeader = styled.span`
  margin-right: 30px;
  font-weight: 800;
  text-decoration: underline;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    margin: 0px 10px 0px 0px;
    font-size: 11px;
  }
`;

export const Result = styled.span`
  margin-right: 30px;
  font-weight: 700;
  font-style: italic;
  @media (max-width: 768px) {
    margin: 0px 10px 0px 0px;
    font-size: 12px;
  }
`;

export const FinalResult = styled.span`
  margin-right: 30px;
  @media (max-width: 768px) {
    margin: 0px 10px 0px 0px;
    font-size: 12px;
  }
`;
