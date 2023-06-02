import styled from "styled-components";

export default function ProgressBar({ percentage }) {
  return (
    <BarTotal className="progress-bar">
      <Bar className="progress" style={{ width: `${percentage}%` }}>
        {percentage}%
      </Bar>
    </BarTotal>
  );
}

const BarTotal = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 25px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Bar = styled.div`
  background-color: #007bff;
  height: 100%;
  width: 0;
  color: #fff;
  text-align: center;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  font-size: 18px;
`;
