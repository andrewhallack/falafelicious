import './whats-inside.css'
import dippingFalafel from '../../assets/dipping-falafel.png'
import makingSandwich from '../../assets/making-falafel-sandwich.png'
import { motion } from "framer-motion"

const WhatsInside = () => {
  return (
    <section className='whats-inside'>
      <div className='image-wrapper'>
        <motion.img 
          className='left' 
          src={dippingFalafel} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.img 
          className='right' 
          src={makingSandwich} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      <motion.div 
        className='img-wrapper-mobile top'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={dippingFalafel} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Each bag of Falafelicious contains 12 crispy falafel balls made from chickpeas, fava beans, and spices. That’s it — clean ingredients you can trust.
      </motion.p>

      <motion.div 
        className='img-wrapper-mobile bottom'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={makingSandwich} />
      </motion.div>
    </section>
  )
}

export default WhatsInside
