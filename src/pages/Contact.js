import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import './Contact.css';
function Contact() {
  return (
    <div>
     <div className="navbar">
      <Navbar/>
     </div>
     <div className="remaining">
     <h1 style={{color:'black', marginRight:'auto'}}>Contact us</h1>
      <div className="contact-page">
      <div className="contact-info-contanier">
        <label>Enter Name</label>
        <input type="text" name="name" placeholder ='enter name' id="" />
        <label>Enter email</label>
        <input type="email" name="email" placeholder ='enter email' id="" />
        <label>Enter Subject</label>
        <input type="text" name="subject" placeholder ='enter subject'  />
        <label>Enter Message</label>
        <textarea type="text" name="message" placeholder ='enter message' />
        <label>Enter Phone Number</label>
        <input type="text" name="phno" placeholder ='enter phone number' pattern="[0-9]*" inputMode="numeric" id="" /> 
        <button className='Contact-submit'>submit</button>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Contact
