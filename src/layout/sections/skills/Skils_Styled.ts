import styled from "styled-components";
import { theme } from "../../../styles/Theme";

//Skils
const StyledSkills = styled.section`
  margin-bottom: 210px;
  @media ${theme.media.tablet}{
    margin-bottom: 100px;
  }
`;
const GreedContainer = styled.div`
  width: 100%;

  display: grid;
  grid-auto-rows: 120px;
  grid-template-columns: repeat(6, 120px);
  row-gap: 96px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.tablet}{
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
  @media screen and (max-width:420px){
    grid-template-columns: repeat(2, 1fr)
  }
`;
//Skil
const StyledSkill = styled.div`
   max-width: 120px ;
   width: 100%;  
`
export const S = {
    StyledSkills,
    GreedContainer,
    StyledSkill
}