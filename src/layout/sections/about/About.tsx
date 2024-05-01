import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import setka from "../../../assets/images/drawing.svg";
import { AboutElement } from "./aboutElement/AboutElement";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { AboutElementEducat } from "./aboutElement/aboutElementEducat";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper direction="row">
          <Article>
            <AboutMe>
              <SectionTitle>About Me</SectionTitle>
              <p>
                The Generator App is an online tool that helps you to export
                ready-made templates ready to work as your future website. It
                helps you to combine slides, panels and other components and
                export it as a set of static files: HTML/CSS/JS.
              </p>
            </AboutMe>
            <WorkExperience>
              <SectionTitle>Work Experience</SectionTitle>
              <AboutElement
                position={"Junior Web Developer"}
                textButton={"Full Time"}
                office={"Dr. Rajkumar’s Learning App"}
                location={"Bengaluru"}
                calendar={"Sep 2021 - Dec 2021"}
              />
              <AboutElement
                position={"Web Development Intern"}
                textButton={"Internship"}
                office={"IonPixelz Web Solutions"}
                location={"Bengaluru"}
                calendar={"Sep 2021 - Dec 2021"}
              />
              <AboutElement
                position={"SEO / SEM Specialist"}
                textButton={"Internship"}
                office={"HAAPS"}
                location={"Bengaluru"}
                calendar={"Sep 2021 - Dec 2021"}
              />
            </WorkExperience>
            <Education>
              <SectionTitle>Education</SectionTitle>
              <AboutElementEducat
                position={"Bachelor in Electronics & Communication"}
                textButton={"Full Time"}
                office={"Bangalore Instutute of Technology"}
                calendar={"Aug 2015 - Dec 2020"}
              />
            </Education>
          </Article>
          <Image src={setka} />
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`

  ${FlexWrapper} {
    position: relative;
  }
  ${SectionTitle} {
    margin-bottom: 38px;
  }

 
  p {
    color: ${theme.colors.fontTextLight};
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    margin-bottom: 38px;
  }
`;
const Article = styled.article`
  max-width: 710px;
`;
const AboutMe = styled.section``;

const WorkExperience = styled.section`

`;
const Education = styled.section``;
const Image = styled.img`
  position: absolute;
  width: 835px;
  height: 835px;
  top: 0px;
  right: -150px;
  overflow: hidden;
`;
