import React from 'react'
import styled from 'styled-components'

import { colors } from '../../config/colors'
import { media } from '../../config/media'

const StyledButton = styled.button`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  padding: 0.5rem 1.5rem;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;
  background: none;
  transition: all 0.3s ease-out;
  margin: 2rem 0;

  ${media.lg`
     margin: 0;
  `}

  &:hover {
    background: ${({ highlight }) => highlight};
  }
`

const Button = ({ label, className, onClick, highlight }) => {
  return (
    <StyledButton
      colors={colors}
      className={className}
      onClick={onClick}
      highlight={highlight}
    >
      {label}
    </StyledButton>
  )
}

export default Button
