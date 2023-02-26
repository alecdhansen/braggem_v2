import { BsCheckCircleFill } from "react-icons/bs";
import { CardProps } from "../types";
import {
  Form,
  GameButtonContainer,
  GameLocationHeader,
  GameStatusHeader,
  SpanBar,
} from "./style";

const PreTipoffGames = ({
  todaysGames,
  handleSubmit,
  handleAwayTeamInput,
  handleHomeTeamInput,
  gameID,
  awayTeamFocus,
  homeTeamFocus,
}: CardProps) => {
  return todaysGames.map((game: any) => (
    <Form
      className="formbox"
      data-aos="zoom-in"
      key={game.gameId}
      onSubmit={handleSubmit}
    >
      <GameStatusHeader>
        {game.day}, {game.gameStatusText}
      </GameStatusHeader>
      <GameLocationHeader>
        {game.arenaName} - {game.arenaCity}, {game.arenaState}
      </GameLocationHeader>
      <SpanBar />
      <GameButtonContainer>
        <button
          type="button"
          id={game.gameId}
          name={game.homeTeam.teamName}
          onClick={handleAwayTeamInput}
          value={game.awayTeam.teamName}
          className={
            gameID == game.gameId && awayTeamFocus
              ? `gamebtn${game.awayTeam.teamTricode} gamebtn col-12 selected-border`
              : `gamebtn${game.awayTeam.teamTricode} gamebtn col-12`
          }
          disabled={localStorage.getItem(game.gameId) ? true : false}
        >
          <div className="imghouse">
            {" "}
            <img
              src={require(`../../media/${game.awayTeam.teamTricode}.png`)}
              alt=""
              className="teamlogo"
            ></img>
          </div>
          <div className="gamedetails">
            <div className="cityteam">
              {game.awayTeam.teamCity} {game.awayTeam.teamName}
            </div>
            <div className="winloss">
              {game.awayTeam.wins}-{game.awayTeam.losses}
            </div>
          </div>
        </button>
        <button
          type="button"
          id={game.gameId}
          name={game.awayTeam.teamName}
          onClick={handleHomeTeamInput}
          value={game.homeTeam.teamName}
          className={
            gameID == game.gameId && homeTeamFocus
              ? `gamebtn${game.homeTeam.teamTricode} gamebtn col-12 selected-border`
              : `gamebtn${game.homeTeam.teamTricode} gamebtn col-12`
          }
          disabled={localStorage.getItem(game.gameId) ? true : false}
        >
          <div className="imghouse">
            <img
              src={require(`../../media/${game.homeTeam.teamTricode}.png`)}
              alt=""
              className="teamlogo"
            ></img>
          </div>
          <div className="gamedetails">
            <div className="cityteam">
              {game.homeTeam.teamCity} {game.homeTeam.teamName}
            </div>
            <div className="winloss">
              {game.homeTeam.wins}-{game.homeTeam.losses}
            </div>
          </div>
        </button>
      </GameButtonContainer>
      <div>
        {localStorage.getItem(game.gameId) ? (
          <div className="picksubmitted">
            Pick Submitted <BsCheckCircleFill style={{ marginLeft: "5px" }} />
          </div>
        ) : (
          <button
            type="submit"
            disabled={gameID == game.gameId ? false : true}
            className="submitbtn submit"
          >
            {gameID == game.gameId ? "Submit Pick" : "Choose a team!"}
          </button>
        )}
      </div>
    </Form>
  ));
};

export default PreTipoffGames;
