import React from 'react'
import "./Card.css";
import { NavLink } from 'react-router-dom';

const Card = ({curMovie}) => {
    const {Poster,imdbID} = curMovie;
  return (
    <li className='herocontainer'>
        <div className="maincontainer">
        <NavLink className="postercontainer" to={`/movie/${imdbID}`}>
                <img  src={Poster} alt={imdbID} />
            </NavLink>
            <div className="tikitcontainer">
                <div className="tikitcontent">
                    <NavLink to={`/movie/${imdbID}`}>
                    <button className='tikitbutton'>Watch Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </li>
  )
}

export default Card;