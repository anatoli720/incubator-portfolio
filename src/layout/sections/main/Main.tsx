import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import photo from "../../../assets/images/photo.webp";
import photo2x from "../../../assets/images/photo@2x.webp";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main = () => {
  return (
    <Container>
      <S.StyledMain>
        <S.StyledMainText>
          <span>Hi 👋,</span>
          <span>My name is</span>
          <h2>Pavan MG</h2>
          <h1>
            <p>I build things for web</p>
            <Typewriter
              options={{
                strings: ["I build things for web"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </S.StyledMainText>
        <Tilt>
          <S.Photo>
            <source srcSet={`${photo} 768w, ${photo2x} 1400w`} />
            <source srcSet={`${photo} 1x, ${photo2x} 2x`} />
            <img src={photo} alt="photo" />
          </S.Photo>
        </Tilt>
      </S.StyledMain>
    </Container>
  );
};
