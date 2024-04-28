import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "./menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export function Header(props: {
  menuIcons: Array<string>;
  menuItems: Array<string>;
}) {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
        <Logo />
        <Menu menuItems={props.menuItems} menuIcons={props.menuIcons} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #f5bdbd;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
`;
