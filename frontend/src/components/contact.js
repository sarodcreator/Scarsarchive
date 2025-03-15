import React from 'react'
import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';
import './style.css';
import { Sendbtn } from './buttons';

const index = () => {
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
                <form action="submit">
                    <input type="text" placeholder='Name' id='Name' />
                    <input type="email" placeholder='Email' id='email' />
                    <input type="text" placeholder='Message' id='message' className='textarea' />
                    <Sendbtn className="sendBtn"/>
                </form>
            </div>
        </div>
    )
}

export default index;