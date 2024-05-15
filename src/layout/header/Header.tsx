import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "./headerMenu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";


export const Header = (props: {
  menuIcons: Array<string>;
  menuItems: Array<string>;
}) => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
        <Logo />
        <Menu menuItems={props.menuItems} menuIcons={props.menuIcons} />
        <MobileMenu  menuItems={props.menuItems}/>
        </FlexWrapper>       
      </Container>
    </S.Header>
  );
}


