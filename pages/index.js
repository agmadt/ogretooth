import React from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product'

class Home extends React.Component {

  render () {
    return (
      <Layout title=" - Home">
        <div className="container break-words">
          <div className="mx-auto w-3/5 clearfix mb-16">
            <div className="float-left w-2/5">
              <div className="h-64 bg-grey-dark"></div>
              <div className="h-64 bg-grey-dark"></div>
            </div>
            <div className="float-left w-3/5">
              <div className="products__container clearfix">
                { [1,2,3,4,5,6].map((item) => (
                  <Product />
                )) }
              </div>
            </div>
          </div>
          <div className="mx-auto w-3/5 clearfix">
            <div className="float-left w-3/5">
              <div className="products__container clearfix">
                { [1,2,3,4,5,6].map((item) => (
                  <Product style="right" />
                )) }
              </div>
            </div>
            <div className="float-left w-2/5">
              <div className="h-64 bg-grey-dark"></div>
              <div className="h-64 bg-grey-dark"></div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home;