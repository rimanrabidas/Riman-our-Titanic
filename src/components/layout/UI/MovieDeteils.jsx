import React from 'react'
import { useLoaderData, useNavigate} from 'react-router-dom';
import './MovieDeteils.css'
const MovieDeteils = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1)
  };
  const movieData = useLoaderData();
  console.log(movieData);
  const {Poster,Title,imdbRating,Runtime,Director,Genre,Language,Actors,Country,Metascore,Released
,Type,Year,}= movieData;
  return (
   <li className='hero_container'>
    <div className="main_container">
      <div className="main2">
      <div className="poster_container">
<img src={Poster} className='poster' alt="Poster" />
      </div>
      <div className="ticket_container">
        <div className="tickit_contont">
          <h4 className='tickit_movie_title'>Title: {Title}</h4>
          <p className='tickit_curent_price'>ImdbRating : {imdbRating}</p>
          <p className='tickit_curent_price'>Runtime : {Runtime}</p>
          <p className='tickit_curent_price'>Director : {Director}</p>
          <p className='tickit_curent_price'>Genre : {Genre}</p>
          <p className='tickit_curent_price'>Language : {Language}</p>
          <p className='tickit_curent_price'>Actors : {Actors}</p>
          <p className='tickit_curent_price'>Country : {Country}</p>
          <p className='tickit_curent_price'>Metascore : {Metascore}</p>
          <p className='tickit_curent_price'>Released : {Released}</p>
          <p className='tickit_curent_price'>Type : {Type}</p>
          <p className='tickit_curent_price'>Year : {Year}</p>
          <div className="tickit_buy_btn_ber">
          <button className='tickit_buy_btn'>Watch Now</button>
          <button onClick={handleback} className='tickit_buy_btn'>Back</button>
          </div>
        </div>
      </div>
      </div>
    </div>
   </li>
  )
}

export default MovieDeteils;