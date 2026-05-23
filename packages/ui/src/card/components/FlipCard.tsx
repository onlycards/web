import { FC, useState } from 'react'
import { motion } from 'motion/react'

import { CardFace } from './CardFace'
import { FlipCardProps } from '../types'

export const FlipCard: FC<FlipCardProps> = ({
  inverted,
  deckTitle,
  backsideLang,
  frontsideLang,
  backsideContent,
  frontsideContent,
  playableBackside,
  playableFrontside,
}) => {
  const [flipped, setFlipped] = useState(false)
  const toggleFlipped = () => setFlipped(!flipped)

  return (
    <div className="flip-card">
      <motion.div
        className="sides"
        animate={{ scale: flipped ? 1.02 : 1, rotateY: flipped ? 180 : 0 }}
      >
        <div className={`side ${inverted && 'back'}`}>
          <CardFace
            deckTitle={deckTitle}
            onClick={toggleFlipped}
            otherLang={backsideLang}
            content={frontsideContent}
            currentLang={frontsideLang}
            playable={playableFrontside}
          />
        </div>

        <div className={`side ${!inverted && 'back'}`}>
          <CardFace
            backside
            deckTitle={deckTitle}
            onClick={toggleFlipped}
            otherLang={frontsideLang}
            content={backsideContent}
            currentLang={backsideLang}
            playable={playableBackside}
          />
        </div>
      </motion.div>
    </div>
  )
}
