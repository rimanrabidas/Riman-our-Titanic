import React, { useState } from 'react'
import "./Header.css"
import { NavLink} from 'react-router-dom';

const Header = () => {
    
 const [ac,subac] = useState(true)
const sideber = () => {
    subac(!ac)
}
  return (
        <header>
            <div className="loginber">
                <div className="pfp">
                <p className='ph'>Get Riman Membership, 30-day return or refund 99.99% gurantee</p>
                </div>
                <p>
                    <NavLink to='/Login' className="span1">SIGN IN</NavLink>
                    <NavLink to='/Login' className="span1">SIGN UP</NavLink>
                </p>
            </div>
            <div className="navber">
                <div className="logo">
                    <img src="/RIMAN_LOGO.png" alt="RIMAN BABU" />
                </div>

                <div className={`menu ${ac ? "submenu" : "menu"}`}>
                <img onClick={sideber} className='cencelline' src="/public/icons8-cancel-64.png" alt="menu" />
                    <NavLink className={({ isActive }) => isActive ? "span active" : "span"} to="/">HOME</NavLink>
                    <NavLink className="span" to="/about">ABOUT</NavLink>
                    <NavLink className="span" to="/movie">MOVIES</NavLink>
                    <NavLink className="span" to="/contact">CONTACT</NavLink>
                </div>
                <img onClick={sideber} className='threeline' src="/menu-bars-svgrepo-com.svg" alt="menu" />
            </div>
        </header>
    
  )
}

export default Header;