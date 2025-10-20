import './health-icons.css'
import vegan from '../../assets/vegan.png'
import protein from '../../assets/high-protein.png'
import gluten from '../../assets/gluten-free.png'
import fiber from '../../assets/high-fiber.png'


const HealthIcons = () => {
  return (
    <div className='health-icons'>
        <div className='health-icons-wrapper'>
            <img className='health-icon' src={vegan} />
            <img className='health-icon' src={protein} />
            <img className='health-icon' src={gluten} />
            <img className='health-icon' src={fiber} />
        </div>
    </div>
  )
}

export default HealthIcons