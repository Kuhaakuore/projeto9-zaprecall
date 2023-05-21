import styled from "styled-components";
import logo from "../assets/images/logo.png";
import cards from "../data";
import CardsList from "./CardsList";

export default function MainScreen() {
  return (
    <>
      <Container>
        <LogoContainer>
          <img src={logo} alt="" />
          <div>ZapRecall</div>
        </LogoContainer>
        <CardsList cards={cards} />
        <FooterContainer>
            fotter
        </FooterContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 375px;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;
