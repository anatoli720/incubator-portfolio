import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ProjectTechStack } from "./projectTechStack/ProjectTechStack";
import { ProjectLink } from "./projectLink/ProjectLinc";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  textTech: string;
  src: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction="column">
        <Image src={props.src} />
        <ProjectTitle>Project Tile goes here</ProjectTitle>
        <ProjectText
          title="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
        >
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </ProjectText>
        <ProjectTechStack textTech={props.textTech} />
        <FlexWrapper align="center" justify="space-around">
          <ProjectLink iconId={"litl-akar"} text={"Live Preview"} />
          <ProjectLink iconId={"litl-github"} text={"View Code"} />
        </FlexWrapper>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 375px;
  border-radius: 20px;
  box-shadow: 10px 10px 40px 0px ${theme.background.bgShedow};
  background-color: ${theme.colors.primaryBg};
  margin-bottom: 62px;
  transition: 0.3s;
  :hover {
    background-color: #cecece;
    transform: translateY(-15px);
    transition: 0.3s;
    p {
      color: ${theme.colors.fontTextBold};
      transition: 0.3s;
    }
    img {
      filter: hue-rotate(90deg);
      transition: 0.3s;
    }
  }
`;
const Image = styled.img`
  max-width: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  margin: 27px 30px 17px 30px;
`;

const ProjectText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  color: ${theme.colors.fontTextLight};
  margin: 0px 30px 12px 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
