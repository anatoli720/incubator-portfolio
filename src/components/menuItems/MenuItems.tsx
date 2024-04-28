import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

// type MenuItemsPropsType = {
// menuItems: Array<string>
//}

export const MenuItems = (props: { menuItems: Array<string> }) => {
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
const StyledMenuItems = styled.ul`
display: flex;
max-width: 610px;
width: 100%;
justify-content: space-between;
font-family: "DM Sans";
font-weight: 500;
font-size: 20px;
line-height: 26px;

a {
  vertical-align: middle;
  color:${theme.colors.fontTextLight}
}
`;
