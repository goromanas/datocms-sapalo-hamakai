import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Button } from 'antd'

// import HammockImage from '../../../static/images/hammock.png'
import { colors } from '../../config/colors'
import Section from '../Section/Section'

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  max-width: 1140px;
  margin: 0 auto;
`

const StyledSection = styled(Section)`
  position: relative;
`
const ImageWrapper = styled.div`
  position: relative;
`
const Image1 = styled(Img)`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* border: 1px solid #fff; */
  transform: rotate(-10deg) translate(-50%, -50%);
  z-index: 10;
`

const Image2 = styled(Img)`
  width: 400px;
  position: absolute;
  top: -10%;
  left: 60%;
  /* border: 1px solid #fff; */
  transform: rotate(8deg);
  transition: all 0.3s ease-out;

  &:hover {
    z-index: 12;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  max-width: 400px;
  font-size: 0.9rem;

  > div {
    margin: 2rem 0;
  }

  p {
    margin: 2rem 0;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
`
const Info = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsInfo {
        title
        content
        photo1 {
          fluid(
            maxWidth: 2000
            forceBlurhash: false
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        photo2 {
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
    <StyledSection color={colors.dark}>
      <Container>
        <ContentWrapper>
          <Title>{data.datoCmsInfo.title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: data.datoCmsInfo.content }}
          ></div>
          <Button>Siųsti užklausą</Button>
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
