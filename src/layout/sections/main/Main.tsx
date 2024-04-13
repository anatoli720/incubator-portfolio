import React from "react";
import photo from "../../../assets/images/photo.webp";
import styled from "styled-components";
import  {FlexWrapper}  from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <div>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <div>Hi 👋,</div>
          <div>My name is</div>
          <h2>Pavan MG</h2>
          <h1>I build things for web</h1>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </div>
  );
};

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover;
`;
