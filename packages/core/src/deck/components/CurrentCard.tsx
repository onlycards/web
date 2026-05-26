import { FC } from 'react'
import { motion } from 'motion/react'

import { FlipCard } from '@/card'

import { CurrentCardProps } from '../types'

export const CurrentCard: FC<CurrentCardProps> = ({ card, swiping }) => (
  <motion.div
    className="current-card"
    transition={{ ease: 'easeIn' }}
    animate={{
      scale: swiping ? 1.2 : 1,
      opacity: swiping ? 0 : 1,
      translateY: swiping ? 40 : 0,
      rotateZ: swiping === 'cross' ? 20 : swiping === 'check' ? -14 : 0,
      translateX: swiping === 'cross' ? 600 : swiping === 'check' ? -600 : 0,
    }}
  >
    <FlipCard {...card.props} />
  </motion.div>
)
