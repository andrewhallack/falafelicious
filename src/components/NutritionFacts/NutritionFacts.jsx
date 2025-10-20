import './nutrition-facts.css'
import nutrition from '../../assets/nutrition-facts.png'


const NutritionFacts = () => {
  return (
    <div className='nutrition-facts'>
        <div className='moving-words'>
            <h1>WHOLESOME INGREDIENTS, NOTHING ELSE.</h1>
            <h1>WHOLESOME INGREDIENTS, NOTHING ELSE.</h1>
        </div>
        <div className='info-wrapper'>
            <div className='info'>
                <h3>Wholesome, Simple, Delicious</h3>
                <p>
                    Each bag of Falafelicious contains 12 crispy falafel balls made from chickpeas, parsley,
                    onion, garlic, and spices. That’s it — clean ingredients you can trust.
                </p>
            </div>
            <img src={nutrition} />
        </div>
    </div>
  )
}

export default NutritionFacts