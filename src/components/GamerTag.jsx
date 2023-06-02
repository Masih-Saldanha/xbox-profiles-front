import styled from "styled-components";

export default function GamerTag(props) {
  const { gamerTagInformation } = props;
  const {
    displayPicRaw,
    gamertag,
    gamerScore,
    accountTier,
    hasGamePass,
    followerCount,
    followingCount,
  } = gamerTagInformation;
  return (
    <GamerTagSquare>
      <img src={displayPicRaw}></img>
      <div>
        <h1>{gamertag}</h1>
        <h1>{parseInt(gamerScore).toLocaleString()} GS</h1>
        {accountTier === "Gold" ? (
          <h1>Live Gold On</h1>
        ) : (
          <h1>Live Gold Off</h1>
        )}
        <h1>{parseInt(followerCount).toLocaleString()} seguidores</h1>
        <h1>{parseInt(followingCount).toLocaleString()} seguidos</h1>
      </div>
    </GamerTagSquare>
  );
}

const GamerTagSquare = styled.section`
  background: #47a54b;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;

  display: flex;
  justify-content: space-between;
  img {
    width: 120px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: end;
    justify-content: space-between;
    h1 {
      font-size: 18px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
