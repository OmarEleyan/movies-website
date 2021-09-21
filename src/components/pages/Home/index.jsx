import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../../Common/MovieCard';
import './style.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://yts.mx/api/v2/list_movies.json?page=1&limit=5')
      .then((res) => {
        console.log(`res`, res);
        setMovies(res.data.data.movies);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='page-container'>
      <div className='movies-container'>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}
