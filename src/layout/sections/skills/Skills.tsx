import React from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { S } from "./Skils_Styled";


const skillData = [
  {
    iconId:"html",
  width:"110px",
  height:"110px",
  viewBox:"0 0 115 115"
},
  {
    iconId:"css",
  width:"110px",
  height:"110px",
  viewBox:"0 0 115 115"
},
{
  iconId:"js",
width:"110px",
height:"110px",
viewBox:"0 0 115 115"
},
{
  iconId:"react",
width:"110px",
height:"110px",
viewBox:"0 0 113 101"
},
{
  iconId:"redux",
width:"110px",
height:"110px",
viewBox:"0 0 105 100"
},
{
  iconId:"bootstrap",
width:"110px",
height:"110px",
viewBox:"0 0 88 87"
},
{
  iconId:"tailwind",
width:"110px",
height:"110px",
viewBox:"0 0 131 131"
},
{
  iconId:"sass",
width:"110px",
height:"110px",
viewBox:"0 0 117 87"
},
{
  iconId:"gitIcon",
width:"110px",
height:"110px",
viewBox:"0 0 105 105"
},
{
  iconId:"greensock",
width:"110px",
height:"110px",
viewBox:"0 0 120 120"
},
{
  iconId:"vscode",
width:"110px",
height:"110px",
viewBox:"0 0 112 112"
},
{
  iconId:"githubBig",
width:"110px",
height:"110px",
viewBox:"0 0 88 88"
},
]

export const Skills: React.FC = () => {
  return (
    <S.StyledSkills>
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionText>
            Technologies I’ve been working with recently
          </SectionText>
          <S.GreedContainer>
            {skillData.map((s, index)=>
              <Skill key={index} iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
            )}
          </S.GreedContainer>
        </FlexWrapper>
      </Container>
    </S.StyledSkills>
  );
};


