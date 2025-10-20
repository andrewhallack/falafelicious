import './health-icons.css'
import vegan from '../../assets/vegan.png'
import protein from '../../assets/high-protein.png'
import gluten from '../../assets/gluten-free.png'
import fiber from '../../assets/high-fiber.png'
import bag from '../../assets/falafel-bag.png'


const HealthIcons = () => {
  return (
    <section className='health-icons'>
      <h3>LEBANESE HERITAGE</h3>
      <div className='img-wrapper'>
        <img className='bag-img' src={bag} />
        <img className='vegan-img' src={vegan} />
        <img className='protein-img' src={protein} />
        <img className='gluten-img' src={gluten} />
        <img className='fiber-img' src={fiber} />
      </div>
      <h3>WITH TEXAS ROOTS</h3>
    </section>
  )
}

export default HealthIcons