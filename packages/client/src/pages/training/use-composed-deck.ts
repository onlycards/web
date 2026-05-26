import { useMemo } from 'react'
import { TrainingCard } from '@onlycards/core'
import { arrayToShuffled } from 'array-shuffle'

import { useTrainingDecks, useIsTrainingInverted } from '@/store'

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
              id: card.id,
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
