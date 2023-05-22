import styled from "styled-components";
import logo from "../assets/images/logo.png";
import cards from "../data";
import CardsList from "./CardsList";
import { useState } from "react";
import incorrectIcon from "../assets/images/icone_erro.png";
import almostIcon from "../assets/images/icone_quase.png";
import correctIcon from "../assets/images/icone_certo.png";
import partyIcon from "../assets/images/party.png";
import sadIcon from "../assets/images/sad.png";

export default function MainScreen() {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [turnedCards, setTurnedCards] = useState([]);
  const [answeredCards, setAnsweredCards] = useState([]);
  const [icons, setIcons] = useState([]);
  const [recallStarted, setRecallStarted] = useState(false);

  function displayMessage() {
    if (icons.includes(incorrectIcon)) {
      return (
        <>
          <div>
            <img src={sadIcon} alt="" />
            <span>Putz...</span>
          </div>
          <p>
            Ainda faltam alguns...<br></br>Mas não desanime!
          </p>
        </>
      );
    } else {
      return (
        <>
          <div>
            <img src={partyIcon} alt="" />
            <span>Parabéns</span>
          </div>
          <p>
            Você não esqueceu de <br></br>nenhum flashcard!
          </p>
        </>
      );
    }
  }

  function startRecall() {
    setRecallStarted(true);
  }

  const dataTestValue = function getDataTestValue(icon) {
    switch (icon) {
        case incorrectIcon:
          return "no-icon";
  
        case almostIcon:
          return "partial-icon";
  
        case correctIcon:
          return "zap-icon";
  
        default:
          return "play-btn";
      }
  }

  return (
    <>
      <WelcomeContainer
      value={recallStarted}>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
        <button onClick={startRecall}
        data-test="start-btn">Iniciar Recall!</button>
      </WelcomeContainer>
      <Container
      value={recallStarted}>
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
          setIcons={setIcons}
        />
        <FooterContainer data-test="footer">
          <CounterContainer>
            <MessageContainer value={answeredCards.length === cards.length}
            data-test="finish-text">
              {answeredCards.length === cards.length ? displayMessage() : ""}
            </MessageContainer>
            {answeredCards.length}/{cards.length} CONCLUÍDOS
            <IconsContainer value={answeredCards.length > 0}>
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt="" data-test={dataTestValue(icon)}/>
              ))}
            </IconsContainer>
          </CounterContainer>
        </FooterContainer>
      </Container>
    </>
  );
}

const WelcomeContainer = styled.div`
  min-height: 100vh;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  display: ${props => !props.value ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 300px) {
    width: 100%;
    padding: 0 30px;
  }

  img {
    width: 136px;
    height: 161px;
    @media (max-width: 667px) {
      width: 100%;
      max-width: 136px;
    }
  }

  h1 {
    width: 257px;
    height: 59px;
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
    margin-top: 13px;
    @media (max-width: 300px) {
      width: 100%;
    }
  }

  button {
    width: 246px;
    height: 54px;
    margin-top: 30px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    cursor: pointer;
    @media (max-width: 300px) {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  display: ${props => props.value ? "flex" : "none"};
`;

const LogoContainer = styled.div`
  width: 255px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  margin-top: 42px;
  align-items: center;
  justify-content: center;

  @media (max-width: 667px) {
    width: 100%;
  }

  img {
    width: 52px;
    height: 60px;
  }

  div {
    width: 203px;
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
  min-height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 14px;
  display: ${(props) => (props.value ? "" : "none")};

  div {
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  img {
    width: 23px;
    height: 23px;
  }

  span {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
`;

const CounterContainer = styled.div`
  min-width: 145px;
  min-height: 22px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  gap: 5px;
  margin-bottom: 10px;
  display: ${(props) => (props.value ? "" : "none")};
`;
