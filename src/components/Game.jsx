import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function Game(props) {
  const {
    titleId,
    name,
    displayImage,
    achievement,
    isGamePass,
    lastTimePlayed,
    xboxLiveTier,
  } = props;
  const {
    currentAchievements,
    currentGamerscore,
    progressPercentage,
    totalAchievements,
    totalGamerscore,
  } = achievement;

  const date = new Date(lastTimePlayed);
  const timeZoneOffSet = -3;
  date.setHours(date.getHours() + timeZoneOffSet);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");
  const formattedYear = String(year);
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear} ${formattedHours}:${formattedMinutes}`;

  return (
    <GameSquare>
      <section>
        <img src={displayImage}></img>
        <div>
          <h1>{name}</h1>
          <h1>{isGamePass ? <h1>GamePass On</h1> : <h1>GamePass Off</h1>}</h1>
          <h1>Última vez que jogou: {formattedDate}</h1>
        </div>
      </section>
      <h2>
        {currentGamerscore.toLocaleString()} /{" "}
        {totalGamerscore.toLocaleString()} GS
      </h2>
      <ProgressBar percentage={progressPercentage}></ProgressBar>
    </GameSquare>
  );
}

const GameSquare = styled.section`
  background: #47a54b;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    img {
      width: 120px;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: end;
      margin-left: 10px;
    }
  }
`;
