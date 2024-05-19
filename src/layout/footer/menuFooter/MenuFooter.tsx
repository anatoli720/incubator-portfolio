import React from "react";
import { S } from "../Footer_Styled";

type MenuItemsPropsType = {
  menuItems: Array<string>;
};

export const MenuFooter: React.FC<MenuItemsPropsType> = (props: MenuItemsPropsType) => {
  return (
    <S.StyledMenuItems>
      {props.menuItems.map((item, index) => (
        <li key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </S.StyledMenuItems>
  );
};

