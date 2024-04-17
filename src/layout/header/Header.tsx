import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "./menu/Menu";




export function Header(props: {menuIcons: Array<string>, menuItems: Array<string>}) {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems = {props.menuItems} menuIcons = {props.menuIcons}/>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
background-color: #f5bdbd;
min-height: 10vh;
height: 100%;
display: flex;
justify-content: space-between;
`
