const AfterHoursGames = () => {
  return todaysGames.map((game: any) => (
    <form
      className="formboxah"
      data-aos="zoom-in"
      key={game.gameId}
      onSubmit={handleSubmit}
    >
      <div className="gameinfo">
        {game.gameStatus === 1 ? (
          <div>
            <h4 className="gamestatus">
              {game.day}, {game.gameStatusText}
            </h4>
            <h5 className="gamelocationah">
              {game.arenaName} - {game.arenaCity}, {game.arenaState}
            </h5>
          </div>
        ) : game.gameStatus === 2 ? (
          <div>
            <h4 className="gamestatusah">{game.gameStatusText}</h4>
            <h5 className="gamelocationah">
              {game.arenaName} - {game.arenaCity}, {game.arenaState}
            </h5>
          </div>
        ) : (
          <div>
            <h4 className="gamestatusah">{game.gameStatusText}</h4>
            <div className="gamescore3">
              <span className="tricode">{game.awayTeam.teamTricode}</span>{" "}
              <span className="score">{game.awayTeam.score}</span> -{" "}
              <span className="tricode">{game.homeTeam.teamTricode}</span>{" "}
              <span className="score">{game.homeTeam.score}</span>
            </div>
          </div>
        )}
      </div>
      <div className="spanbar"></div>
      <div className="gamebtnhouse row">
        <button
          disabled
          type="button"
          id={game.gameId}
          name="awayTeam"
          onClick={handleAwayTeamInput}
          value={game.awayTeam.teamName}
          className={`gamebtn${game.awayTeam.teamTricode} gamebtn col-12`}
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
          disabled
          type="button"
          id={game.gameId}
          name="homeTeam"
          onClick={handleHomeTeamInput}
          value={game.homeTeam.teamName}
          className={`gamebtn${game.homeTeam.teamTricode} gamebtn col-12`}
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
      </div>
    </form>
  ));
};
export default AfterHoursGames;
