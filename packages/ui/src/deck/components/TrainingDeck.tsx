import { FC } from 'react'

import { Controls } from './Controls'
import { NextCard } from './NextCard'
import { CurrentCard } from './CurrentCard'
import { TrainingDeckProps } from '../types'
import { useTraining } from '../use-training'

export const TrainingDeck: FC<TrainingDeckProps> = ({ cards }) => {
  const { swiping, nextCard, currentCard, handleCheck, handleCross } =
    useTraining(cards)

  return (
    <div className="training-deck">
      {currentCard && nextCard && (
        <>
          <div className="deck">
            <NextCard
              key={nextCard.id}
              swiping={swiping}
              card={nextCard.props}
            />

            <CurrentCard
              swiping={swiping}
              card={currentCard}
              key={currentCard.id}
            />
          </div>

          <Controls handleCheck={handleCheck} handleCross={handleCross} />
        </>
      )}
    </div>
  )
}
