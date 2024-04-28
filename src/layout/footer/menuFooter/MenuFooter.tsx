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
          <a href="">{item}</a>
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
   a {
    vertical-align: middle;
    color: ${theme.colors.fontTextLight};
  }
`;
