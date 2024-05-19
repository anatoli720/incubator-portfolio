import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const StyledContact = styled.section``;
const FirstMail = styled.a`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${font({ Fmax: 58, Fmin: 30, family: "DM Sans" })}
  letter-spacing: -1px;
  margin-bottom: 200px;
  @media ${theme.media.mobile} {
    margin-bottom: 20px;
  }
`;

export const S = {
  StyledContact,
  FirstMail,
};
