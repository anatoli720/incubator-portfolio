import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionText = styled.p`
${font({weight:400, Fmax: 32, Fmin: 16})}
margin-bottom: 110px;


@media ${theme.media.mobile}{
    margin-bottom: 20px;
}
`