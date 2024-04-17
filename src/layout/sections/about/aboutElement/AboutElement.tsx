import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type AboutElementPropsType = {
  position: string;
  textButton: string;
  office: string;
  location?: string;
  calendar: string;
};

export const AboutElement = (props: AboutElementPropsType) => {
  return (
    <StyledAboutElement>
      <FlexWrapper justify="space-between">
        <Position>{props.position}</Position>
        <Button>{props.textButton}</Button>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <Office>{props.office}</Office>
        <Location>{props.location}</Location>
        <Calendar>{props.calendar}</Calendar>
      </FlexWrapper>
    </StyledAboutElement>
  );
};

const StyledAboutElement = styled.div``
const Position = styled.div``
const Button = styled.div``
const Office = styled.div`
max-width: 30%;
width: 100%;
`
const Location = styled.div`
max-width: 30%;
width: 100%;
`
const Calendar = styled.div`
width: full;
`
