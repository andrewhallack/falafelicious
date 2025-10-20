import './whats-inside.css'
import leftTable from '../../assets/left-table.png'
import rightTable from '../../assets/right-table.png'

const WhatsInside = () => {
  return (
    <section className='whats-inside'>
        <div className='image-wrapper'>
            <img className='left' src={leftTable} />
            <img className='right' src={rightTable} />
        </div>
        <p>
        Each bag of Falafelicious contains 12 crispy falafel balls made from chickpeas, parsley, onion, garlic, and spices. That’s it — clean ingredients you can trust.
        </p>
    </section>
  )
}

export default WhatsInside