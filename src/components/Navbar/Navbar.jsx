import './navbar.css'
import logo from '../../assets/logo.png'

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
                {/* <li><a>ABOUT</a></li> */}
                <li><a href='https://www.tiktok.com/@falafeliciousaus' target='_blank'>TIKTOK</a></li>
                <li><a href='https://www.instagram.com/falafeliciousfoods/' target='_blank'>INSTAGRAM</a></li>
            </ul>
            {/* <span className='logo'>
                <img src={logo} />
            </span> */}
            <button className='cta'>
                FIND US IN STORES
            </button>
            <button 
                className={activeMenu ? 'hamburger active' : 'hamburger'}
                onClick={() => toggleMenu()}
            >
                <span className='top' />
                <span className='bottom' />
            </button>
            <ul className={activeMenu ? 'menu-mobile active' : 'menu-mobile'}>
                {/* <li><a>ABOUT</a></li> */}
                <li><a href='https://www.tiktok.com/@falafeliciousaus' target='_blank'>TIKTOK</a></li>
                <li><a href='https://www.instagram.com/falafeliciousfoods/' target='_blank'>INSTAGRAM</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar