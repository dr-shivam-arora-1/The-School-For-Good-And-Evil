import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import emailjs from 'emailjs-com';


const Contact = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const onSubmit = async (event) => {
      event.preventDefault();
      const templateParams = {
        name: name,
        user_email: email,
        message: message,
      };
      emailjs.send('service_jwzp32i', 'template_ca5yipu', templateParams, 'glnZ7in_eGdHY-uAf')
      .then((result) => {
        alert('Email sent successfully!');
        setName("")
        setEmail("")
        setMessage("")


      }, (error) => {
        alert('Failed to send email.');
      });

      
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />shivamarora2024y@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 0123456789</li>
            <li><img src={location_icon} alt="" />New Delhi<br/> Delhi , India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name here' required/>
            <label>Email</label>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter your email here' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
