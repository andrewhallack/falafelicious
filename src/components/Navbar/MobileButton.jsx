import './mobile-button.css'
import { Link } from 'react-router-dom'

const MobileButton = () => {
  return (
    <Link className='mobile-button' to='/find-in-stores'>
        FIND US IN STORES
    </Link>
  )
}

export default MobileButton