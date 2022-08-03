import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import axios from 'axios';

export default function Navbar(props) {
 

    return (
      <>
        <nav className='navbar'>
            <div className='navbarContainer'> 
                <Link 
                    to='/' className='navbarLogo'
                >SW By Leo
                </Link>   
                <div className='nav-menu'>
                    <Link
                    to='/Example' className='nav-item'
                    > 
                    Example
                    </Link> 
                </div>
            </div>
        </nav>
      </>
  ); 
}