import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Top() {
  const navigate = useNavigate();
  return (
    <TopHeader>
      <h1 onClick={() => navigate("/")}>Xbox Profiles</h1>
    </TopHeader>
  );
}

const TopHeader = styled.header`
  width: 100%;
  background: #47a54b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding: 20px 0;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
      -1px -1px #000, 1px -1px #000, -1px 1px #000;
  }
`;
