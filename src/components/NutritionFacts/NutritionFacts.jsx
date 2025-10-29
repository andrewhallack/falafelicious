import './nutrition-facts.css'

const NutritionFacts = () => {
  return (
    <section className='nutrition-facts'>
        <div className='info'>
            <h3>WHOLESOME, SIMPLE, DELICIOUS</h3>
            <p>
                Your delicous, authentic falafel is a vegan, gluten-free, high-protein, and high-fiber snack for your enjoyment and your nutrition.
            </p>
        </div>

        <div className='green'>
            <h3>9g</h3>
            <h4>FIBER PER SERVING</h4>
        </div>
        <div className='brown'>
            <h3>13g</h3>
            <h4>PLANT PROTEIN PER SERVING</h4>
        </div>
        <div className='red'>
            <h3>260</h3>
            <h4>CALORIES PER SERVING</h4>
        </div>
        <div className='black'>
            <h3>100%</h3>
            <h4>FALAFELICIOUS</h4>
        </div>
    </section>
  )
}

export default NutritionFacts