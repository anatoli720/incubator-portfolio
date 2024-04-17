import React from "react";
import styled from "styled-components";

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
const StyledMenuItems = styled.ul``;
