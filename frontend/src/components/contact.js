import React, { useState } from 'react'
import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';
import './style.css';
import { Sendbtn } from './buttons';

const Index = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name] : e.target.value })
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("message", input.message);
        console.log(formData);
    };
    return (
        <div className="contact-sec">
            <div className='contact-l'>
                <h2 className="title" style={{ fontWeight: '600px' }}>TALK TO US</h2>
                <p style={{ marginTop: '6 px' }}>Sign up for our newsletter to receive album inspirations and ideas, updates, information on album making, cost, and coverage. Please send a message if you have any problem. We would love to hear from you.</p>
                <div className='cont'>
                    <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>CONNECT WITH OUR SOCIAL MEDIA</h4>
                    <div className='social-icons'>
                        <FaFacebook style={{ fontSize: '16px', color: '#727272' }} />
                        <FaTelegram style={{ fontSize: '16px', color: '#727272' }} />
                        <FaLinkedin style={{ fontSize: '16px', color: '#727272' }} />
                    </div>
                </div>
                <div className='cont'>
                    <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>REACH US ON EMAIL</h4>
                    <p style={{ marginTop: '6px' }}>biragbaradornu93@yahoo.com</p>
                </div>
                <div className='cont'>
                    <h4 style={{ fontWeight: '500px', marginTop: '40px' }}>CALL US</h4>
                    <p style={{ marginTop: '6px', fontSize: '14px' }}>+234 902 881 4293</p>
                    {/*<p style={{ marginTop: '-2px', fontSize: '14px' }}>+234 906 791 4516</p>*/}
                </div>
            </div>
            <div className='contact-r'>
                <form onSubmit={submitHandler}>
                    <input type="text" name="fullname" value={input.fullname} onChange={changeEventHandler} placeholder='Name' id='fullname' />
                    <input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder='Email' id='email' />
                    <input type="textArea" name="message" value={input.message} onChange={changeEventHandler} placeholder='Message' id='message' className='textarea' />
                    <Sendbtn />
                </form>
            </div>
        </div>
    )
}

export default Index;

// import React, { useState } from "react";
// import { FaFacebook, FaTelegram, FaLinkedin } from "react-icons/fa";
// import { Sendbtn } from "./buttons"; 
// import "./style.css";

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.id]: e.target.value });
//     };

//     const handleSend = () => {
//         const { name, email, message } = formData;
//         if (!name || !email || !message) {
//             alert("Please fill in all required fields.");
//             return;
//         }

//         // Corrected mailto link
//         const mailtoLink = `mailto:sarobaridoo@gmail.com?subject=New%20Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
//         window.location.href = mailtoLink;
//     };

//     return (
//         <div className="contact-sec">
//             <div className="contact-1">
//                 <h2 className="title" style={{ fontWeight: "600" }}>TALK TO US</h2>
//                 <p style={{ marginTop: "8px" }}>Sign up for our newsletter to receive album inspirations and ideas.</p>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: "500", marginTop: "40px" }}>CONNECT WITH OUR SOCIAL MEDIA</h4>
//                     <div className='social-icons'>
//                         <FaFacebook style={{ fontSize: '24px', color: '#727272' }} />
//                         <FaTelegram style={{ fontSize: '24px', color: '#727272' }} />
//                         <FaLinkedin style={{ fontSize: '24px', color: '#727272' }} />
//                     </div>
//                 </div>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: "500", marginTop: "40px" }}>REACH US ON EMAIL</h4>
//                     <p style={{ marginTop: "6px" }}>biragbaradornu93@yahoo.com</p>
//                 </div>
//                 <div className='cont'>
//                     <h4 style={{ fontWeight: "500", marginTop: "40px" }}>CALL US</h4>
//                     <p style={{ marginTop: "6px", fontSize: "14px" }}>+234 902 881 4293</p>
//                 </div>
//             </div>

//             <div className="contact-r">
//                 <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//                 <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//                 <textarea id="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="textarea"></textarea>
//                 <Sendbtn onClick={handleSend} />
//             </div>
//         </div>
//     );
// };

// export default Contact;