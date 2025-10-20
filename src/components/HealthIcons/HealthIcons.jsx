import './health-icons.css'
import vegan from '../../assets/vegan.png'
import protein from '../../assets/high-protein.png'
import gluten from '../../assets/gluten-free.png'
import fiber from '../../assets/high-fiber.png'
import bag from '../../assets/falafel-bag.png'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const HealthIcons = () => {
  const icons = [
    { src: vegan, className: 'vegan-img' },
    { src: protein, className: 'protein-img' },
    { src: gluten, className: 'gluten-img' },
    { src: fiber, className: 'fiber-img' },
  ]

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 1"]
  })

  const start = 0
  const step = 0.1
  const span = 0.18

  const iconTransforms = icons.map((_, i) => {
    const inStart = start + i * step + 0.2
    const inEnd = inStart + span
    const opacity = useTransform(scrollYProgress, [inStart, inEnd], [0, 1])
    const y = useTransform(scrollYProgress, [inStart, inEnd], [30, 0])
    return { opacity, y }
  })

  const bagStart = start
  const bagEnd = bagStart + span
  const bagOpacity = useTransform(scrollYProgress, [bagStart, bagEnd], [0, 1])
  const bagY = useTransform(scrollYProgress, [bagStart, bagEnd], [20, 0])

  const h1Start = start + 0.52
  const h1End = h1Start + span
  const h1Opacity = useTransform(scrollYProgress, [h1Start, h1End], [0, 1])
  const h1Y = useTransform(scrollYProgress, [h1Start, h1End], [20, 0])

  const h2Start = start + 0.72
  const h2End = h2Start + span
  const h2Opacity = useTransform(scrollYProgress, [h2Start, h2End], [0, 1])
  const h2Y = useTransform(scrollYProgress, [h2Start, h2End], [20, 0])

  return (
    <section className='health-icons' ref={ref}>
      <div className='div-wrapper'>
        <motion.h3
          className='left'
          style={{ opacity: h1Opacity, y: h1Y }}
        >
          LEBANESE HERITAGE
        </motion.h3>
        <div className='bag-img-wrapper'>
          <motion.img
                src={bag}
                className='bag-img'
                style={{
                  opacity: bagOpacity,
                  // y: bagY
                }}
                initial={{ opacity: 0 }}
              />
          {icons.map((icon, i) => (
            <motion.img
              key={i}
              src={icon.src}
              className={icon.className}
              style={{
                opacity: iconTransforms[i].opacity,
              }}
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <motion.h3
            className='right'
            style={{ opacity: h2Opacity, y: h2Y }}
          >
            WITH TEXAS ROOTS
        </motion.h3>
      </div>
    </section>
  )
}

export default HealthIcons
