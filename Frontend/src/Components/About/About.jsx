import React from 'react'
import './About.css'
import about_img from '../../assets/flying.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Kings & Devils Today</h2>
        <p>Welcome to our enchanted academy, where magic and learning merge. Embark on a spellbinding journey with our curriculum, designed to empower students with the mystical knowledge and skills needed to excel in the world of magical education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring magical educators to make a meaningful impact in enchanted classrooms, mystical schools, and magical communities</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or magical leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of magical education.</p>
      </div>
    </div>
  )
}

export default About
