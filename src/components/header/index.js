import React from 'react'
import { Link } from 'react-router-dom';
import NavLinks from '../../navbar';

const Header = () => {
  return (
    <>
    <header>
      <div className="header container">
        <div className="logo">
        <Link to='/home'>
          Logo
        </Link>
        </div>
        <NavLinks/>
      </div>
    </header>
  </>
  )
}

export default Header;