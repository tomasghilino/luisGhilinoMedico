import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { css } from "styled-components"

const Animation = props => {
  const [ref, inView] = useInView({ threshold: 0.07 })
  const animation = useAnimation()

  if (inView) {
    animation.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
      },
    })
  }
  return (
    <div
      ref={ref}
      css={css`
        overflow: hidden;
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: props.direction === "left" ? -100 : 100 }}
        animate={animation}
      >
        {props.children}
      </motion.div>
    </div>
  )
}

export default Animation
