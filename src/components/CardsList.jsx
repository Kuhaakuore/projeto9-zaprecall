import styled from "styled-components";
import Card from "./Card";

export default function CardsList({ cards }) {
  return (
    <>
      <SCCardsList>
        
        {cards.map((card, index) =>
            <Card 
            key={index} 
            card={card}
            index={index} />
        )}
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
`;
