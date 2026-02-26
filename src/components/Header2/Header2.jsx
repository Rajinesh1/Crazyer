import React from 'react'
import './Header2.css'
import { assets } from '../../assets/assets'
const Header2 = () => {
  return (
    <div className='header2'>
    <img className='header2-img' src={assets.header2_img}/>
    <p className='header2-content'>
    <h2>Get up to</h2>
    <div className='para'>
      <h1>
        50%
      </h1>
      <h4>
      OFF
      </h4>
    </div>
   <button> Check out all the restaurants</button>
    </p>
    </div>
  )
}

export default Header2