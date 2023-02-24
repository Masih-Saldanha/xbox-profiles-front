import styled from "styled-components";

export default function GameList() {
  return (
    <Menu>
      <LineButtons>
        <OrderButton>GameScore ⬆️</OrderButton>
        <OrderButton>A-Z</OrderButton>
        <OrderButton>Tempo de jogo ⬆️</OrderButton>
      </LineButtons>
      <LineButtons>
        <OrderButton>GameScore ⬇️️</OrderButton>
        <OrderButton>Z-A</OrderButton>
        <OrderButton>Tempo de jogo ⬇️</OrderButton>
      </LineButtons>
    </Menu>
  );
}

const Menu = styled.menu`
  /* overflow-y: scroll; */
  width: 90%;
  margin: 0 5%;
  padding: 16px;
  background: #114713;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: #000000 solid 1px;
`;

const LineButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const OrderButton = styled.button`
  padding: 6px;
  margin: 0 0 5px 0;
  background: #d98304;
  border: #000000 solid 1px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;
