import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';


type SkilPropsType = {
    iconId: string
}

export const Skill = (props: SkilPropsType) => {

    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={"120"} height={"120"}/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
   max-width: 9% ;
   width: 100%;
   text-align: center;
   
`