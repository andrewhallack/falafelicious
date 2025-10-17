import './hero.css'
import hero from '../../assets/hero-bg.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <img src={hero} />
        </div>
    </div>
  )
}

export default Hero