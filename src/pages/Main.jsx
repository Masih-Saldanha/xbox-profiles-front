import GameList from "../components/GameList";

export default function Main(props) {
  const { gamerTagInformation } = props;
  return gamerTagInformation.length === 0 ? <></> : <GameList></GameList>;
}
