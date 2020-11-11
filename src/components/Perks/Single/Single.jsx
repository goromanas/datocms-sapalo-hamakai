import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../config/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: center;
`

const Image = styled.img`
  width: 150px;
  object-fit: fit;
  border-radius: 75px;
  border: 2px solid ${({ colors }) => colors.accent};
`
const Title = styled.h4`
  padding-top: 1rem;
`

const Single = ({ perk }) => {
  return (
    <Wrapper>
      <Image src="https://via.placeholder.com/150" alt={perk} colors={colors} />
      <Title>{perk}</Title>
    </Wrapper>
  )
}
export default Single
