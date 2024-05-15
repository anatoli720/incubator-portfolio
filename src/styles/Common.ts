

type FontPropsType = {
    family?: string
    weight?: number
    lineHeight?: number
    Fmin?: number
    Fmax?: number
    
}


export const font = ({family, weight, lineHeight, Fmax, Fmin}: FontPropsType)=>`

font-family: ${family || "Poppins"};
font-weight: ${weight || 700};
line-height: ${lineHeight || 1.2};
font-size: calc((100vw - 360px)/(1230 - 360)*(${Fmax} - ${Fmin}) + ${Fmin}px);

`

