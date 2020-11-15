import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ForestBackground from '../../../static/images/hammock_river.jpg'
import { colors } from '../../config/colors'
import Section from '../Section/Section'
import Button from '../Button/Button'

const StyledSection = styled(Section)`
  justify-content: center;
  background: url(${({ background }) => background});
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  position: relative;
`
const Content = styled.div`
  text-align: center;
  color: ${({ colors }) => colors.white};
  font-size: 1rem;
`
const Title = styled.h1`
  color: ${({ colors }) => colors.white};
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-align: center;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
`

const ContentWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsAbout {
        title
        content
        buttonText
      }
    }
  `)
  return (
    <StyledSection id="hammocks" background={ForestBackground}>
      <ContentWrapper>
        <Title colors={colors}>{data.datoCmsAbout.title}</Title>
        <Content
          colors={colors}
          dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.content }}
        />

        <Button
          label={data.datoCmsAbout.buttonText}
          highlight={colors.dark}
        ></Button>
      </ContentWrapper>
      <Overlay />
    </StyledSection>
  )
}
export default About
