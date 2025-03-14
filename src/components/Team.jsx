import React from 'react'
import Navbar from './Navbar1'
import Footer from './Footer'
import underline from "../pics/under-line.png";
import founder from "../pics/founder.jpeg";
import ceo1 from "../pics/ceo1.jpeg";
import ceo2 from "../pics/ceo2.jpeg";
import ceo3 from "../pics/ceo3.jpeg";
import underteam from "../pics/under-team.png";
import staff1 from "../pics/staff1.jpeg";
import staff2 from "../pics/staff2.jpeg";
import staff3 from "../pics/staff3.jpeg";
import staff4 from "../pics/staff4.jpeg";
import staff5 from "../pics/staff5.jpeg";
import staff6 from "../pics/staff6.jpeg";

const Team = () => {
  return (
    <>
    <Navbar/>
        <div>
            <div className='team-head'>
                <h1>Our Team</h1>
                <img src={underline} width='250'></img>
            </div>

            <div className='team-mem'>
                <div className='founder'>
                    <h2 >Founder</h2>
                    <img src={founder} width='250' style={{borderRadius:'10px'}}></img>
                    <p>Nadupuru Nageswararao</p>
                </div>
                
                <h1 className='parter-titel'>Management, CEOs & Partnerships</h1>
                <img src={underteam} width='250' className='titel-under' ></img>
                <div className='parter'>
                    <div className='parter1'>
                        <img src={ceo1} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Nadupuru Ravi Kumar</p>
                    </div>
                    <div className='parter1'>
                        <img src={ceo2} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Nadupuru Chittibabu</p>
                    </div>
                    <div className='parter1'>
                        <img src={ceo3} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Nadupuru Bhujangarao</p>
                    </div>
                </div>
            </div>

            <div className='staff-sec'>
                <h1>Our Dedicated Staff</h1>
                <img src={underteam} width='200' className='title-under1'></img>
                <div className='staff-mem'>
                    <div className='staff1'>
                        <img src={staff1} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Rambabu</p>
                    </div>
                    <div className='staff1'>
                        <img src={staff2} className='madhu-st' width='250' height='280' style={{borderRadius:'10px'}}></img>
                        <p>Madhu</p>
                    </div>
                    <div className='staff1'>
                        <img src={staff3} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Naresh</p>
                    </div>
                    <div className='staff1'>
                        <img src={staff4} width='250' style={{borderRadius:'10px'}}></img>
                        <p>vasu</p>
                    </div>
                    <div className='staff1'>
                        <img src={staff5} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Anil</p>
                    </div>
                    <div className='staff1'>
                        <img src={staff6} width='250' style={{borderRadius:'10px'}}></img>
                        <p>Govindu</p>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Team
