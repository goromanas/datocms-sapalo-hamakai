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
  max-width: 1000px;
  min-height: 50vh;
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
            icon {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <StyledSection color={colors.white}>
      {data.allDatoCmsPerk.edges.map(item => (
        <Single
          key={item.node.id}
          perk={item.node.perk}
          icon={item.node.icon.url}
        />
      ))}
    </StyledSection>
  )
}
export default Perks
