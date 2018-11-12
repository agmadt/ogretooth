import Head from 'next/head';
import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default ({children, title}) => (
  <React.Fragment>
    <Head>
      <title>BabyStore{ title }</title>
    </Head>

    <Navigation />

    { children }

    <Footer />
  </React.Fragment>
)