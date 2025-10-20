import './intro.css'
import nugget from '../../assets/falafel-nugget.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-wrapper'>
            <img src={nugget} />
            <h3>A COMMUNITY FAVORITE</h3>
            <p>
            Falafelicious was born in Austin, Texas, at a local farmers market. What started as a
            family recipe quickly turned into a community favorite. We now want to share our authentic, 
            Middle-Eastern treat with you.
            </p>
        </div>
    </div>
  )
}

export default Intro