import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const MenuIcons = () => {

    return (
        <StuledMenuIcons>
          <li>
            <a href="">
              <Icon iconId={"github"}/>
            </a>
          </li>
          <li>
            <a href="">
            <Icon iconId={"twitter"}/>
            </a>
          </li>
          <li>
            <a href="">
            <Icon iconId={"linkedin"}/>
            </a>
          </li>
        </StuledMenuIcons>
    )
}
const StuledMenuIcons = styled.ul`
    
`