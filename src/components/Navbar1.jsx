import { IoMail } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import logo from "../pics/logo.jpeg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
        <div>
            <div className='min-head'>
                <div className='wel-div'>
                    <p className='wel-mess'>Welcome to Sri Lakshmi Narasimha Agro Industries Rice Mill</p>
                </div>
                <div className='mail-div'>
                    <p className="maill-m"><IoMail />&nbsp;slnagro38@gamil.com</p>
                    <p className="maill-p"><MdOutlineAccessTimeFilled />&nbsp;Mon - Sat 8:00 - 6:30, Sunday - Closed</p>
                </div>
            </div>
        </div>

        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="header2">
              {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className={`bg-body-tertiary mb-3 ${scrolled ? "scrolled" : ""}`}>
                  <Container fluid >
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>

                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                          <NavLink to="/" >Home</NavLink>
                          <NavLink to="/products" >Products</NavLink>
                          <NavLink to="/team" >Team</NavLink>
                          <NavLink to="/about" >About Us</NavLink>
                          <NavLink to="/contact" >Contact</NavLink>
                        </Nav>
                        
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
          
            
                <span className="div-line">|</span>
                <div className="call-section">
                  <div className="call-box">
                    <div className="call-icon">
                      <IoCallOutline />
                    </div>
                    <div>
                      <p className="call-text">Call Anytime</p>
                      <p className="call-number">+91-9490104550 <br/> +91-9849272923</p>
                    </div>
                  </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar1
