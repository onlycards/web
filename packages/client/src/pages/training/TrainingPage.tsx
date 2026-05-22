import { FC } from 'react'
import { FlipCard } from '@onlycards/ui'

import { useStopTraining, useTrainingDecks } from '@/store'

export const TrainingPage: FC = () => {
  const stopTraining = useStopTraining()
  const trainingDecks = useTrainingDecks()
  const firstDeck = trainingDecks[0]
  const firstCard = firstDeck.cards[0]

  return (
    <div className="training-page">
      <button className="exit" onClick={stopTraining}>
        Выйти из тренировки
      </button>

      <FlipCard
        setTitle={firstDeck.name}
        backsideContent={firstCard.back}
        backsideLang={firstDeck.backLang}
        frontsideContent={firstCard.front}
        frontsideLang={firstDeck.frontLang}
        playableBackside={firstDeck.backPlayable}
        playableFrontside={firstDeck.frontPlayable}
      />
    </div>
  )
}
