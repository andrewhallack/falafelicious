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
        <div className='img-wrapper-mobile top'>
          <img src={leftTable} />
        </div>
        <p>
        Each bag of Falafelicious contains 12 crispy falafel balls made from chickpeas, parsley, onion, garlic, and spices. That’s it — clean ingredients you can trust.
        </p>
        <div className='img-wrapper-mobile bottom'>
          <img src={rightTable} />
        </div>
    </section>
  )
}

export default WhatsInside