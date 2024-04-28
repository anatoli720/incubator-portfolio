import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import img1 from "../../../assets/images/project1.webp";
import img2 from "../../../assets/images/project2.webp";
import img3 from "../../../assets/images/project3.webp";
import img4 from "../../../assets/images/project4.webp";
import img5 from "../../../assets/images/project5.webp";
import img6 from "../../../assets/images/project6.webp";
import { Container } from "../../../components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction="column" align="center" >
        <SectionTitle>Projects</SectionTitle>
        <SectionText>Things I’ve built so far</SectionText>
        <FlexWrapper wrap="wrap" align="space-between" justify="space-around">
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img1} />
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img2} />
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img3} />
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img4} />
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img5} />
          <Project textTech={"HTML , JavaScript, SASS, React"} src={img6} />
        </FlexWrapper>
        </FlexWrapper>
        
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: #f3dd7a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
