import styled from "styled-components";
import { theme } from "../../../styles/Theme";


//projectLinc
const ProjectLinkStyled = styled.a`
cursor: pointer;
`;
const Text = styled.span``;

//projectTechStack
const ProjectTechContainer = styled.div`
  margin: 0px 30px 21px 30px;
`;
const TechTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; 
  color: ${theme.colors.fontTextLight};
`;
const ProjectTechStackText = styled.span`
font-family: Poppins;
font-size: 14px;
font-weight: 300;
line-height: 26px;
color: ${theme.colors.fontTextLight};
`;

//projects
const StyledProjects = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//project
const StyledProject = styled.div`
  max-width: 375px;
  border-radius: 20px;
  box-shadow: 10px 10px 40px 0px ${theme.background.bgShedow};
  background-color: ${theme.colors.primaryBg};
  margin-bottom: 62px;
  transition: 0.3s;
  img {
      filter: hue-rotate(0deg);
      transition:0.3s;
    }
    p {
      color: ${theme.colors.fontTextLight};
      transition: 0.3s;
    }
  
  :hover {
    background-color: #cecece;
    transform: translateY(-15px);
    
    p {
      color: ${theme.colors.fontTextBold};
      transition: 0.3s;
    }
    img {
      filter: hue-rotate(90deg);
      transition: 0.3s;
    }
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const ProjectTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  margin: 27px 30px 17px 30px;
`;
const ProjectText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  color: ${theme.colors.fontTextLight};
  margin: 0px 30px 12px 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;


export const S = {
    ProjectLinkStyled,
    Text,
    ProjectTechContainer,
    TechTitle,
    ProjectTechStackText,
    StyledProjects,
    StyledProject,
    Image,
    ProjectTitle,
    ProjectText
}
