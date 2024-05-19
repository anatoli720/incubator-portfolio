import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "./AboutElement_Styled";

type AboutElementPropsType = {
  position: string;
  textButton: string;
  office: string;
  location?: string;
  calendar: string;
};

export const AboutEducation: React.FC<AboutElementPropsType> = (props: AboutElementPropsType) => {
  return (
    <S.StyledAboutEducation>
      <FlexWrapper justify="space-between">
        <S.Position>{props.position}</S.Position>
        <S.Button>{props.textButton}</S.Button>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <S.Office>{props.office}</S.Office>
       
        <S.Calendar>{props.calendar}</S.Calendar>
      </FlexWrapper>
      <S.Line></S.Line>
    </S.StyledAboutEducation>
  );
};

