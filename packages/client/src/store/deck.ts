import type { ClientData } from '@onlycards/service'

import type { DeckSelectionKey, SelectedTrainingDeck } from './types'

export const createDeckKey = (
  groupId: number,
  deckId: number,
): DeckSelectionKey => `${groupId}:${deckId}`

export const getSelectedDecks = (
  data: ClientData,
  selectedDeckKeys: DeckSelectionKey[],
): SelectedTrainingDeck[] => {
  const selectedKeySet = new Set(selectedDeckKeys)

  return data.groups.flatMap(group =>
    group.decks
      .map(deck => ({
        deck,
        groupId: group.id,
        key: createDeckKey(group.id, deck.id),
      }))
      .filter(({ key }) => selectedKeySet.has(key)),
  )
}
