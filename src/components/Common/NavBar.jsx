import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';
function NavBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = (event) => {};
  return (
    <div className='nav-bar'>
      <img className='logo-img' src={logo} alt={'logo'} />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search..'
          value={searchValue}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <button className='watch-list'>WatchList</button>
    </div>
  );
}

export default NavBar;
