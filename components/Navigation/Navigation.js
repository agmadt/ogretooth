import React, { Component } from 'react'
import Link from 'next/link';

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-red text-white">
          <div className="container mx-auto w-3/5 clearfix">
            <div className="float-left w-3/5">
              <ul className="list-reset">
                <li className="py-4">
                  <Link href="/">
                    <a className="no-underline block text-white font-bold">BabyStore</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="float-left w-2/5">
              <ul className="list-reset float-right">
                <li className="float-left">
                  <Link href="/browse">
                    <a className="no-underline block text-white px-3 py-4 hover:bg-red-dark">Browse</a>
                  </Link>
                </li>
                <li className="float-left">
                  <Link href="/category">
                    <a className="no-underline block text-white px-3 py-4 hover:bg-red-dark">Category</a>
                  </Link>
                </li>
                <li className="float-left">
                  <Link href="/brand">
                    <a className="no-underline block text-white px-3 py-4 hover:bg-red-dark">Brand</a>
                  </Link>
                </li>
                <li className="float-left">
                  <Link href="/blog">
                    <a className="no-underline block text-white px-3 py-4 hover:bg-red-dark">Blog</a>
                  </Link>
                </li>
                <li className="float-left pl-4 py-4">
                  <a>Cart</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
