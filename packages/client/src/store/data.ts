import { getClientData } from '@onlycards/service'

import { getErrorMessage } from './errors'
import type { ClientStore, ClientStoreGet, ClientStoreSet } from './types'

export const createDataActions = (
  set: ClientStoreSet,
  get: ClientStoreGet,
): Pick<ClientStore, 'loadData'> => ({
  loadData: async () => {
    if (get().loadPending) {
      return
    }

    set({ loadError: null, page: 'loading', loadPending: true })

    try {
      const data = await getClientData()

      set({
        data,
        trainingDecks: [],
        loadPending: false,
        page: data ? 'main' : 'auth',
        selectedDeckKeys: data ? get().selectedDeckKeys : [],
      })
    } catch (error) {
      set({
        data: null,
        page: 'auth',
        trainingDecks: [],
        loadPending: false,
        selectedDeckKeys: [],
        loadError: getErrorMessage(error, 'Не удалось загрузить данные'),
      })
    }
  },
})
