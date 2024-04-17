import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../../components/FlexWrapper";

type ProjectLinkTextPropsType = {
  text: string;
  iconId: string;
};

export const ProjectLink = (props: ProjectLinkTextPropsType) => {
  return (
    <ProjectLinkStyled>
      <FlexWrapper>
        <Icon iconId={props.iconId} width="20" height="20"/>
        <Text>{props.text}</Text>
      </FlexWrapper>
    </ProjectLinkStyled>
  );
};

const ProjectLinkStyled = styled.a``;
const Text = styled.span``;
