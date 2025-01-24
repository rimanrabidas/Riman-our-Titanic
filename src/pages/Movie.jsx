import React from 'react'
import "./Movie.css"
import { useLoaderData } from 'react-router-dom'
import Card from '../components/layout/UI/Card';
const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <ul className='movie' >
      {
        movieData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie}/>
        } )
      }
    </ul>
  )
}

export default Movie;