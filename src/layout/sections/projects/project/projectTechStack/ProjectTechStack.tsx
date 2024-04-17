import React from "react";
import styled from "styled-components";

//type ProjectTechStackPropsType = {
//   text: string
//}

export const ProjectTechStack = (props: { textTech: string }) => {
  return (
    <div>
      <h4>Tech stack :</h4>
      <ProjectTechStackText>{props.textTech}</ProjectTechStackText>
    </div>
  );
};
const ProjectTechStackText = styled.p`

`;
