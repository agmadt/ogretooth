import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="bg-green text-white py-4 border-t border-red">
          <div className="w-3/5 mx-auto clearfix">
            <div className="w-2/5 float-left">
              <h4>Contact</h4>
              <div className="py-2 pr-4 text-sm">
                <div className="pb-1">Mon-Fri 09.00 - 17.00</div>
                <div className="pb-1">Sat 09.00 - 13.00</div>
                <div className="pb-1">031-1231123</div>
                <div className="pb-1">081-1122334512</div>
                <div className="pb-1">help@babystore.com</div>
              </div>
            </div>
            <div className="w-1/5 float-left">
              <h4>Help</h4>
              <div className="py-2 pr-4 text-sm">
                <div className="pb-1">How to Buy</div>
                <div className="pb-1">How to Pay</div>
                <div className="pb-1">Confirms Payment</div>
                <div className="pb-1">Contact Us</div>
              </div>
            </div>
            <div className="w-1/5 float-left">
              <h4>Policy</h4>
              <div className="py-2 pr-4 text-sm">
                <div className="pb-1">Privacy Policy</div>
                <div className="pb-1">Terms & Condition</div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}
