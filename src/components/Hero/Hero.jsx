import './hero.css'
import hero from '../../assets/falafeltable.jpeg'
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
  const { scrollY } = useScroll(); 

  const imageScale = useTransform(
    scrollY,
    [0, 600],
    [1, 0.9]
  );

  return (
    <section className='hero'>
      <div className='hero-wrapper'>
        <div className='hero-top'>
          <h1>DELICIOUS, NUTRITIOUS,</h1>
        </div>
        <motion.img 
          src={hero} 
          style={{ 
            scale: imageScale
          }} 
        />
        <div className='hero-bottom'>
          <h1>FALAFELICIOUS.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero