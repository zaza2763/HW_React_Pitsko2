import React from 'react'
import './footer.css'
import fbIcon from './../../images/fb_icon.png'
import twitterIcon from './../../images/twitter_icon.png'
import instaIcon from './../../images/insta_icon.png'
import pinIcon from './../../images/pin_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-links'>
        <p className='Footer-link'>About </p>
        <p className='Footer-link'>How it Works </p>
        <p className='Footer-link'>FAQs </p>
        <p className='Footer-link'>Privacy Policy</p>
      </div>
      <div className='Footer-icons'>
        <div className='Footer-icon'><img src={fbIcon} alt=""/></div>
        <div className='Footer-icon'><img src={twitterIcon} alt=""/></div>
        <div className='Footer-icon'><img src={instaIcon} alt=""/></div>
        <div className='Footer-icon'><img src={pinIcon} alt=""/></div>
      </div>
    </div>
  )
}

export default Footer
