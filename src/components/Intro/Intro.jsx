import './intro.css'
import image from '../../assets/falafeltable.jpeg'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-wrapper'>
            <img src={image} />
            <div className='info'>
                <h3>A Family Recipe</h3>
                <p>
                Falafelicious was born in Austin, Texas, at a local farmers market. What started as a
                family recipe quickly turned into a community favorite. We believe everyone deserves
                authentic Middle Eastern falafel that’s easy, wholesome, and delicious — without
                sacrificing time or quality.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Intro