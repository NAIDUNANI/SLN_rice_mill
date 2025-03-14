import React, { useRef } from "react";
import Navbar from './Navbar1'
import Footer from './Footer'
import underline from "../pics/under-line.png";
import { FaLocationDot, FaMobileScreen  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("This feature is coming soon! 🚀");
        form.current.reset(); 
    };
  return (
    <>
    <Navbar/>
        <div>
            <div className='contact-head'>
                <h1>Contact Us</h1>
                <img src={underline} width='230'></img>
            </div>
            <div className='contact-bd'>
                <div className='sub-cont'>
                    <FaLocationDot style={{color:'rgb(54, 107, 0)',marginTop:'1rem',fontSize:'30px'}}/>
                    <h4>Sri Lakshmi Narasimha Agro Industries Rice Mill (SLN Agro)</h4>
                    <p>Dimilada, Kantragada,&nbsp; Andhra Pradesh, India-532212.</p>
                </div>
                <div className='sub-cont'>
                    <FaLocationDot style={{color:'rgb(54, 107, 0)',fontSize:'30px'}}/>
                    <h4>Sri Lakshmi Narasimha Morden Rice Mill (SLN MRM)</h4>
                    <p>Dimilada,&nbsp; Andhra Pradesh, India-532212.</p>
                </div>
                <div className='sub1-cont'>
                    <MdEmail style={{color:'rgb(54, 107, 0)',marginTop:'-1rem',fontSize:'30px'}}/>
                    <h4>Mail us</h4>
                    <p>slnagro38@gamil.com</p>
                </div>
                <div className='sub1-cont'>
                    <FaMobileScreen style={{color:'rgb(54, 107, 0)',fontSize:'30px'}}/>
                    <h4>Call us</h4>
                    <p>+91-9490104550<br/>+91-9849272923</p>
                </div>
            </div>

            <div className='mess-loc'>
                <div className='mess'>
                    <h3>Reach us</h3>
                    <form ref={form} onSubmit={handleSubmit} className="mess-box">
                        <input type="text" placeholder="Enter your name..." required />
                        <input type="email" placeholder="Enter your email..." required />
                        <input type="tel" placeholder="Enter your number..." required />
                        <textarea placeholder="Type your message..." required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='map-loc'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8422801028505!2d84.2841980746546!3d18.626162465941288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3dab63fcccebdf%3A0xd534396296ef3a2a!2sSri%20Lakshmi%20Narasimha%20Agro%20Industries!5e0!3m2!1sen!2sin!4v1741169616136!5m2!1sen!2sin" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Contact
