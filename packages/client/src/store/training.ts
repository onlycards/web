import { getSelectedDecks } from './deck'
import type { ClientStore, ClientStoreGet, ClientStoreSet } from './types'

export const createTrainingActions = (
  set: ClientStoreSet,
  get: ClientStoreGet,
): Pick<
  ClientStore,
  'returnToMain' | 'startTraining' | 'toggleDeckSelection'
> => ({
  returnToMain: () => {
    set({ page: 'main', trainingDecks: [] })
  },

  toggleDeckSelection: key => {
    set(({ selectedDeckKeys }) => ({
      selectedDeckKeys: selectedDeckKeys.includes(key)
        ? selectedDeckKeys.filter(selectedKey => selectedKey !== key)
        : [...selectedDeckKeys, key],
    }))
  },

  startTraining: () => {
    const { data, selectedDeckKeys } = get()

    if (!data || selectedDeckKeys.length === 0) {
      return
    }

    set({
      page: 'training',
      trainingDecks: getSelectedDecks(data, selectedDeckKeys),
    })
  },
})
