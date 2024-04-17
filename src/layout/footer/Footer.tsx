import React from "react";
import styled from "styled-components";
import { MenuItems } from "../../components/menuItems/MenuItems";

export const Footer = (props: { menuItems: Array<string> }) => {
  return (
    <StyledFooter>
      <MenuItems menuItems={props.menuItems} />
      <FooterText>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></FooterText>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const FooterText = styled.p`
    
`
