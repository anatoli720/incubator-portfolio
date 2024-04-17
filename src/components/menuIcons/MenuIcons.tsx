import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';




export const MenuIcons = (props:{menuIcons:Array<string>}) => {

    return (
        <StuledMenuIcons>
          {props.menuIcons.map((item, index)=>(
           <li key={index}><Icon iconId={`${item}`}/></li> 
          ))}
        </StuledMenuIcons>
    )
}
const StuledMenuIcons = styled.ul`
   display :flex ;
   justify-content: center;
   align-items: center;
`