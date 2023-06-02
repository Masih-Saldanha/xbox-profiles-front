import GameList from "../components/GameList";

export default function Main(props) {
  const { gamerTagInformation, achievementsList } = props;
  return achievementsList.length === 0 ? (
    <></>
  ) : (
    <GameList
      gamerTagInformation={gamerTagInformation}
      achievementsList={achievementsList}
    ></GameList>
  );
}
