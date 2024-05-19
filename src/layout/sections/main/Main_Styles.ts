import { font } from "../../../styles/Common";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 860px;
  width: 100%;
  margin-top: 60px;
  @media ${theme.media.mobile} {
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    max-height: 100vh;
    height: 100%;
    margin-bottom: 40px;
  }
`;
const StyledMainText = styled.div`
  display: flex;
  flex-direction: column;

  span,
  h1 {
    ${font({ Fmax: 58, Fmin: 30 })}
    font-weight: 700;
    p {
      display: none;
    }
  }
  h2 {
    ${font({ Fmax: 58, Fmin: 30 })}
    font-weight: 700;
    background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Photo = styled.picture`
  img {
    width: 349px;
    height: 349px;
    object-fit: cover;
    @media ${theme.media.tablet} {
      width: 300px;
      height: 300px;
    }
    @media ${theme.media.mobile} {
      width: 280px;
      height: 280px;
    }
  }
`;


export const S = {
    StyledMain,
    StyledMainText,
    Photo
}