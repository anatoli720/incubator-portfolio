import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';


type SkilPropsType = {
    iconId: string
    width: string
    height: string
    viewBox: string
}

export const Skill = (props: SkilPropsType) => {

    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
margin-bottom: 81px;
@media ${theme.media.mobile}{
    margin-bottom: 0px;
    gap: 0px;
}
  
`