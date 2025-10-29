import './navbar.css'
import logo from '../../assets/logo.png'
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

import { useState } from 'react'


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <header>
        <nav>
            <ul className='menu'>
                {/* <li><Link to='#/about'>ABOUT</Link></li> */}
                <li><a href='https://www.tiktok.com/@falafeliciousaus' target='_blank'>
                    <FaTiktok className='icon' />
                </a></li>
                <li><a href='https://www.instagram.com/falafeliciousfoods/' target='_blank'>
                    <FaInstagram className='icon' />
                </a></li>
            </ul>
            <a href='/'>            
                <span className='logo'>
                    <img src={logo} />
                </span>
            </a>
            <Link className='cta' to='/find-in-stores'>
                FIND US IN STORES
            </Link>
            <button 
                className={activeMenu ? 'hamburger active' : 'hamburger'}
                onClick={() => toggleMenu()}
            >
                <span className='top' />
                <span className='bottom' />
            </button>
            <ul className={activeMenu ? 'menu-mobile active' : 'menu-mobile'}>
                <li><a>ABOUT</a></li>
                <li><a href='https://www.tiktok.com/@falafeliciousaus' target='_blank'>TIKTOK</a></li>
                <li><a href='https://www.instagram.com/falafeliciousfoods/' target='_blank'>INSTAGRAM</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar