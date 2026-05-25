import { useRef, useState } from 'react'

import type { SwipeMode } from '@/deck'

import type { TrainingCard } from './types'
import { moveFirstToNextZone, moveFirstToFirstZone } from './lib'

const ANIMATION_DELAY = 300

export const useTraining = (initialCards: TrainingCard[]) => {
  if (initialCards.length < 2) {
    throw new Error('Too few cards to start training')
  }

  const [cards, setCards] = useState(structuredClone(initialCards))
  const cardZoneIndexesRef = useRef(new Map<number, number>())
  const [swiping, setSwiping] = useState<SwipeMode | undefined>(undefined)
  const nextCard = cards[1]
  const currentCard = cards[0]

  const moveCard = (mode: SwipeMode) => {
    if (mode === 'cross') {
      setCards(moveFirstToFirstZone(cards))

      cardZoneIndexesRef.current.set(currentCard.id, 0)

      return
    }

    const [newCards, newIndex] = moveFirstToNextZone(
      cards,
      cardZoneIndexesRef.current.get(currentCard.id),
    )

    setCards(newCards)

    if (newIndex === null) {
      cardZoneIndexesRef.current.delete(currentCard.id)
    } else {
      cardZoneIndexesRef.current.set(currentCard.id, newIndex)
    }
  }

  const startSwiping = (mode: SwipeMode) => {
    setSwiping(mode)

    setTimeout(() => {
      moveCard(mode)
      setSwiping(undefined)
    }, ANIMATION_DELAY)
  }

  const handleCheck = () => {
    if (swiping) {
      return
    }

    startSwiping('check')
  }

  const handleCross = () => {
    if (swiping) {
      return
    }

    startSwiping('cross')
  }

  return {
    swiping,
    nextCard,
    currentCard,
    handleCheck,
    handleCross,
  }
}
