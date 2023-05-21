import styled from "styled-components";
import playArrow from "../assets/images/seta_play.png";

export default function Card({ card, index }) {
  const {question, answer} = card;
  return (
    <>
      <SCCard>
        <span>Pergunta {index+1}</span>
        <img src={playArrow} alt="" />
      </SCCard>
    </>
  );
}

const SCCard = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 0 15px;

  span {
    width: 87px;
    height: 19px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  img {
    width: 20px;
    height: 23px;
  }
`;
