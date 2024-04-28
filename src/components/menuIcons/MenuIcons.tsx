import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';




export const MenuIcons = (props:{menuIcons:Array<string>}) => {

    return (
        <StuledMenuIcons>
          {props.menuIcons.map((item, index)=>(
           <li key={index}><Icon iconId={`${item}`} width={"30"} height={"30"} viewBox={"0 0 32 32"} /></li> 
          ))}
        </StuledMenuIcons>
    )
}
const StuledMenuIcons = styled.ul`
   display :flex ;
   justify-content: center;
   align-items: center;
   
   gap: 20px;
   max-width: 130px;
   width: 100%;

   li {
    display: flex;
    justify-content: center;
   }
   
  `