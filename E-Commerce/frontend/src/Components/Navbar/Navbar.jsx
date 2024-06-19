import React, { useState } from 'react'
import './Navbar.css'
import logo11 from '../Assets/logo11.png'
import cart from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu]= useState("shop");

  return (
    <div className="navbar">
        <div className='nav-logo'>
            <img src={logo11} alt='' />
            <p>TechMe</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("laptops")}}><Link style={{textDecoration: 'none'}} to='/laptops'>Laptops</Link>{menu==="laptops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("smartphones")}}><Link style={{textDecoration: 'none'}} to='/smartphones'>Smart Phones</Link>{menu==="smartphones"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration: 'none'}} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt='' /></Link>
        </div>
       


    </div>
  )
}
