import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/logo";
import { MenuIcons } from "../../components/menuIcons/MenuIcons";
import { theme } from "../../styles/Theme";
import { MenuFooter } from "./menuFooter/MenuFooter";

export const Footer = (props: {
  menuItems: Array<string>;
  menuIcons: Array<string>;
  
}) => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <ContactList>
            <Tel href="#">+911234509876</Tel>
            <LastMail href="#">info@example.com</LastMail>
            <MenuIcons menuIcons={props.menuIcons} />
          </ContactList>
        </FlexWrapper>
        <LineStyled />
        <FooterNav>
          <MenuFooter menuItems={props.menuItems}  />
          <FooterText>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </FooterText>
        </FooterNav>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
`;
const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media ${theme.media.tablet}{
    flex-wrap: wrap;
   justify-content: center;
  }
`
const FooterText = styled.p`
span {
  background: linear-gradient(90deg,rgb(19, 176, 245),rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color:transparent ;
  }
`;

const ContactList = styled.div`
width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
  `
const LineStyled = styled.div`
  height: 2px;
  background-color: ${theme.colors.fontTextLight};
  margin: 40px 0px;
  @media ${theme.media.mobile}{
    margin: 10px 0px;
  }
`;
const LastMail = styled.a`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  margin-left:10px;
`;

const Tel = styled.a`
display: inline-block;
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  text-align: center;
`;
