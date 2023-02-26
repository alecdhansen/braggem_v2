const PreTipoffGames = () => {
  return todaysGames.map((game: any) => (
    <form
      className="formbox"
      data-aos="zoom-in"
      key={game.gameId}
      onSubmit={handleSubmit}
    >
      <h4 className="gamestatus">
        {game.day}, {game.gameStatusText}
      </h4>
      <h5 className="gamelocation">
        {game.arenaName} - {game.arenaCity}, {game.arenaState}
      </h5>
      <div className="spanbar"></div>
      <div className="gamebtnhouse row">
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
      </div>
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
    </form>
  )));
};

export default PreTipoffGames