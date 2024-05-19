import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { MenuItems } from "../../../../components/menuItems/MenuItems";
import { MenuIcons } from "../../../../components/menuIcons/MenuIcons";
import { S } from "../HeaderMenu_Styles";

export const DesctopMenu: React.FC<{menuItems:Array<string>, menuIcons: Array<string>}>= (props: {menuItems:Array<string>, menuIcons: Array<string>}) => {
  return (
    <S.StyledDesctopMenu>
      <FlexWrapper justify={"space-between"} >
        <MenuItems menuItems = {props.menuItems}/>
        <MenuIcons menuIcons = {props.menuIcons}/>
      </FlexWrapper>
    </S.StyledDesctopMenu>
  );
}


