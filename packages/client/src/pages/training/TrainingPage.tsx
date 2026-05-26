import { FC } from 'react'
import { TrainingDeck } from '@onlycards/core'

import { useStopTraining } from '@/store'

import { useComposedDeck } from './use-composed-deck'

export const TrainingPage: FC = () => {
  const stopTraining = useStopTraining()
  const composedDeck = useComposedDeck()

  return (
    <div className="training-page">
      <button className="exit" onClick={stopTraining}>
        Выйти из тренировки
      </button>

      <TrainingDeck cards={composedDeck} />
    </div>
  )
}
