import React from "react";
import styled from "styled-components";
import { MenuItems } from "../../components/menuItems/MenuItems";
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
        <FlexWrapper justify="space-between">
          <Logo />
          <ContactList>
            <Tel href="#">+91 12345 09876</Tel>
            <LastMail href="#">info@example.com</LastMail>
            <MenuIcons menuIcons={props.menuIcons} />
          </ContactList>
        </FlexWrapper>
        <LineStyled />
        <FlexWrapper justify="space-between">
          <MenuFooter menuItems={props.menuItems}  />
          <FooterText>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </FooterText>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const FooterText = styled.p`
span {
  background: linear-gradient(90deg,rgb(19, 176, 245),rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color:transparent ;
  }
`;

const ContactList = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LineStyled = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.fontTextLight};
  margin: 40px 0px;
`;
const LastMail = styled.a`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
`;

const Tel = styled.a`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
`;
