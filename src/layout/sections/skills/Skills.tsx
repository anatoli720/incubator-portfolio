import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionText>
            Technologies I’ve been working with recently
          </SectionText>
          <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"90px"}>
            <Skill
              iconId={"html"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 120 120 "}
            />
            <Skill
              iconId={"css"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 120 119"}
            />
            <Skill
              iconId={"js"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 120 120"}
            />
            <Skill
              iconId={"react"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 113 101"}
            />
            <Skill
              iconId={"redux"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 105 100"}
            />
            <Skill
              iconId={"bootstrap"}
              width={"120px"}
              height={"120px"}
              viewBox={"0  0 88 87"}
            />
            <Skill
              iconId={"tailwind"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 131 131"}
            />
            <Skill
              iconId={"sass"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 117 87"}
            />
            <Skill
              iconId={"gitIcon"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 105 105"}
            />
            <Skill
              iconId={"greensock"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 120 120"}
            />
            <Skill
              iconId={"vscode"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 112 112"}
            />
            <Skill
              iconId={"githubBig"}
              width={"120px"}
              height={"120px"}
              viewBox={"0 0 90 90"}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 210px;
  ${Container} {
    ${FlexWrapper} {
      ${FlexWrapper} {
        @media screen and (max-width:1202px) and (min-width: 992px) {
          column-gap: 150px;
        }
      }
      }
    }
 
`;
