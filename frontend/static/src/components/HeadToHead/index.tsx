import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { handleError } from "../../utils";
import moment from "moment";
import { HiUsers } from "react-icons/hi";
import {
  FindOpponentButton,
  FindOpponentHeader,
  HeaderContainer,
  Instructions,
  MainHeader,
  RulesText,
  FindOpponentContainer,
  MainContainer,
  MyChallengesHeader,
  FiltersContainer,
  FilterButton,
  NoChallengesContainer,
  ChallengesContainer,
  ChallengeContainer,
  DateContainer,
  ChallengeDate,
  LogoAndGamesContainer,
  ImageContainer,
  NBALogo,
} from "./style";

const HeadToHead = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([challenges]);
  const { user }: any = useAuth();
  const day = new Date();
  const dd = String(day.getDate()).padStart(2, "0");
  const mm = String(day.getMonth() + 1).padStart(2, "0");
  const yyyy = day.getFullYear();
  const currentDay = yyyy + "-" + mm + "-" + dd;
  const previousDay = new Date(Date.now() - 86400000);
  const yesterday = moment(previousDay).format("YYYY-MM-DD");

  useEffect(() => {
    getChallenges();
  }, []);

  const getChallenges = async () => {
    const response: any = await fetch(`/api_v1/challenges/`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response not OK");
    } else {
      const data = await response.json();
      setChallenges(data);
      setSelectedChallenges(data);
    }
  };

  const yesterdaysChallenges = challenges.filter(
    (challenge: any) => challenge.date === yesterday
  );
  const todaysChallenges = challenges.filter(
    (challenge: any) => challenge.date === currentDay
  );

  return (
    <>
      <HeaderContainer>
        <MainHeader>Let's Go Head To Head!</MainHeader>
        <RulesText>The Rules</RulesText>
        <Instructions>
          Make your picks for today, challenge another user, and come back
          tomorrow to see how you stacked up against your opponent!
        </Instructions>
      </HeaderContainer>
      <FindOpponentContainer>
        <FindOpponentHeader>Find An Opponent</FindOpponentHeader>
        <Link to="/home/leaderboard" style={{ textDecoration: "none" }}>
          <FindOpponentButton display="flex" align-items="center">
            User List <HiUsers style={{ marginLeft: "5px" }} />
          </FindOpponentButton>
        </Link>
      </FindOpponentContainer>
      {challenges.length === 0 && (
        <FindOpponentContainer>
          <h4 className="nochallenges">No challenges yet!</h4>
          <Link to="/home/leaderboard">
            <FindOpponentButton>Find an opponent</FindOpponentButton>
          </Link>
        </FindOpponentContainer>
      )}
      {challenges.length >= 1 && (
        <MainContainer>
          <MyChallengesHeader>My Challenges</MyChallengesHeader>
          <FiltersContainer>
            <FilterButton
              padding="4px 25px 4px 25px"
              border-radius="24px 0px 0px 24px"
              onClick={() => setSelectedChallenges(yesterdaysChallenges)}
            >
              Yesterday
            </FilterButton>
            <FilterButton
              padding="4px 25px 4px 25px"
              onClick={() => setSelectedChallenges(todaysChallenges)}
            >
              Today
            </FilterButton>
            <FilterButton
              padding="4px 25px 4px 25px"
              borderRadius="0px 24px 24px 0px"
              onClick={() => setSelectedChallenges(challenges)}
              autoFocus
            >
              All
            </FilterButton>
          </FiltersContainer>
          {selectedChallenges.length === 0 && (
            <NoChallengesContainer>
              No challenges exist for this day
              <Link to="/home/leaderboard">
                <FindOpponentButton fontSize="16px">
                  Find an opponent <HiUsers style={{ marginBottom: "3px" }} />
                </FindOpponentButton>
              </Link>
            </NoChallengesContainer>
          )}
          {selectedChallenges.length >= 1 && (
            <ChallengesContainer>
              {selectedChallenges.map((challenge: any) => (
                <ChallengeContainer>
                  <DateContainer>
                    <ChallengeDate>
                      {moment(challenge.date).format("MMM DD, YYYY")}
                    </ChallengeDate>
                    {challenge.games >= 1 && (
                      <LogoAndGamesContainer>
                        <ImageContainer>
                          <NBALogo
                            src={require("../../media/NBA.png")}
                            alt=""
                          />
                        </ImageContainer>
                        {challenge.games} Games
                      </LogoAndGamesContainer>
                    )}
                  </DateContainer>
                  {user?.username === challenge.challenger_username && (
                    <div className="side3 col-9">
                      <div className="row">
                        <div className="h2hdetails col-4">
                          <div className="matchup">Correct Picks</div>
                          {challenge.challenger_picks_correct}
                        </div>
                        <div className="h2hdetails col-4">
                          <span className="matchup">Opponent</span>
                          <div className="userplusavatarplusscore">
                            <div className="avatarboxh2h">
                              <img
                                style={{ width: "100%", verticalAlign: "top" }}
                                src={challenge.opponent_avatar}
                                alt=""
                              />
                            </div>
                            {challenge.opponent_username}
                          </div>
                        </div>
                        <div className="h2hdetails result2 col-4">
                          <span className="result">Challenge Winner</span>
                          {challenge.winner === "Tie" &&
                          challenge.date === currentDay ? (
                            <div>
                              <span className="winner cip">In progress</span>
                            </div>
                          ) : (
                            <div>
                              {challenge.date !== currentDay &&
                              challenge.winner === "Tie" ? (
                                <span className="winner">You Tied!</span>
                              ) : (
                                <span className="winner">
                                  {challenge.winner}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {user?.username === challenge.opponent_username && (
                    <div className="side3 col-9">
                      <div className="row row1">
                        <div className="h2hdetails col-4">
                          <div className="matchup">Correct Picks</div>
                          {challenge.opponent_picks_correct}
                        </div>
                        <div className="h2hdetails col-4">
                          <span className="matchup">Opponent</span>
                          <div className="userplusavatarplusscore">
                            <div className="avatarboxh2h">
                              <img
                                style={{ width: "100%", verticalAlign: "top" }}
                                src={challenge.challenger_avatar}
                                alt=""
                              />
                            </div>
                            {challenge.challenger_username}
                          </div>
                        </div>
                        <div className="h2hdetails result2 col-4">
                          <span className="result">Challenge Winner</span>
                          {challenge.winner === "Tie" &&
                          challenge.date === currentDay ? (
                            <div>
                              <span className="winner cip">In progress</span>
                            </div>
                          ) : (
                            <div>
                              {challenge.date !== currentDay &&
                              challenge.winner === "Tie" ? (
                                <span className="winner">You Tied!</span>
                              ) : (
                                <span className="winner">
                                  {challenge.winner}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </ChallengeContainer>
              ))}
            </ChallengesContainer>
          )}
        </MainContainer>
      )}
    </>
  );
};
export default HeadToHead;
