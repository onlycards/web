import { useMemo } from 'react'
import { arrayToShuffled } from 'array-shuffle'

import { useTrainingDecks, useIsTrainingInverted } from '@/store'

import { TrainingCard } from './types'

export const useComposedDeck = (): TrainingCard[] => {
  const trainingDecks = useTrainingDecks()
  const inverted = useIsTrainingInverted()

  return useMemo(
    () =>
      arrayToShuffled(
        trainingDecks.flatMap(deck =>
          deck.cards.map(card => ({
            id: card.id,
            props: {
              inverted,
              deckTitle: deck.name,
              backsideContent: card.back,
              backsideLang: deck.backLang,
              frontsideContent: card.front,
              frontsideLang: deck.frontLang,
              playableBackside: deck.backPlayable,
              playableFrontside: deck.frontPlayable,
            },
          })),
        ),
      ),
    [trainingDecks, inverted],
  )
}
