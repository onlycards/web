import { CreateTrainingActions } from '../types'

export const createTrainingActions: CreateTrainingActions = (set, get) => ({
  stopTraining() {
    set(() => ({ trainingInProgress: false }))
  },
  startTraining() {
    if (!get().selectedDecks.length) {
      throw new Error('No decks selected')
    }

    set(() => ({ trainingInProgress: true }))
  },
  toggleSelectedDeck(id) {
    const currentIndex = get().selectedDecks.indexOf(id)

    set(state => ({
      selectedDecks:
        currentIndex === -1
          ? [...state.selectedDecks, id]
          : state.selectedDecks.toSpliced(currentIndex, 1),
    }))
  },
})
