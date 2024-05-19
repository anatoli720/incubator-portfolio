import React, { useState } from "react";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu: React.FC <{menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openBurger() {
    setIsOpen(!isOpen);
  }
  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={isOpen} onClick={openBurger}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuWrapper isOpen={isOpen}>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a>{item}</a>
            </li>
          );
        })}
      </S.MobileMenuWrapper>
    </S.StyledMobileMenu>
  );
}


