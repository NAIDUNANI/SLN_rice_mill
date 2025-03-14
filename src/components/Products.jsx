import React from 'react'
import Navbar from './Navbar1'
import Footer from './Footer'
import underline from "../pics/under-line.png";
import soan from "../pics/sona-rice.jpg"
import raw from "../pics/raw-rice.png"
import steam from "../pics/steam-rice.jpg"
import hmt from "../pics/hmt-rice.png"

const Products = () => {
  return (
    <>  
        <Navbar/>
        <div>
          <div className='product-head'>
            <h1>Our Products</h1>
            <img src={underline} width='250'></img>
          </div>

          <div className='prod-items'>
            <div className='item1'>
              <img src={soan} width='350' style={{borderRadius:'10px'}}></img>
              <div className='item1-box'>
                <div className='item1-brand'>SLN Brand</div>
                <div className='item1-titel'>Soan Rice</div>
                <p className='item1-desp'>
                Sri Lakshmi Narasimha Agro Industries takes pride in producing premium-quality Sortex BPT (Sona) Rice under the SLN Rice brand, 
                ensuring the finest grains for a healthy lifestyle. Cultivated in select regions, our Sona Rice is known for its natural 
                sweetness, making it perfect for a variety of dishes, from fragrant pulao to festive kheer.

                Our rice undergoes a meticulous aging process of up to 12 months before packaging, enhancing its aroma, texture, and 
                cooking quality. With reduced moisture content and improved grain length, SLN Sortex BPT (Sona) Rice guarantees an exceptional 
                taste and cooking experience for every meal.
                </p>
              </div>
            </div>

            <div className='item2'>
              <div className='item2-box'>
                <div className='item2-brand'>SLN Brand</div><br/><br/>
                <div className='item2-titel'>Raw Rice</div>
                <p className='item2-desp'>
                At Sri Lakshmi Narasimha Agro Industries, we produce high-quality Raw Rice, known for its rich nutritional value and soft 
                texture. Milled without undergoing any pre-cooking process, our raw rice retains its natural taste and aroma, making it an 
                ideal choice for daily meals. Whether used for traditional South Indian dishes or a variety of everyday recipes, SLN Raw Rice 
                ensures delicious and wholesome dining experiences. With its naturally polished grains and rich nutrients, it serves as a 
                staple food for many households across India.
                </p>
              </div>
              <img src={raw} width='350' style={{borderRadius:'10px'}}></img>
            </div>
            
            <div className='item1'>
              <img src={steam} width='350' style={{borderRadius:'10px'}}></img>
              <div className='item1-box'>
                <div className='item1-brand'>SLN Brand</div>
                <div className='item1-titel'>BPT Rice</div>
                <p className='item1-desp'>
                Our SLN Steam Rice is carefully processed using advanced steaming techniques that lock in essential nutrients and improve 
                the rice’s texture. This method enhances its non-sticky nature, making it perfect for biryanis, pulao, and other premium rice
                 dishes. With its fluffy grains and superior cooking quality, SLN Steam Rice is a preferred choice for both households and 
                 restaurants. Steamed to perfection, this rice variety offers great taste while preserving its essential minerals for a healthy 
                 diet.
                </p>
              </div>
            </div>

            <div className='item2'>
              <div className='item2-box'>
                <div className='item2-brand'>SLN Brand</div><br/><br/>
                <div className='item2-titel'>HMT Rice</div>
                <p className='item2-desp'>
                Renowned for its soft, long grains and natural fragrance, SLN HMT Rice is a premium variety cherished for its taste and texture. 
                Sourced from the finest paddy fields, our HMT Rice is processed with precision to ensure consistency and quality in every grain. 
                Whether used for home-cooked meals or specialty dishes, this rice variety delivers an authentic and satisfying experience. 
                Its unique aroma and exceptional softness make it a favorite for daily consumption and festive occasions alike.
                </p>
              </div>
              <img src={hmt} width='350' style={{borderRadius:'10px'}}></img>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Products
