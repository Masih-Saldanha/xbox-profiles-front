import GameList from "../components/GameList";

export default function Main(props) {
  const { gamerTagInformation, achievementsList } = props;
  return (!gamerTagInformation.gamertag) ? (
    <></>
  ) : (
    <GameList
      gamerTagInformation={gamerTagInformation}
      achievementsList={achievementsList}
    ></GameList>
  );
}
