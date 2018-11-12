import Head from 'next/head';
import React from 'react'
import Navigation from './Navigation/Navigation'

export default ({children, title}) => (
  <React.Fragment>
    <Head>
      <title>BabyStore{ title }</title>
    </Head>

    <Navigation />

    { children }
  </React.Fragment>
)