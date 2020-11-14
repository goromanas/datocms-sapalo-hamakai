import React from 'react'
import Layout from '../Layouts/layout'

import '../styles/reset.scss'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Perks from '../components/Perks/Perks'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import Info from '../components/Info/Info'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About />
    <Info />
    <Perks />
    <Contact />

    {/* <Gallery /> */}
    <Footer />
    <SEO title="Pagrindinis" />
  </Layout>
)

export default IndexPage
