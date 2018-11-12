import React, { Component } from 'react'

class Product extends Component {
  render() {
    const style = (this.props.style === 'right') ? 'pr-4' : 'pl-4';
    return (
      <React.Fragment>
        <div className={'product__item w-1/3 mb-10 float-left text-center ' + style}>
          <div className="product__image h-32 mb-3 bg-grey-dark"></div>
          <div className="product__title text-center mb-3">HiLo Platinum Swiss Chocolate 420gr</div>
          <div className="product__price text-center mb-3">Rp. 95.000</div>
          <div className="product__add-to-cart text-center border border-green bg-transparent hover:bg-green hover:text-white cursor-pointer font-bold py-2 px-4 rounded-full inline-block mx-auto">Add to Cart</div>
        </div>
      </React.Fragment>
    )
  }
}

export default Product;
