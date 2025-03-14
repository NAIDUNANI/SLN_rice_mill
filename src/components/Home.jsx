
import { FaSeedling, FaLeaf, FaCheckCircle, FaStar,FaSprayCan, FaTractor, FaHandsWash, FaTools, FaWarehouse } from "react-icons/fa";
import ricemill from "../pics/mill-pic.jpeg";
import underline from "../pics/under-line.png";
import certifi from "../pics/fssai certifi.png";
import sona from "../pics/sona.png";
import raw from "../pics/raw.png";
import steam from "../pics/steam.png";
import hmt from "../pics/hmt.png";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar1";
import Slider from "./Slider";
import Footer from "./Footer";


const riceOptions = [
    { name: "Sona Rice",Brand: "SLN Brand",line:"Light, aromatic, and perfect for daily meals", img: sona, description:"SLN’s Sona Rice is a premium-quality, lightweight, and aromatic rice variety. It is ideal for everyday cooking, including steamed rice, biryanis, and South Indian delicacies. This rice is naturally processed to retain its nutritional value, making it a healthy choice for families." },
    { name: "Raw Rice",Brand: "SLN Brand",line:"Unpolished and naturally rich in nutrients", img: raw, description:"SLN’s Raw Rice is produced through a meticulous process that preserves its natural fiber and essential nutrients. It is perfect for preparing traditional rice-based dishes like curd rice, lemon rice, and pulihora, ensuring a wholesome and healthy diet." },
    { name: "BPT Rice",Brand: "SLN Brand",line:"Fluffy, long-grain rice with superior taste", img: steam, description:"SLN’s Steam Rice is known for its long, fluffy grains and non-sticky texture after cooking. This variety is ideal for making biryanis, fried rice, and pulao. The steaming process enhances its taste and digestibility while maintaining its nutritional properties." },
    { name: "HMT Rice",Brand: "SLN Brand",line:"Soft texture with a rich taste", img: hmt, description:"SLN’s HMT Rice is a high-quality variety known for its soft texture and rich aroma. It is ideal for making idlis, dosas, and traditional South Indian dishes. This rice is carefully milled and aged to enhance its flavor and cooking quality." },
  ];

  const reasons = [
    { icon: <FaLeaf />, text: "Using Organic Fertilizers in the fertile lands." },
    { icon: <FaSprayCan />, text: "No use of insecticides or pesticides." },
    { icon: <FaTractor />, text: "Grains from fertile lands with proper irrigation facility." },
    { icon: <FaHandsWash />, text: "To maintain very high standards of hygiene and quality." },
    { icon: <FaTools />, text: "To undertake regular maintenance of plant & machinery to enhance productivity." },
    { icon: <FaWarehouse />, text: "Their productivity and retain process capability." }
  ];

const Home = () => {
    const [selectedRice, setSelectedRice] = useState(0);

    useEffect(() => {
        if (!riceOptions || riceOptions.length === 0) {
            setSelectedRice(null); // No items available
        } else {
            setSelectedRice(0); // Default to the first item
        }
    }, [riceOptions]);

    const handleClick = (index) => {
        setSelectedRice(index);
    };
  return (
    <>
    <Navbar/>
    <Slider/>
    <section className="rice-mill-section">
      <div className="rice-mill-container">
        <div className="rice-mill-image">
          <img
            src={ricemill}
            alt="Sri Lakshmi Narasimha Agro Industries"
            className="rice-mill-img"
          />
        </div>
        <div className="rice-mill-content">
          <h3 className="rice-mill-subtitle">RICE MANUFACTURERS & EXPORTERS IN INDIA</h3>
          <h2 className="rice-mill-title">Sri Lakshmi Narasimha Agro Industries</h2>
          <span className="mill-title-dline">Miller, Exporter, & Supplier</span>
          <p className="rice-mill-description">
          Sri Lakshmi Narasimha Agro Industries is a leading rice mill known for its premium quality rice production, 
          sustainable practices, and customer satisfaction. Established with a vision to provide the finest grains, we 
          have grown into a trusted name in the rice milling industry. With advanced milling technology and a commitment 
          to sustainability, we ensure that every grain meets international quality standards. Our expertise spans processing, 
          exporting, and delivering high-quality rice varieties to customers across the India
          </p>
          
          <div className="rice-mill-features">
            <span>
            <p><FaSeedling className="icon" /> Providing superior quality grains</p>
            <p><FaLeaf className="icon" /> Focus on sustainability</p>
            </span>
            <span>
            <p><FaCheckCircle className="icon" /> Delivering finest rice varieties</p>
            <p><FaStar className="icon" /> 100% customer satisfaction</p>
            </span>
          </div>
        </div>
      </div>
    </section>

    <div className="rice-section">
            <div style={{ marginBottom: "20px" }}>
                <h2 className="section-title">Rice Categories</h2>
                <img src={underline} width="150" alt="underline" />
            </div>

            <div className="rice-container">
                {/* Left Side - Rice Options */}
                <div className="rice-options">
                    {riceOptions.map((rice, index) => (
                        <div key={index} className="rice-option" onClick={() => handleClick(index)}>
                            <motion.img
                                src={rice.img}
                                alt={rice.name}
                                className="rice-image"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                            {/* Show Name Beside Image Only for Clicked Image */}
                            {selectedRice === index && (
                                <motion.div
                                    className="rice-name-box"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {rice.name}
                                </motion.div>
                            )}
                            {/* Line separator except for the last item */}
                            {index !== riceOptions.length - 1 && <div className="line"></div>}
                        </div>
                    ))}
                </div>

                {/* Middle Section - Display Selected Rice Details */}
                <div className="rice-details">
                    <motion.img
                        src={riceOptions[selectedRice].img}
                        alt={riceOptions[selectedRice].name}
                        className="rice-detail-image"
                        key={selectedRice} // Helps in re-rendering with animation
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <span style={{
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column'
                    }}>
                    <h3 className="rice-detail-brand">{riceOptions[selectedRice].Brand}</h3>
                    <h3 className="rice-detail-name">{riceOptions[selectedRice].name}</h3>
                    <p className="rice-detail-line">{riceOptions[selectedRice].line}</p>
                    <p className="rice-detail-description">{riceOptions[selectedRice].description}</p>
                    </span>
                </div>
            </div>
        </div>

        <section className="reasons-section">
          <h2 className="reasons-title">Reasons to Choose SLN</h2>
          <div className="wheat-icon"></div>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-box" key={index}>
                <div className="icon">{reason.icon}</div>
                <p className="text">{reason.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="certificats">
            <h1 className="certifi-head">Our Certification</h1>
            <img src={certifi} width='200'></img>
        </section>

    <section className="get-touch">
        <div className="touch-div">
            <p className="line-sent"
            >Looking for premium-quality rice? Get in touch with us today!</p>
            <button className="touch-btn"><Link to="/contact">Get In Touch</Link></button>
        </div>
    </section>
    <Footer/>
    </>
  );
};

export default Home ;
