import { FC } from 'react'
import { motion } from 'motion/react'

import { CardFace } from '@/card'

import { NextCardProps } from '../types'

export const NextCard: FC<NextCardProps> = ({
  swiping,
  card: {
    inverted,
    deckTitle,
    backsideLang,
    frontsideLang,
    backsideContent,
    frontsideContent,
    playableBackside,
    playableFrontside,
  },
}) => (
  <motion.div
    initial={{
      scale: 0.8,
      opacity: 0.4,
    }}
    animate={{
      scale: swiping ? 1 : 0.8,
      opacity: swiping ? 1 : 0.4,
    }}
  >
    <CardFace
      backside={inverted}
      deckTitle={deckTitle}
      otherLang={inverted ? frontsideLang : backsideLang}
      currentLang={inverted ? backsideLang : frontsideLang}
      content={inverted ? backsideContent : frontsideContent}
      playable={inverted ? playableBackside : playableFrontside}
    />
  </motion.div>
)
