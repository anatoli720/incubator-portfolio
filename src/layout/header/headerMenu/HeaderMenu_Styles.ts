import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

//MobileMenu
const StyledMobileMenu = styled.nav`
  
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  background-color: ${theme.colors.primaryBg};
  z-index: 999;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.fontTextBold};
    position: absolute;
    transition: 0.2s;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        width: 0px;
      `}

    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.fontTextBold};
      top: -13px;
      position: absolute;
      transition: 0.2s;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          rotate: 45deg;
          top: 0px;
        `}
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.fontTextBold};
      top: 13px;
      transition: 0.2s;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          rotate: -45deg;
          top: 0px;
        `}
    }
  }
`;

const MobileMenuWrapper = styled.ul<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eeeded;
  opacity: 0.95;
  a {
    vertical-align: middle;
    color: ${theme.colors.fontTextLight};

    &::before {
      display: block;
      content: "";
      transform: translateY(25px);
      width: 0%;
      height: 1px;
      transition: 1s;
      margin-left: 50%;
    }
    &:hover {
      &::before {
        content: "";
        display: block;
        transform: translateY(25px);
        width: 100%;
        height: 1px;
        background-color: #eb55cb;
        margin-left: 0px;
      }
      color: #eb55cb;
      transition: 2s;
    }
    transition: 2s;
  }
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
      height: 100vh;
    `}

  li {
    font-family: DM Sans;
    line-height: 26px;
    font-size: 20px;
    font-weight: 500;
  }
`;
// DesctopMenu
const StyledDesctopMenu = styled.nav`
max-width: 790px;
width: 100%;

`

export const S = {
    StyledMobileMenu,
    BurgerButton,
    MobileMenuWrapper,
    StyledDesctopMenu
};
