import styled from "styled-components";

import networkRequests from "../actions/networkRequests";

export default function SearchGamerTag(props) {
  const { gamerTag, setGamerTag, setGamerTagInformation, setAchievementsList } =
    props;

  function handleButton() {
    networkRequests
      .getAccountAndAchievementsData(gamerTag)
      .then((response) => {
        console.log(response.data);
        setGamerTagInformation(response.data.gamerTagData);
        setAchievementsList(response.data.achievementList)
      })
      .catch((e) => {
        alert(e.response.data);
        console.log(e.response.data);
      });
  }

  return (
    <>
      <GamerTagInput
        placeholder="GamerTag"
        value={gamerTag}
        onChange={(e) => setGamerTag(e.target.value)}
      ></GamerTagInput>
      <SearchGamerTagButton onClick={handleButton}>Buscar</SearchGamerTagButton>
    </>
  );
}

const GamerTagInput = styled.input`
  width: 90%;
  margin: 16px 5%;
  padding: 16px;
  border-radius: 15px;
  border: #000000 solid 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const SearchGamerTagButton = styled.button`
  width: 90%;
  margin: 0 5% 16px 5%;
  padding: 16px;
  background: #d98304;
  border: #000000 solid 1px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;
