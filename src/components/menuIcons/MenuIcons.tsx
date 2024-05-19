import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';




export const MenuIcons:React.FC<{menuIcons:Array<string>}> = (props:{menuIcons:Array<string>}) => {

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
   justify-content: space-between;
   align-items: center;
   max-width: 130px;
   width: 100%;
   margin-left: 10px;


   li {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      transform: translateY(-5px);
      transition: 0.5s;
    }
   }
   
  `