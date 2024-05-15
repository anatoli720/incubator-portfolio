import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionText = styled.p`
margin-bottom: 110px;

@media ${theme.media.mobile}{
    margin-bottom: 20px;
}
`