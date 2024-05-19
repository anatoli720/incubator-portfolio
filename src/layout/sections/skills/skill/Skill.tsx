import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skils_Styled';


type SkilPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill: React.FC<SkilPropsType> = (props: SkilPropsType) => {

    return (
        <S.StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </S.StyledSkill>
    )
}

