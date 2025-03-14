import React from 'react'
import Navbar from './Navbar1'
import Footer from './Footer'
import underline from "../pics/under-line.png";
import about from "../pics/about.jpeg";

const About = () => {
  return (
    <>
    <Navbar/>
        <div>
            <div className='about-head'>
                <h1>About Us</h1>
                <img src={underline} width='230'></img>
            </div>
            <div className='about-bd'>
                <img src={about} width={300}></img>
                <div>
                    <h2>Sri Lakshmi Narasimha Agro Industries (SLN)</h2>
                    <p>Sri Lakshmi Narasimha Agro Industries is a distinguished Indian rice mill specializing in the production, processing, and 
                        supply of premium-quality rice. Founded with a vision to deliver the finest rice varieties, our journey began with a 
                        small-scale milling unit that, through dedication and innovation, has grown into a leading name in the rice industry.<br/><br/>

                        With state-of-the-art milling technology and strict quality control measures, we ensure that every grain meets the 
                        highest standards of purity, taste, and nutritional value. Over the years, our production capacity has expanded 
                        significantly, allowing us to cater to households, retailers, and businesses across India with top-quality rice varieties.<br/><br/>

                        Our facility is equipped with advanced processing units capable of handling large-scale production while maintaining 
                        exceptional hygiene and sustainability practices. From sourcing the finest paddy to employing cutting-edge milling 
                        techniques, we take pride in offering a diverse range of rice varieties, including Sona Rice, Raw Rice, Steam Rice, and 
                        HMT Rice, each known for its unique texture, aroma, and flavor.
                    </p>
                </div>
            </div>
            <div className='sub-ab-desp'>
                <p>
                    At Sri Lakshmi Narasimha Agro Industries, we are committed to sustainability by integrating eco-friendly production 
                    methods that enhance efficiency while minimizing environmental impact. Our dedication to excellence, customer 
                    satisfaction, and continuous innovation has earned us a strong reputation in the Indian rice industry.<br/><br/>

                    With a passion for delivering superior grains and a focus on long-term customer relationships, Sri Lakshmi Narasimha Agro 
                    Industries continues to be a trusted name in the rice milling sector, supplying quality rice that enriches millions 
                    of lives every day.
                </p>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default About
