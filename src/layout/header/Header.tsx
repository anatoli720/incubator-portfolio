import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "./menu/Menu";



export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
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
