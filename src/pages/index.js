import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../Layouts/layout'

import '../styles/reset.scss'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Perks from '../components/Perks/Perks'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About />
    <Perks />
  </Layout>
)

export default IndexPage
