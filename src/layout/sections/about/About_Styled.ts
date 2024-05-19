import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const StyledAbout = styled.section`
  ${FlexWrapper} {
    position: relative;
  }
  ${SectionTitle} {
    margin-bottom: 38px;
  }

  p {
    ${font({ weight: 400, Fmax: 18, Fmin: 14 })}
    color: ${theme.colors.fontTextLight};

    line-height: 26px;
    letter-spacing: 0px;
    margin-bottom: 38px;
  }
`;
const Article = styled.article`
  max-width: 710px;
`;
const AboutMe = styled.section``;

const WorkExperience = styled.section``;
const Education = styled.section``;
const Image = styled.img`
  position: absolute;
  width: 835px;
  height: 835px;
  top: 0px;
  right: -150px;
  overflow: hidden;
`;

export const S = {
  StyledAbout,
  Article,
  AboutMe,
  WorkExperience,
  Education,
  Image
};
