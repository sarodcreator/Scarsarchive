import React from 'react';
import { Hirebtntransparent } from './buttons';
import './style.css'

const packages = () => {
  return (
    <div className="package-sec">
        <h2>Packages</h2>
        <div className="package-sec-container">
          <div className="package-container left">
              <p>12X15</p>
              <p>150 images</p>
              <p>26 pages including cover page</p>
              <h4>₦10,000</h4>
          </div>
          <div className="package-container m">
              <p>12X12</p>
              <p>100 images</p>
              <p>26 pages including cover page</p>
              <h4>₦10,000</h4>
          </div>
          <div className="package-container right">
              <p>12X18</p>
              <p>250 images</p>
              <p>Introduction Page</p>
              <p>7 pages including cover page</p>
              <h4>₦15,000</h4>
          </div>
        </div>
        <div className="packagesbtn">
              <Hirebtntransparent />
        </div>
    </div>
  )
}

export default packages