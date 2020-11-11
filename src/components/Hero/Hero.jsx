import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HeroImageSrc from '../../../static/images/hero.png'
import { colors } from '../../config/colors'
import Section from '../Section/Section'
import Menu from '../Menu/Menu'
import ArrowDown from '../../../static/images/arrow-down.svg'

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledMenu = styled(Menu)``

const Logo = styled(Img)`
  width: 100px;
  height: auto;
`
const Header = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  max-width: 1170px;
  justify-content: space-between;
`
const ArrowDownImage = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  bottom: 2%;
  transform: translateX(-50%);
`

const HeroImage = styled.img`
  max-width: 900px;
  position: absolute;
  top: 35%;
  left: 30%;
  user-select: none;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHero {
        heroTitle
        heroImage {
          url
        }
        logo {
          fluid(
            maxWidth: 200
            forceBlurhash: false
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <Section color={colors.main}>
      <Header>
        <Logo fluid={data.datoCmsHero.logo.fluid} />
        <StyledMenu />
      </Header>
      <StyledHero>
        <HeroImage src={HeroImageSrc} />
      </StyledHero>
      <ArrowDownImage src={ArrowDown} />
    </Section>
  )
}
export default Hero
