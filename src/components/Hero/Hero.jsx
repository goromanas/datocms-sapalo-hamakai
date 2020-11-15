import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HeroImageSrc from '../../../static/images/hero.png'
import { colors } from '../../config/colors'
import { media } from '../../config/media'
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
  bottom: 0;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translate(-50%, -20%);
  }
`

const HeroImage = styled.img`
  user-select: none;
  max-width: 100%;
  position: relative;
  transform: translateX(10%);
  ${media.lg`
    max-width: 900px;
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translateX(-10%);
  `};
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
            maxWidth: 2000
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
      <ArrowDownImage src={ArrowDown} colors={colors} />
    </Section>
  )
}
export default Hero
