import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type MenuItemsPropsType = {
  menuItems: Array<string>;
};

export const MenuFooter = (props: MenuItemsPropsType) => {
  return (
    <StyledMenuItems>
      {props.menuItems.map((item, index) => (
        <li key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </StyledMenuItems>
  );
};
export const StyledMenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 610px;
  width: 100%;
  font-family: "DM Sans";
  line-height: 26px;
  font-size: 18px;
  font-weight: 400;
  margin: 0px 10px;
   a {
    vertical-align: middle;
    color: ${theme.colors.fontTextLight};
    &::before {
      display: block;
      content: "";
      transform: translateY(22px);
      width: 0%;
      height: 1px;
      transition: 1s;
     margin-left: 50%;
    }
    &:hover {
      &::before {
      content: "";
      display: block;
      transform: translateY(22px);
      width: 100%;
      height: 1px;
      background-color: #eb55cb;
      margin-left: 0px;
      transition: 1s;
      
      
    }
    color:#eb55cb ;
    transition: 2s;
    }
    transition: 2s;
  }
`;
