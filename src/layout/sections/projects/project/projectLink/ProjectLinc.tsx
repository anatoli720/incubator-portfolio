import React from "react";
import { Icon } from "../../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { S } from "../../Project_Styled";

type ProjectLinkTextPropsType = {
  text: string;
  iconId: string;
};

export const ProjectLink: React.FC<ProjectLinkTextPropsType> = (props: ProjectLinkTextPropsType) => {
  return (
    <S.ProjectLinkStyled>
      <FlexWrapper >
        <Icon iconId={props.iconId} width="20" height="20" viewBox="0 0 20 20"/>
        <S.Text>{props.text}</S.Text>
      </FlexWrapper>
    </S.ProjectLinkStyled>
  );
};

