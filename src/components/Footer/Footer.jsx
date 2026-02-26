import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-logo'>
        <h1>CRAZYER</h1>
        <div className='footer-content'>
            <div className='footer-content-center'>
            <h3 className='footer-about'>&nbsp;ABOUT<br/>
            CRAZYER</h3><br/>
            <ul className='list'>
                <li>Who We Are</li><br/>
                <li>Blog</li><br/>
                <li>Work With Us</li><br/>
                <li>Investor Relation</li><br/>
                <li>Report Fraud</li><br/>
                <li>Press Kit</li><br/>
                <li>Contact Us</li><br/>
            </ul>
            </div>
            <div>

            <h3>CRAZYERVERSE</h3><br/>
            <ul className='list'>
                <li><a href=''>Crazyer</a></li><br/>
                <li><a href='https://blinkit.com/' target='blank'>Blinkit</a></li><br/>
                <li><a href='https://www.district.in/' target='blank'>District</a></li><br/>
                <li>Feeding India</li><br/>
                <li>Hyperpure</li><br/>
                <li>Crazyer Live</li><br/>
                <li>Crazyland</li><br/>
                <li>Weather Union</li><br/>
            </ul>
            </div>
            <div>
                <h3>FOR RESTAURANTS</h3><br/>
                <ul className='list'>
                    <li>Partner With Us</li><br/>
                    <li>Apps For You</li><br/>
                </ul>
            </div>
            <div>
            <h3>LEARN MORE</h3><br/>
                <ul className='list'>
                    <li>
                        Privacy
                    </li><br/>
                    <li>Security</li><br/>
                    <li>Terms</li><br/>
                </ul>
            </div>
              <div className='footer-social-icons'>
              <h3>&nbsp;&nbsp;Social Links</h3><br/>&nbsp;&nbsp;
           <a href='https://www.facebook.com/' target='blank'> <img href='https://www.facebook.com/' className='store-logo1' src={assets.facebook_icon} alt='facebook icon'/>&nbsp;&nbsp;&nbsp;&nbsp;</a>
           <a href='https://x.com/?lang=en-in' target='blank'> <img className='store-logo1' src={assets.twitter_icon} alt=''/> </a>&nbsp;&nbsp;&nbsp;
           <a href='https://x.com/?lang=en-in' target='blank'> <img className='store-logo1' src={assets.linkedin_icon} alt='linked icon'/></a><br/><br/><br/>
           <a href='https://play.google.com/' target='blank'> <img className="store-logo" src={assets.play_store} alt='play store'/></a><br/><br/><br/>
           <a href='https://www.apple.com/app-store/' target='blank'> <img className='store-logo' src={assets.app_store} alt='appStore-icon'/></a>
            </div>
                </div>

        </div>
        <div className='bottom-line'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Crazyer™ Ltd. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer