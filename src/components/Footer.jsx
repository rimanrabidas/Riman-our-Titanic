import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
<div className="main">
   <div className="link">
    <img className='riman_b' src="/public/RIMAN_BUTTOM.jpg" alt="logo" />
    <p className='p'>Welcome to Riman EcomStore. your ultimate destination for cutting gadgets!</p>
    <div className="linkber">
        <img className="social" src="/public/linkedin-svgrepo-com.svg" alt="Linkdin" />
        <img className="social" src="/public/whatsapp-svgrepo-com.svg" alt="whatsapp" />
        <img className="social" src="/public/telegram-logo-svgrepo-com.svg" alt="telegram" />
        <img className="social" src="/public/twitter-svgrepo-com.svg" alt="twitter" />
    </div>
   </div>

<div className="fr">
   <div className="shopping">
    <h3>SHOPPIN</h3>
    <h5>Computer Store</h5>
    <h5>Laptop Stor</h5>
    <h5>Accessories</h5>
    <h5>Sales & discount</h5>
   </div>
   <div className="experience">
   <h3>EXPERIENCE</h3>
    <h5>Contact Us</h5>
    <h5>Payment Method</h5>
    <h5>Delivery</h5>
    <h5>Return & Exchange</h5>
   </div>
   <div className="newsletter">
   <h3>NEWSLETTER</h3>
    <h5>Be the first to know about new <br/> arrivals, sales & promos!</h5>
   <input className='footerin' type="email" placeholder='Your Email'/>
   </div>
   </div>
   
</div>
<div className="developer">
<img className='riman' src="/RP.jpg" alt="(-_-)" /> 
<p className='pf'>Disign and Code by</p> <img className="love" src="public/love.png" alt="" /> <span>Riman Rabidas</span> 
</div>
    </footer>
  )
}

export default Footer;