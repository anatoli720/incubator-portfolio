import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import office from "../../../../assets/images/office.svg";
import calendar from "../../../../assets/images/calendar.svg";
import { font } from "../../../../styles/Common";
import location from "../../../../assets/images/location.svg";
//aboutEducation
const StyledAboutEducation = styled.div``;
const Position = styled.div`
${font({weight: 400, Fmax: 20,Fmin: 14})}
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

//aboutWork
const StyledAboutWork = styled.div``;
const Location = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${theme.colors.fontMicro};
  ::before {
    content:"";
    display: inline-block;
    width: 16px;
    height: 11px;
    background-image: url(${location});
    margin-right: 4px;
    background-repeat: no-repeat;
  }
  @media ${theme.media.mobile}{
    display: none;
  }
`;

export const S = {
    StyledAboutEducation,
    Position,
    Button,
    Office,
    Calendar,
    Line,
    StyledAboutWork,
    Location
}