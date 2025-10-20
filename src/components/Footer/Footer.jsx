import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='top'>
        <h1>
          STAY IN THE LOOP
        </h1>
        <p>
        Be the first to know when Falafelicious launches in more stores.
        </p>
        <form className='email'>
          <input type="email" name="user_email" placeholder='Email' />
          <button>Submit</button>
        </form>
      </div>
      <div className='bottom'>
        <span className='logo'>
          <img src={logo} />
        </span>
      </div>
    </section>
  )
}

export default Footer