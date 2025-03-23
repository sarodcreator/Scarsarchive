// import React from 'react'
// import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';
// import './style.css';
// import { Sendbtn } from './buttons';

// const index = () => {
//     return (
//         <div className="contact-sec">
//             <div className='contact-l'>
//                 <h2 className="title" style={{ fontWeight: '600px' }}>TALK TO US</h2>
//                 <p style={{ marginTop: '6 px' }}>Sign up for our newsletter to receive album inspirations and ideas, updates, information on album making, cost, and coverage. Please send a message if you have any problem. We would love to hear from you.</p>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>CONNECT WITH OUR SOCIAL MEDIA</h4>
//                     <div className='social-icons'>
//                         <FaFacebook style={{ fontSize: '16px', color: '#727272' }} />
//                         <FaTelegram style={{ fontSize: '16px', color: '#727272' }} />
//                         <FaLinkedin style={{ fontSize: '16px', color: '#727272' }} />
//                     </div>
//                 </div>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>REACH US ON EMAIL</h4>
//                     <p style={{ marginTop: '6px' }}>biragbaradornu93@yahoo.com</p>
//                 </div>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>CALL US</h4>
//                     <p style={{ marginTop: '6px', fontSize: '14px' }}>+234 902 881 4293</p>
//                     {/*<p style={{ marginTop: '-2px', fontSize: '14px' }}>+234 906 791 4516</p>*/}
//                 </div>
//             </div>
//             <div className='contact-r'>
//                 <form action="submit">
//                     <input type="text" placeholder='Name' id='Name' />
//                     <input type="email" placeholder='Email' id='email' />
//                     <input type="text" placeholder='Message' id='message' className='textarea' />
//                     <Sendbtn className="sendBtn"/>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default index;

import React, { useState } from "react";
import { FaFacebook, FaTelegram, FaLinkedin } from "react-icons/fa";
import SendBtn from "../buttons/SendBtn"; // Ensure this import is correct
import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSend = () => {
    const { name, message } = formData;
    if (!name || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Mailto link to open user's email client
    const mailtoLink = `mailto:admin@example.com?subject=New%20Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-sec">
      <div className="contact-1">
        <h2 className="title" style={{ fontWeight: "600px" }}>TALK TO US</h2>
        <p style={{ marginTop: "8px" }}>Sign up for our newsletter to receive album inspirations and ideas.</p>
        <div className="cont">
          <h4 style={{ fontWeight: "500px", marginTop: "40px" }}>CONNECT WITH OUR SOCIAL MEDIA</h4>
          <div className="social-icons">
            <FaFacebook style={{ fontSize: "40px", color: "#727272" }} />
            <FaTelegram style={{ fontSize: "40px", color: "#727272" }} />
            <FaLinkedin style={{ fontSize: "40px", color: "#727272" }} />
          </div>
        </div>
      </div>

      <div className="contact-2">
        <h4 style={{ fontWeight: "500px", marginTop: "40px" }}>REACH US ON EMAIL</h4>
        <p style={{ fontSize: "14px" }}>support@yourdomain.com</p>
        <h4 style={{ fontWeight: "500px", marginTop: "40px" }}>CALL US</h4>
        <p style={{ fontSize: "14px" }}>+234 922 801 4293</p>
        <p style={{ fontSize: "14px" }}>+234 906 791 4516</p>
      </div>

      <div className="contact-3">
        <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <textarea id="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="textarea"></textarea>
        <SendBtn onClick={handleSend} />
      </div>
    </div>
  );
};

export default Contact;