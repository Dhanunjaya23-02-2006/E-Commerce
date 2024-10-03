import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder='search...'/>
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignUp</div>
          <div className="cart">Cart</div>
        </div>
    </div>
    <div className="subMenu">
      <ul>
        <Link to='/mobiles'>
          <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
          <li>Computers</li>
        </Link>
        <Link to='/watches'>
          <li>Watch</li>
        </Link>
        <Link to='/menFashion'>
          <li>Men Wear</li>
        </Link>
        <Link to='/woman'>
          <li>Woman Wear</li>
        </Link>
        <Link to='/furnitures'>
          <li>Furnitures</li>
        </Link>
        <Link to='/kitchen'>
          <li>Kitchen</li>
        </Link>
        <Link to='/fridge'>
          <li>Fridge</li>
        </Link>
        <Link to='/book'>
          <li>Books</li>
        </Link>
        <Link to='/speaker'>
          <li>Speakers</li>
        </Link>
        <Link to='/tvs'>
          <li>T's</li>
        </Link>
        <Link to='/ac'>
          <li>AC</li>
        </Link>
      </ul>
    </div>
    </>
  )
}

export default Navbar
