import React from 'react'
import './main.css'
import img1 from './../../images/picture01.jpg'
import img2 from './../../images/picture02.jpg'
import img3 from './../../images/picture03.jpg'
import img4 from './../../images/picture04.jpg'
import img5 from './../../images/picture05.jpg'
import img6 from './../../images/picture06.jpg'
import img7 from './../../images/picture07.jpg'
import img8 from './../../images/picture08.jpg'
import arrow from './../../images/arrow_icon.png'

const Main = () => {
  return (
    <div className='Main'>
      <h3 className='Main-title'>Recently added items</h3>
      <div className='Main-gallery-wrap'> 
        <div className='Main-gallery-item'><img src={img1} alt=""/></div>
        <div className='Main-gallery-item'><img src={img2} alt=""/></div>
        <div className='Main-gallery-item'><img src={img3} alt=""/></div>
        <div className='Main-gallery-item'><img src={img4} alt=""/></div>
        <div className='Main-gallery-item'><img src={img5} alt=""/></div>
        <div className='Main-gallery-item'><img src={img6} alt=""/></div>
        <div className='Main-gallery-item'><img src={img7} alt=""/></div>
        <div className='Main-gallery-item'><img src={img8} alt=""/></div>
      </div>
      <div className='Main-bottom'>
        <p className='Main-bottom-text'>Download the Free App <span>to see more items</span></p>
        <div className='Main-bottom-icon'><img src={arrow} alt=""/></div>
      </div>
    </div>
  )
}

export default Main
