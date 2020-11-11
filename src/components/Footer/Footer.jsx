import React from 'react'
import styled from 'styled-components'

import { colors } from '../../config/colors'

const StyledFooter = styled.div`
  background: ${({ colors }) => colors.cyan};
  height: 300px;
`

const Footer = () => <StyledFooter colors={colors}>Footer</StyledFooter>

export default Footer
