import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Cphoto1.jpg'
import gallery_2 from '../../assets/Cphoto8.webp'
import gallery_3 from '../../assets/Cphoto5.jpg'
import gallery_4 from '../../assets/Cphoto7.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img className='first' src={gallery_1} alt="" />
        <img className='second' src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img className='forth' src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
