import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import office from "../../../../assets/images/office.svg";
import calendar from "../../../../assets/images/calendar.svg"

type AboutElementPropsType = {
  position: string;
  textButton: string;
  office: string;
  location?: string;
  calendar: string;
};

export const AboutElementEducat = (props: AboutElementPropsType) => {
  return (
    <StyledAboutElementEducat>
      <FlexWrapper justify="space-between">
        <Position>{props.position}</Position>
        <Button>{props.textButton}</Button>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <Office>{props.office}</Office>
        <Location>{props.location}</Location>
        <Calendar>{props.calendar}</Calendar>
      </FlexWrapper>
      <Line></Line>
    </StyledAboutElementEducat>
  );
};

const StyledAboutElementEducat = styled.div``;
const Position = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${theme.colors.fontTextLight};
`;
const Button = styled.div`
  width: 84px;
  height: 24px;
  border-radius: 100px;
  background-color: ${theme.background.bgButton};
  font-size: 9px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: ${theme.colors.fontGreen};
`;
const Office = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${theme.colors.fontMicro};
  max-width: 260px;
  width: 100%;

  ::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 4px;
    background-image: url(${office});
    background-repeat: no-repeat;
    
  }
`;
const Location = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${theme.colors.fontMicro};
  
`;
const Calendar = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${theme.colors.fontMicro};
::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 10px;
  margin-right: 4px;
  background-image: url(${calendar});
  background-repeat: no-repeat;
}

`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.background.bgLightLine};
  margin: 20px 0px 30px 0px;
`;
