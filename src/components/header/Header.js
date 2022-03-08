import React from 'react'
import { Link } from 'react-router-dom';

// import styles
import './Header.css';

const Header = () => {
    return (
      <header>
        <div className='header-bg'></div>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/recepten'>Recepten</Link>
            <Link to='/about'>About</Link>
          </ul>
        </nav>
        <div className='header-content shadow-box'>
          <h1>Mario's BBQ Place</h1>
          <p>Welcome bij Mario's BBQ place</p>
        </div>
      </header>
    );
}
 
export default Header;