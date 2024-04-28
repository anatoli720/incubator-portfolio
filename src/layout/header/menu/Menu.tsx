import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MenuItems } from "../../../components/menuItems/MenuItems";
import { MenuIcons } from "../../../components/menuIcons/MenuIcons";



export function Menu(props: {menuItems:Array<string>, menuIcons: Array<string>}) {
  return (
    <StyledMenu>
      <FlexWrapper justify={"space-between"} >
        <MenuItems menuItems = {props.menuItems}/>
        <MenuIcons menuIcons = {props.menuIcons}/>
      </FlexWrapper>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
max-width: 790px;
width: 100%;


`
