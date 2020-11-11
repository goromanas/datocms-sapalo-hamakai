import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  height: 100vh;
  background: ${({ color }) => color};
`

const Section = ({ children, color, className }) => (
  <StyledSection color={color} className={className}>
    {children}
  </StyledSection>
)

export default Section
