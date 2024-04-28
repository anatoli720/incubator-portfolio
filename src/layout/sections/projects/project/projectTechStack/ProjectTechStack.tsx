import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

//type ProjectTechStackPropsType = {
//   text: string
//}

export const ProjectTechStack = (props: { textTech: string }) => {
  return (
    <ProjectTechContainer>
      <TechTitle>Tech stack :</TechTitle>
      <ProjectTechStackText>{props.textTech}</ProjectTechStackText>
    </ProjectTechContainer>
  );
};

const ProjectTechContainer = styled.div`
  margin: 0px 30px 21px 30px;
 
`;
const TechTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; 
  color: ${theme.colors.fontTextLight};
`;
const ProjectTechStackText = styled.span`
font-family: Poppins;
font-size: 14px;
font-weight: 300;
line-height: 26px;
color: ${theme.colors.fontTextLight};
`;


