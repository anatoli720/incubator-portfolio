import React from "react";
import photo from "../../../assets/images/photo.webp";
import photo2x from "../../../assets/images/photo@2x.webp";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

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
        <Photo>
          <source srcSet={`${photo} 768w, ${photo2x} 1400w`}/>
          <source srcSet={`${photo} 1x, ${photo2x} 2x`}/>
          <img src={photo} alt="photo" />
        </Photo>
       
      </StyledMain>
      </Container>
  );
};
const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 860px;
  width: 100%;
 margin-top:60px;
  @media ${theme.media.tablet}{
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: center;
  max-height: 100vh;
  height: 100%;
  margin-bottom: 40px;
  }
 
`;
const StyledMainText = styled.div`
  display: flex;
  flex-direction: column;

  span,
  h1 {
    ${font({Fmax:58, Fmin:30})}
    font-weight: 700;
  }
  h2 {
    ${font({Fmax:58, Fmin:30})}
    font-weight: 700;
    background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent ;
  }
`;

const Photo = styled.picture`
 
  img {
    width: 349px;
  height: 349px;
  object-fit: cover;
  @media ${theme.media.tablet}{
    width: 300px;
    height: 300px;
  };
  @media ${theme.media.mobile}{
    width: 280px;
    height: 280px;
  }
  }
`;
