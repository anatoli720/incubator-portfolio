import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

// menu
export const StyledMenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 610px;
  width: 100%;
  margin: 0px 10px;
  @media ${theme.media.tablet} {
    margin: 0 auto;
  }
  a {
    ${font({ Fmax: 18, Fmin: 14, family: "DM Sans", weight: 400 })}
    vertical-align: middle;
    color: ${theme.colors.fontTextLight};
    &::before {
      display: block;
      content: "";
      transform: translateY(23px);
      width: 0%;
      height: 1px;
      transition: 1s;
      margin-left: 50%;
    }
    &:hover {
      &::before {
        content: "";
        display: block;
        transform: translateY(23px);
        width: 100%;
        height: 1px;
        background-color: #eb55cb;
        margin-left: 0px;
      }
      color: #eb55cb;
     
    }
    transition: 2s;
  }
`;

//Footer
const StyledFooter = styled.footer`
`;
const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media ${theme.media.tablet}{
    flex-wrap: wrap;
   justify-content: center;
  }
`
const FooterText = styled.p`
span {
  background: linear-gradient(90deg,rgb(19, 176, 245),rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color:transparent ;
  }
`;

const ContactList = styled.div`
width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
  `
const LineStyled = styled.div`
  height: 2px;
  background-color: ${theme.colors.fontTextLight};
  margin: 40px 0px;
  @media ${theme.media.mobile}{
    margin: 10px 0px;
  }
`;
const LastMail = styled.a`
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  margin-left:10px;
`;

const Tel = styled.a`
display: inline-block;
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  text-align: center;
`;

export const S = {
    StyledMenuItems,
    StyledFooter,
    FooterNav,
    FooterText,
    ContactList,
    LineStyled,
    LastMail,
    Tel,
}