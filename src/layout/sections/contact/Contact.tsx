import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/logo";
import { MenuIcons } from "../../../components/menuIcons/MenuIcons";
import { Container } from "../../../components/Container";

export const Contact = (props: { menuIcons: Array<string> }) => {
  return (
    <StyledContact>
      <Container>
        <FlexWrapper align="center" direction="column">
          <SectionTitle>For any questions please mail me:</SectionTitle>
          <FirstMail href="#">hi@pavanmg.in</FirstMail>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <Logo />
          <FlexWrapper justify="space-between">
            <Tel href="#">+91 12345 09876</Tel>
            <LastMail href="#">info@example.com</LastMail>
            <MenuIcons menuIcons={props.menuIcons} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 25%;
  background-color: #ca97ec;
`;
const FirstMail = styled.a``;
const Address = styled.address``;
const LastMail = styled.a``;
const Tel = styled.a``;
