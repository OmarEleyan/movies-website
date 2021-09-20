import React, { useState, useEffect } from 'react';
import './movie.css';
const axios = require('axios');

function Movie() {
  const [movies, setMovies] = useState([{}]);
  const [herf] = useState('');

  useEffect(() => {
    const fetchData = () => {
      axios('https://yts.mx/api/v2/list_movies.json?page=5&limit=50').then(
        function (response) {
          response = response.data.data.movies;
          response = response
            .sort((a, b) => {
              return a.rating - b.rating;
            })
            .reverse()
            .slice(1, 6);
          console.log(response);

          setMovies(response);
        },
      );
    };
    fetchData();
  }, []);

  return (
    <div className='movies-div'>
      {movies.map((m) => {
        return (
          <div className='movie'>
            <img className='movie-img' alt='' src={m.background_image} />
            <div>
              <a herf={herf}> {m.title}</a>
              <p className='movie-desc'>{m.summary}</p>
            </div>

            <button className='add'>add to watchlist</button>
          </div>
        );
      })}
    </div>
  );
}

export default Movie;
