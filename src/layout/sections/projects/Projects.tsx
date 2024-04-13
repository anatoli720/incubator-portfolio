import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';

export const Projects = () => {

    return (
        <StyledProjects>
<SectionTitle>Projects</SectionTitle>
<SectionText>Things I’ve built so far</SectionText>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    
  background-color: #f3dd7a;
   
`