import styled from "styled-components";
import Card from "./Card";

export default function CardsList({
  cards,
  displayedCards,
  setDisplayedCards,
  turnedCards,
  setTurnedCards,
  answeredCards,
  setAnsweredCards,
  icons,
  setIcons
}) {
  return (
    <>
      <SCCardsList
      value={icons.length === cards.length}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            displayedCards={displayedCards}
            setDisplayedCards={setDisplayedCards}
            turnedCards={turnedCards}
            setTurnedCards={setTurnedCards}
            answeredCards={answeredCards}
            setAnsweredCards={setAnsweredCards}
            icons={icons}
            setIcons={setIcons}
          />
        ))}
      </SCCardsList>
    </>
  );
}

const SCCardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-top: 51px;
  margin-bottom: ${props => props.value ? "190px" : "116px"}
`;
