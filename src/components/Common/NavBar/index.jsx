import { Link } from 'react-router-dom';

import Logo from '../../../assets/logo.png';
import './style.css';

export default function NavBar() {
  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <img src={Logo} alt='Logo' />
      </div>

      <Link to='/watchlist'>Watchlist</Link>
    </div>
  );
}
