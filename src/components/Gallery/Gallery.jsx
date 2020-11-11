import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import Img from 'gatsby-image'

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`
const CarouselWrapper = styled.div`
  position: relative;
`
const Wrapper = styled.div`
  max-height: 100vh;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
`

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoScroll: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    focusOnSelect: false,
    fade: false
    // beforeChange: (current, next) => handleChange(current, next)
  }

  const images = useStaticQuery(graphql`
    {
      datoCmsGallery {
        gallery {
          url
          fluid(
            maxWidth: 200
            forceBlurhash: true
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  console.log(images)
  return (
    <CarouselWrapper>
      <Carousel {...settings}>
        {images.datoCmsGallery.gallery.map(item => (
          <Wrapper>
            <Image fluid={item.fluid} />
            {/* <img src={item.url} /> */}
          </Wrapper>
        ))}
      </Carousel>
      <Overlay />
    </CarouselWrapper>
  )
}

export default Gallery
