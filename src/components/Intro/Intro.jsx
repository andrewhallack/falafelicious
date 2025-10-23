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
          What started as a family recipe at a small Austin farmers market quickly turned into a local obsession.
          We’re proud to share our authentic, Middle Eastern falafel — made from scratch, packed with flavor, and loved by our community.
        </motion.p>
      </div>
    </section>
  )
}

export default Intro
