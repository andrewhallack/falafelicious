import './hero.css'
import hero from '../../assets/falafeltable.jpeg'

const Hero = () => {
  return (
    <section className='hero'>
            <div className='hero-top'>
              <h1>DELICIOUS, NUTRITIOUS,</h1>
            </div>
            <img src={hero} />
            <div className='hero-bottom'>
              <h1>FALAFELICIOUS</h1>
            </div>
    </section>
  )
}

export default Hero