import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <FlexWrapper align="center" direction="column">
          <SectionTitle>For any questions please mail me:</SectionTitle>
          <FirstMail href="#">hi@pavanmg.in</FirstMail>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;
const FirstMail = styled.a`
  background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${font({Fmax:58, Fmin:30, family:"DM Sans"})}
  letter-spacing: -1px;
  margin-bottom: 200px;
 @media ${theme.media.mobile}{
  margin-bottom: 20px;
 }
`;
