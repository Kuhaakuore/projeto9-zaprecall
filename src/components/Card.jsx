import styled from "styled-components";
import playArrow from "../assets/images/seta_play.png";
import turnArrow from "../assets/images/seta_virar.png";
import incorrectIcon from "../assets/images/icone_erro.png";
import almostIcon from "../assets/images/icone_quase.png";
import correctIcon from "../assets/images/icone_certo.png";
import { useState } from "react";

export default function Card({
  card,
  index,
  displayedCards,
  setDisplayedCards,
  turnedCards,
  setTurnedCards,
  answeredCards,
  setAnsweredCards,
  icons,
  setIcons,
}) {
  const { question, answer } = card;
  const [icon, setIcon] = useState(playArrow);

  function displayQuestion() {
    if (!displayedCards.includes(card) && !answeredCards.includes(card)) {
      const newArray = [...displayedCards, card];
      setDisplayedCards(newArray);
    }
  }

  function turnCard() {
    if (!turnedCards.includes(card)) {
      const newArray = [...turnedCards, card];
      setTurnedCards(newArray);
    }
  }

  function answerCard(choice) {
    let newArray = [...answeredCards, card];
    setAnsweredCards(newArray);
    newArray = displayedCards.filter((myCard) => myCard !== card);
    setDisplayedCards(newArray);
    newArray = turnedCards.filter((myCard) => myCard !== card);
    setTurnedCards(newArray);

    switch (choice) {
      case "incorrect":
        setIcon(incorrectIcon);
        newArray = [...icons, incorrectIcon];
        setIcons(newArray);
        break;

      case "almost-correct":
        setIcon(almostIcon);
        newArray = [...icons, almostIcon];
        setIcons(newArray);
        break;

      case "correct":
        setIcon(correctIcon);
        newArray = [...icons, correctIcon];
        setIcons(newArray);
        break;

      default:
        break;
    }
  }

  const color = function getColor(icon) {
    switch (icon) {
      case incorrectIcon:
        return "#FF3030";

      case almostIcon:
        return "#FF922E";

      case correctIcon:
        return "#2FBE34";

      default:
        return "#333333";
    }
  }

  function displayCard() {
    if (turnedCards.includes(card)) {
      return (
        <CardBack>
          <p>{answer}</p>
          <div>
            <Button
              color="#FF3030"
              onClick={() => answerCard("incorrect")}
            >
              Não <br></br> lembrei
            </Button>
            <Button
              color="#FF922E"
              onClick={() => answerCard("almost-correct")}
            >
              Quase não lembrei
            </Button>
            <Button
              color="#2FBE34"
              onClick={() => answerCard("correct")}
            >
              Zap!
            </Button>
          </div>
        </CardBack>
      );
    } else if (displayedCards.includes(card)) {
      return (
        <CardFront>
          <span>{question}</span>
          <img src={turnArrow} alt="" onClick={turnCard} />
        </CardFront>
      );
    }
    return (
      <SCCard value={color(icon)}>
        <span>Pergunta {index + 1}</span>
        <img src={icon} alt="" onClick={displayQuestion} />
      </SCCard>
    );
  }

  return <>{displayCard()}</>;
}

const SCCard = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
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
    text-decoration: ${(props) =>
      props.value !== "#333333" ? "line-through" : ""};
    color: ${(props) => props.value};
  }
`;

const CardFront = styled.div`
  width: 299px;
  height: 131px;
  background-color: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: relative;

  span {
    position: absolute;
    top: 18px;
    left: 15px;
    width: 269px;
    height: 22px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 6px;
    right: 15px;
  }
`;

const CardBack = styled.div`
  width: 299px;
  min-height: 131px;
  background-color: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  p {
    width: 269px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin: 18px 15px 0 15px;
  }

  div {
    display: flex;
    gap: 8px;
    padding: 0 15px;
    margin-top: 22px;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 85px;
  height: 37px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: none;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;
