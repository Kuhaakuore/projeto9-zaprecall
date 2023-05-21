import styled from "styled-components";
import logo from "../assets/images/logo.png";
import cards from "../data";
import CardsList from "./CardsList";
import { useState } from "react";

export default function MainScreen() {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [turnedCards, setTurnedCards] = useState([]);
  const [answeredCards, setAnsweredCards] = useState([]);
  const [icons, setIcons] = useState([]);

  return (
    <>
      <Container>
        <LogoContainer>
          <img src={logo} alt="" />
          <div>ZapRecall</div>
        </LogoContainer>
        <CardsList 
        cards={cards}
        displayedCards={displayedCards}
        setDisplayedCards={setDisplayedCards}
        turnedCards={turnedCards}
        setTurnedCards={setTurnedCards}
        answeredCards={answeredCards}
        setAnsweredCards={setAnsweredCards} 
        icons={icons}
        setIcons={setIcons}/>
        <FooterContainer>

        </FooterContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 255.61px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  margin-top: 42px;

  img {
    width: 52px;
    height: 60px;
  }

  div {
    width: 203.17px;
    height: 44px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
    justify-content: center;
    transform: rotate(0.58deg);
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;
