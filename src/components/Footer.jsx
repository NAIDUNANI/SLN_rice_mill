import React from 'react'
import { Link } from "react-router-dom";
import logo from "../pics/logo.jpeg";
import { MdEmail } from "react-icons/md";
import { FaCircleArrowRight, FaLocationDot, FaMobileScreen  } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="mill-des">
            <img className="foot-logo" src={logo}></img>
            <div>
                <p>
                Sri Lakshmi Narasimha Agro Industries is a leading Indian rice mill committed to producing and supplying high-quality rice. 
                Using advanced milling technology and strict quality control, we ensure superior grains. Our dedication to hygiene 
                and sustainability has established us as a trusted name across India, serving households, retailers, and businesses.
                </p>
            </div>
        </div>

        <div className="links">
            <h3 style={{
                color:'aliceblue'
            }}>Links</h3>
            <ul>
                <li><span><FaCircleArrowRight /></span>&nbsp;&nbsp; <Link to="/">Home</Link></li>
                <li><span><FaCircleArrowRight /></span>&nbsp;&nbsp; <Link to="/products">Products</Link></li>
                <li><span><FaCircleArrowRight /></span>&nbsp;&nbsp; <Link to="/team">Team</Link></li>
                <li><span><FaCircleArrowRight /></span>&nbsp;&nbsp; <Link to="/about">About Us</Link></li>
                <li><span><FaCircleArrowRight /></span>&nbsp;&nbsp; <Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="loc1">
            <FaLocationDot style={{color:'rgb(54, 107, 0)',fontSize:'20px',marginTop:'-5px'}}/> <span> Sri Lakshmi Narasimha AgroIndustries Rice Mill (SLN Agro)</span>
            <br/><p>Dimilada, Kantragada, Andhra Pradesh, India-532212.</p>
        </div>

        <div className="loc2">
            <FaLocationDot style={{color:'rgb(54, 107, 0)',fontSize:'20px',marginTop:'-5px'}}/><span> Sri Lakshmi Narasimha Morden Rice Mill (SLN MRM) </span>
            <br/><p>Dimilada, Andhra Pradesh, India-532212.</p>
        </div>

        <div className="foot-cont">
            <h3>Contact</h3>
            <div className="cont-sec">
                <div>
                    <span><MdEmail style={{color:'rgb(54, 107, 0)',fontSize:'20px'}}/> <span style={{color:'aliceblue', marginLeft:'5px'}}>slnagro38@gamil.com</span></span>
                </div>
                <div>
                    <span><FaMobileScreen style={{color:'rgb(54, 107, 0)', fontSize:'20px',marginTop:'-30px'}}/> <span style={{color:'aliceblue', marginLeft:'5px'}}>+91-9490104550<br/> +91-9849272923</span></span>
                    
                </div>
            </div>
        </div>
    </footer>
    <div className="foot-down">
            <p className="bottom">Copyright © 2025 Sri Lakshmi Narasimha Agro Industries Rice Mill Pvt. Ltd.  All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
