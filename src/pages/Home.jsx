import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <div className="homepage">
        <div className="arrowd">
        <img className='arrow' src="/public/down-arrow-svgrepo-com (2).svg" alt="arrow" />
        </div>
        <NavLink  className='explore' to="/movie">
        <button  className='explore'>Explore..</button>
        </NavLink>
        <div className="imageber">
          <h1>TITANIC</h1>
          <img className='titanicbook' src="/public/titanicbook.jpg" alt="Titanic" />
        </div>
      </div>
    </div>
  )
}

export default Home;