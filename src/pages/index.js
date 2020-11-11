import React from 'react'
import Layout from '../Layouts/layout'

import '../styles/reset.scss'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Perks from '../components/Perks/Perks'
import Footer from '../components/Footer/Footer'
import Gallery from '../components/Gallery/Gallery'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About />
    <Perks />
    <Gallery />
    <Footer />
  </Layout>
)

export default IndexPage
