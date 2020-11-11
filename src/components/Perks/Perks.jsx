import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Section from '../Section/Section'

import { colors } from '../../config/colors'
import Single from './Single/Single'

const StyledSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
`

const Perks = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPerk {
        edges {
          node {
            perk
            id
          }
        }
      }
    }
  `)
  return (
    <StyledSection color={colors.white}>
      {data.allDatoCmsPerk.edges.map(item => (
        <Single key={item.node.id} perk={item.node.perk} />
      ))}
    </StyledSection>
  )
}
export default Perks
