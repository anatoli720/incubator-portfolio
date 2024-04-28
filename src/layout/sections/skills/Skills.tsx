import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionText>
            Technologies I’ve been working with recently
          </SectionText>
          <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"100px"}>
            <Skill iconId={"html"} />
            <Skill iconId={"css"} />
            <Skill iconId={"js"} />
            <Skill iconId={"react"} />
            <Skill iconId={"redux"} />
            <Skill iconId={"bootstrap"} />
            <Skill iconId={"tailwind"} />
            <Skill iconId={"sass"} />
            <Skill iconId={"gitIcon"} />
            <Skill iconId={"greensock"} />
            <Skill iconId={"vscode"} />
            <Skill iconId={"githubBig"} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
margin-bottom: 210px;
`;
