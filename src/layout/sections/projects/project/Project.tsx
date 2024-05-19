import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ProjectTechStack } from "./projectTechStack/ProjectTechStack";
import { ProjectLink } from "./projectLink/ProjectLinc";
import { S } from "../Project_Styled";

type ProjectPropsType = {
  textTech: string;
  src: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.StyledProject>
      <FlexWrapper direction="column">
        <S.Image src={props.src} />
        <S.ProjectTitle>Project Tile goes here</S.ProjectTitle>
        <S.ProjectText
          title="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
        >
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </S.ProjectText>
        <ProjectTechStack textTech={props.textTech} />
        <FlexWrapper align="center" justify="space-around">
          <ProjectLink iconId={"litl-akar"} text={"Live Preview"} />
          <ProjectLink iconId={"litl-github"} text={"View Code"} />
        </FlexWrapper>
      </FlexWrapper>
    </S.StyledProject>
  );
};

