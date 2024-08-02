import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily A</h3>
                            <span>The School Of Good, India</span>
                        </div>
                    </div>
                    <p>Life-changing experience! The magical curriculum is both challenging and exhilarating. I've made lifelong friends and grown so much here</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jacob B</h3>
                            <span>The School Of Evil, USA</span>
                        </div>
                    </div>
                    <p>The School of Evil has brought out the best in me. The strategic thinking and dark arts classes are unparalleled. This school is about mastering magic.</p>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sophia C</h3>
                            <span>The School Of Good, Cananda</span>
                        </div>
                    </div>
                    <p>The supportive community and engaging lessons made it easy to adjust. The emphasis on kindness and courage has helped me grow magically and personally.</p>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Lucas D</h3>
                            <span>The School Of Evil, China</span>
                        </div>
                    </div>
                    <p>From potions to dark enchantments, the School of Evil offers an education like no other. The rigorous training has prepared me for any challenge.</p>

                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
