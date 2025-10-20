import './nutrition-facts.css'

const NutritionFacts = () => {
  return (
    <section className='nutrition-facts'>
        <div className='info'>
            <h3>Wholesome, Simple, Delicious</h3>
            <p>
                Each bag of Falafelicious contains 12 crispy falafel balls made from chickpeas, parsley,
                onion, garlic, and spices. That’s it — clean ingredients you can trust.
            </p>
        </div>
        <div className='black'>
            <h3>13g</h3>
            <h4>PROTEIN PER SERVING</h4>
        </div>
        <div className='green'>
            <h3>9g</h3>
            <h4>FIBER PER SERVING</h4>
        </div>
        <div className='red'>
            <h3>260</h3>
            <h4>CALORIES PER SERVING</h4>
        </div>
        <div className='brown'>
            <h3>260</h3>
            <h4>DELICIOUS</h4>
        </div>
    </section>
  )
}

export default NutritionFacts