import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const Errorpage = () => {
  const navigate = useNavigate();
const handleback = () => {
  navigate(-1)
};
 
  return (
    <div className='error'> 
    <img className='finder' src="/find-icon-9.png"alt='Finder' />
<img className='image' src="/error-gmod.gif" alt="404 Error" />
 <NavLink className="back_page" to="/">GO TO HOME PAGE</NavLink> 
<button className='btn' onClick={handleback}>GO BACK</button>
    </div>
  )
}

export default Errorpage;