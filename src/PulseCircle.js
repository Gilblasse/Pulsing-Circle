import React from 'react'
import * as PropTypes from 'prop-types'
import { motion } from 'framer-motion'


export default function PulseCircle ({name, radius, color, thickness, top, left, loopType}) {

  const styles = {
    circle: {
      borderRadius: '50%',
      position: 'absolute',
      height: radius,
      width: radius,
      border: `${thickness}px solid ${color}`,
      top: `${top}%`,
      left: `${left}%`
    }
  }
  
  return (
    <motion.div
      style={styles.circle}
      open={{scale:0, opacity:1}}

      animate={{
        scale:12,
        opacity: 0,
        transition: {
          delay: .1,
          duration: .8,
          [loopType]: Infinity
        }
      }}
    >
    </motion.div>
  )
}



PulseCircle.PropTypes = {
  radius: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  name: PropTypes.string,
  loopType: PropTypes.string,
}

PulseCircle.defaultProps = {
  radius: 10,
  color: 'orange',
  thickness: 1,
  top: 44,
  left: 44,
  loopType: 'loop'
}