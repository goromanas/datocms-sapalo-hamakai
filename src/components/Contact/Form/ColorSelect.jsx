import React from 'react'
import styled, { css } from 'styled-components'
import { Tooltip } from 'antd'

import WoodIcon from '../../../../static/images/wood.svg'
import { colors } from '../../../config/colors'

const commonStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: translateY(-10%);
  }
`

const Wood = styled.div`
  ${commonStyle}
  
  background: url(${({ icon }) => icon});
  border: ${({ color }) => (color === 'wood' ? `3px solid #706578` : null)};
`

const White = styled.div`
  ${commonStyle}
  border: ${({ color }) => (color === 'white' ? `3px solid #706578` : null)};
  background: #fff;
`

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

const Title = styled.div`
  padding-bottom: 1rem;
`

const ColorSelect = ({ color, setColor }) => {
  function handleColorChange(value) {
    setColor(value)
    console.log(color)
  }
  return (
    <Wrapper>
      <Title>Pasirinkite spalvą</Title>
      <Options>
        <Tooltip title="Medžio natūrali">
          <Wood
            icon={WoodIcon}
            colors={colors}
            onClick={() => handleColorChange('wood')}
            color={color}
          />
        </Tooltip>
        <Tooltip title="Balta">
          <White
            colors={colors}
            onClick={() => handleColorChange('white')}
            color={color}
          />
        </Tooltip>
      </Options>
    </Wrapper>
  )
}

export default ColorSelect
