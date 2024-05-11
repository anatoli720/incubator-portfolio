import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "./headerMenu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";


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
        <MobileMenu  menuItems={props.menuItems}/>
        </FlexWrapper>       
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
background-color: white;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
${theme.media.tablet}{
  display: none;
}
`;
