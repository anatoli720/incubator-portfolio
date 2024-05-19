import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styled";

export const Contact: React.FC = () => {
  return (
    <S.StyledContact>
      <Container>
        <FlexWrapper align="center" direction="column">
          <SectionTitle>For any questions please mail me:</SectionTitle>
          <S.FirstMail href="#">hi@pavanmg.in</S.FirstMail>
        </FlexWrapper>
      </Container>
    </S.StyledContact>
  );
};

