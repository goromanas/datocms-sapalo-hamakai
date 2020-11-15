import React from 'react'
import styled from 'styled-components'

import ForestBackground from '../../../static/images/forest.jpg'

import { media } from '../../config/media'
import Form from './Form/Form'

const Section = styled.div`
  height: 100vh;
  background: url(${({ background }) => background});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
`
const StyledForm = styled(Form)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  ${media.lg`
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

const Contact = () => {
  return (
    <Section background={ForestBackground} id="order">
      <StyledForm />
      <Overlay />
    </Section>
  )
}

export default Contact
