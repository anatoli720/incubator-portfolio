import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
background-color: white;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
${theme.media.tablet}{
  display: none;
}
`;

export const S = {
    Header
}