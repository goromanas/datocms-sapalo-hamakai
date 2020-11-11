import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Button } from 'antd'

import { colors } from '../../config/colors'
import Section from '../Section/Section'
import HomeIcon from '../../../static/images/home.png'

const Home = styled.img`
  max-width: 100px;
`

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
const Content = styled.div`
  text-align: center;
  color: ${({ colors }) => colors.white};
  font-size: 1.2rem;
`
const Title = styled.h1`
  color: ${({ colors }) => colors.white};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
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
    <StyledSection color={colors.green}>
      <Home src={HomeIcon} />
      <Title colors={colors}>{data.datoCmsAbout.title}</Title>
      <Content
        colors={colors}
        dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.content }}
      />
      <Button>{data.datoCmsAbout.buttonText}</Button>
    </StyledSection>
  )
}
export default About
