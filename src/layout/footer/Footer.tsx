import React from "react";
import styled from "styled-components";
import { MenuItems } from "../../components/menuItems/MenuItems";
import { Container } from "../../components/Container";

export const Footer = (props: { menuItems: Array<string> }) => {
  return (
    <StyledFooter>
      <Container>
        <MenuItems menuItems={props.menuItems} />
        <FooterText>
          Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
          <span>Coffee</span>
        </FooterText>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const FooterText = styled.p``;
