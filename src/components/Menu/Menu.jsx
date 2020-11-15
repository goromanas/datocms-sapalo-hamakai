import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

import { colors } from '../../config/colors'
import { media } from '../../config/media'

const MenuWrapper = styled.div`
  display: none;
  align-items: center;

  ${media.lg`
      display: flex;
  `};
`
const MenuItem = styled.div`
  padding: 0 1rem;
  color: #fff;

  &:last-child {
    background-color: ${({ colors }) => colors.accent};
    padding: 0.5rem 2rem;
    border-radius: 20px;
  }
`

const Menu = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsMenu(sort: { fields: [id], order: ASC }) {
        edges {
          node {
            title
            id
            generalLink
          }
        }
      }
    }
  `)

  return (
    <MenuWrapper className={className}>
      {data.allDatoCmsMenu.edges.map(item => (
        <MenuItem key={item.node.id} colors={colors}>
          <AnchorLink to={`/#${item.node.generalLink}`}>
            {item.node.title}
          </AnchorLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  )
}

export default Menu
