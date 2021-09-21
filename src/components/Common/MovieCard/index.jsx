import { Link } from 'react-router-dom';

import './style.css';

export default function MovieCard({ id, background_image, title, summary }) {
  return (
    <div className='movie'>
      <div className='movie__img-container'>
        <img className='movie__img' src={background_image} alt='Movie slug' />
      </div>

      <div className='movie__info-container'>
        <div>
          <Link to={`/movie/${id}`}>{title}</Link>
        </div>
        <div className='movie__info-summary'>{summary}</div>
      </div>

      <button className='movie__add-to-watchlist-btn'>Add to watchlist</button>
    </div>
  );
}
