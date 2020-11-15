import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

// import HammockImage from '../../../static/images/hammock.png'
import { colors } from '../../config/colors'
import { media } from '../../config/media'
import Section from '../Section/Section'
import Button from '../Button/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 100%;

  ${media.lg`
      display: grid;
      grid-template-columns: 50% 50%;
      max-width: 1140px;
  `};
`

const StyledSection = styled(Section)`
  position: relative;
  min-height: 100vh;
  padding: 0 1rem;

  ${media.lg`
      padding: 0;
  `};
`
const ImageWrapper = styled.div`
  position: static;

  ${media.lg`
      grid-template-columns: 50% 50%;
      max-width: 1140px;
  `};
`
const Image1 = styled(Img)`
  width: 100%;
  height: auto;
  position: static;

  ${media.lg`
      position: absolute;
      transform: rotate(-10deg) translate(-50%, -50%);
      z-index: 10;
      top: 55%;
      left: 50%;
      width: 300px;
  `};
`

const Image2 = styled(Img)`
  width: 100%;
  top: 0;
  left: 0;

  /* border: 1px solid #fff; */
  transform: rotate(8deg);
  transition: all 0.3s ease-out;
  display: none;

  ${media.lg`
    display: block;
    width: 400px;
    position: absolute;
    top: -20%;
    left: 60%;
  `};
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: 0.9rem;
  text-align: justify;

  > div {
    margin: 2rem 0;
  }

  p {
    margin: 2rem 0;
  }

  ${media.lg`
    max-width: 400px;
  `};
`

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  ${media.lg`
    max-width: 400px;
    margin-top: 0;
  `};
`
const Info = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsInfo {
        title
        content
        photo1 {
          fluid(
            maxWidth: 800
            forceBlurhash: false
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        photo2 {
          fluid(
            maxWidth: 800
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
    <StyledSection color={colors.dark}>
      <Container>
        <ContentWrapper>
          <Title>{data.datoCmsInfo.title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: data.datoCmsInfo.content }}
          ></div>
          <AnchorLink to={`/#order`}>
            <Button label="Siųsti užklausą" highlight={colors.green} />
          </AnchorLink>
        </ContentWrapper>
        <ImageWrapper>
          <Image1 fluid={data.datoCmsInfo.photo1.fluid} colors={colors} />
          <Image2 fluid={data.datoCmsInfo.photo2.fluid} colors={colors} />
        </ImageWrapper>
      </Container>
    </StyledSection>
  )
}

export default Info
