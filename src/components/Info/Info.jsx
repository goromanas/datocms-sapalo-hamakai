import React from 'react'
import styled from 'styled-components'

import HammockImage from '../../../static/images/hammock.png'
import { colors } from '../../config/colors'
import Section from '../Section/Section'

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
`

const StyledSection = styled(Section)`
  position: relative;
`

const Image = styled.img`
  max-width: 800px;
`
const Info = () => {
  return (
    <StyledSection color={colors.yellow}>
      <Container>
        <Image src={HammockImage} />
      </Container>
    </StyledSection>
  )
}

export default Info
