import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
${font({ Fmax: 42, Fmin: 25})}
color: ${theme.colors.fontTitle};
margin-bottom  :49px ;
@media ${theme.media.mobile}{
    margin-bottom: 0px;
}
`