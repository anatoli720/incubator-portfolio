import React from "react";
import { S } from "../../Project_Styled";

//type ProjectTechStackPropsType = {
//   text: string
//}

export const ProjectTechStack: React.FC<{ textTech: string }> = (props: { textTech: string }) => {
  return (
    <S.ProjectTechContainer>
      <S.TechTitle>Tech stack :</S.TechTitle>
      <S.ProjectTechStackText>{props.textTech}</S.ProjectTechStackText>
    </S.ProjectTechContainer>
  );
};



