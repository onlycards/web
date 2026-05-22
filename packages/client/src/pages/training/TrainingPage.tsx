import { FC } from 'react'
import { FlipCard } from '@onlycards/ui'

import { useStopTraining } from '@/store'

import { useComposedDeck } from './use-composed-deck'

export const TrainingPage: FC = () => {
  const stopTraining = useStopTraining()
  const composedDeck = useComposedDeck()
  const firstCard = composedDeck[0]

  return (
    <div className="training-page">
      <button className="exit" onClick={stopTraining}>
        Выйти из тренировки
      </button>

      <FlipCard {...firstCard.props} key={firstCard.id} />
    </div>
  )
}
