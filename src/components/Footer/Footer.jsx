import React from 'react'
import styled from 'styled-components'

import { colors } from '../../config/colors'

const StyledFooter = styled.div`
  background: ${({ colors }) => colors.cyan};
  color: ${({ colors }) => colors.dark};
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => (
  <StyledFooter colors={colors}>
    © {new Date().getFullYear()} Šapalo hamakai.
  </StyledFooter>
)

export default Footer
