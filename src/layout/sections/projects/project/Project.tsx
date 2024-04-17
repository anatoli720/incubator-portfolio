import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ProjectTechStack } from "./projectTechStack/ProjectTechStack";
import { ProjectLink } from "./projectLink/ProjectLinc";

type ProjectPropsType = {
  textTech: string;
  src: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <FlexWrapper>
      <StyledProject>
        <Image src={props.src} />
        <ProjectTitle>Project Tile goes here</ProjectTitle>
        <ProjectText>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </ProjectText>
        <ProjectTechStack textTech={props.textTech} />
        <FlexWrapper align="center" justify="space-around">
          <ProjectLink iconId={"litl-akar"} text={"Live Preview"} />
          <ProjectLink iconId={"litl-github"} text={"View Code"} />
        </FlexWrapper>
      </StyledProject>
    </FlexWrapper>
  );
};

const StyledProject = styled.div`
  max-width: 260px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #FFFF;
 
 
`;
const Image = styled.img`
  max-width: 100%;
`;

const ProjectTitle = styled.h3``;

const ProjectText = styled.p``;
