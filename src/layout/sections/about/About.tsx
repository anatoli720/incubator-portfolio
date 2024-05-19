import React from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import setka from "../../../assets/images/drawing.svg"
import { AboutWork } from "./aboutElement/AboutWork";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { AboutEducation } from "./aboutElement/AboutEducation";
import { S } from "./About_Styled";


const aboutData = [
  {
    position: "Junior Web Developer",
    textButton: "Full Time",
    office: "Dr. Rajkumar’s Learning App",
    location: "Bengaluru",
    calendar: "Sep 2021 - Dec 2021",
  },
  {
    position: "Web Development Intern",
    textButton: "Internship",
    office: "IonPixelz Web Solutions",
    location: "Bengaluru",
    calendar: "Sep 2021 - Dec 2021",
  },
  {
    position: "SEO / SEM Specialist",
    textButton: "Internship",
    office: "HAAPS",
    location: "Bengaluru",
    calendar: "Sep 2021 - Dec 2021",
  },
];


export const About: React.FC = () => {
  return (
    <S.StyledAbout>
      <Container>
        <FlexWrapper direction="row">
          <S.Article>
            <S.AboutMe>
              <SectionTitle>About Me</SectionTitle>
              <p>
                The Generator App is an online tool that helps you to export
                ready-made templates ready to work as your future website. It
                helps you to combine slides, panels and other components and
                export it as a set of static files: HTML/CSS/JS.
              </p>
            </S.AboutMe>
            <S.WorkExperience>
              <SectionTitle>Work Experience</SectionTitle>
              {aboutData.map((a, index) => (
                <AboutWork
                  key={index}
                  position={a.position}
                  textButton={a.textButton}
                  office={a.office}
                  location={a.location}
                  calendar={a.calendar}
                />
              ))}
            </S.WorkExperience>
            <S.Education>
              <SectionTitle>Education</SectionTitle>
              <AboutEducation
                position={"Bachelor in Electronics & Communication"}
                textButton={"Full Time"}
                office={"Bangalore Instutute of Technology"}
                calendar={"Aug 2015 - Dec 2020"}
              />
            </S.Education>
          </S.Article>
          <S.Image src={setka} />
        </FlexWrapper>
      </Container>
    </S.StyledAbout>
  );
};

