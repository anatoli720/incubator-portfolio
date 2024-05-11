import React from "react";
import photo from "../../../assets/images/photo.webp";
import photo2x from "../../../assets/images/photo@2x.webp";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <Container>
      <StyledMain>
        <StyledMainText>
          <span>Hi 👋,</span>
          <span>My name is</span>
          <h2>Pavan MG</h2>
          <h1>I build things for web</h1>
        </StyledMainText>
        <Photo src={photo} srcSet={`${photo2x} 2x`} alt="photo"/>
       
      </StyledMain>
      </Container>
  );
};
const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
 margin-top:60px;
  @media ${theme.media.tablet}{
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: center;
   margin-top: 60px; 
  }
 
`;
const StyledMainText = styled.div`
  display: flex;
  flex-direction: column;

  span,
  h1 {
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
  }
  h2 {
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent ;
  }
`;

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover;
`;
