import './intro.css'
import nugget from '../../assets/falafel-nugget.png'
import { motion } from "framer-motion"

const Intro = () => {
  return (
    <section className='intro'>
      <div className='intro-wrapper'>
        <motion.img
          src={nugget}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          A COMMUNITY FAVORITE
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Falafelicious was born in Austin, Texas, at a local farmers market. What started as a
          family recipe quickly turned into a community favorite. We now want to share our authentic, 
          Middle-Eastern treat with you.
        </motion.p>
      </div>
    </section>
  )
}

export default Intro
