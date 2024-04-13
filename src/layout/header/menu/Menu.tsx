import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MenuItems } from "../../../components/menuItems/MenuItems";
import { MenuIcons } from "../../../components/menuIcons/MenuIcons";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];
const icons = [];

export function Menu() {
  return (
    <StyledMenu>
      <FlexWrapper justify={"space-around"}>
        <MenuItems menuItems = {items}/>
        <MenuIcons/>
      </FlexWrapper>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 10px;
  }
`;

