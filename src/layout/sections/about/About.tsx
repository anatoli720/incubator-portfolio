import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { AboutTitle } from "../../../components/AboutTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import setka from "../../../assets/images/drawing.svg";
import { AboutElement } from "./aboutElement/AboutElement";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper direction="row">
        <Article>
          <AboutMe>
            <AboutTitle>About Me</AboutTitle>
            <p>
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website. It
              helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS.
            </p>
          </AboutMe>
          <WorkExperience>
            <AboutTitle>Work Experience</AboutTitle>
            <AboutElement position={"Junior Web Developer"} textButton={"Full Time"} office={"Dr. Rajkumar’s Learning App"} location={"Bengaluru"} calendar={"Sep 2021 - Dec 2021"}/>
            <AboutElement position={"Web Development Intern"} textButton={"Internship"} office={"IonPixelz Web Solutions"} location={"Bengaluru"} calendar={"Sep 2021 - Dec 2021"}/>
            <AboutElement position={"SEO / SEM Specialist"} textButton={"Internship"} office={"HAAPS"} location={"Bengaluru"} calendar={"Sep 2021 - Dec 2021"}/>
          </WorkExperience>
          <Education>
            <AboutTitle>Education</AboutTitle>
            <AboutElement position={"Bachelor in Electronics & Communication"} textButton={"Full Time"} office={"Bangalore Instutute of Technology"} calendar={"Aug 2015 - Dec 2020"}/>
          </Education>
        </Article>
        <Image src={setka} />
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background-color: #f3f7f2;
  min-height: 120vh;
  position: relative;
`;
const Article = styled.article`
max-width: 50%;
`;
const AboutMe = styled.section``;

const WorkExperience = styled.section``;
const Education = styled.section``;
const Image = styled.img`
  position: absolute;
  width: 835px;
  height: 835px;
  top: 0px;
  right:-150px;
  overflow: hidden;
`;
