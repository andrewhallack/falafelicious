import './navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul className='menu'>
                <li><a>ABOUT</a></li>
                <li><a>TIKTOK</a></li>
                <li><a>INSTAGRAM</a></li>
            </ul>
            {/* <span className='logo'>
                <img src={logo} />
            </span> */}
            <button className='cta'>
                FIND US IN STORES
            </button>
        </nav>
    </header>
  )
}

export default Navbar