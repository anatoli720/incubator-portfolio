import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/logo";
import { MenuIcons } from "../../components/menuIcons/MenuIcons";
import { MenuFooter } from "./menuFooter/MenuFooter";
import { S } from "./Footer_Styled";


export const Footer: React.FC<{
  menuItems: Array<string>;
  menuIcons: Array<string>;
  
}> = (props: {
  menuItems: Array<string>;
  menuIcons: Array<string>;
  
}) => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <S.ContactList>
            <S.Tel href="#">+911234509876</S.Tel>
            <S.LastMail href="#">info@example.com</S.LastMail>
            <MenuIcons menuIcons={props.menuIcons} />
          </S.ContactList>
        </FlexWrapper>
        <S.LineStyled />
        <S.FooterNav>
          <MenuFooter menuItems={props.menuItems}  />
          <S.FooterText>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </S.FooterText>
        </S.FooterNav>
      </Container>
    </S.StyledFooter>
  );
};

