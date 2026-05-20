import { logClientIn, logClientOut, getClientData } from '@onlycards/service'

import { getErrorMessage } from './errors'
import type { ClientStore, ClientStoreGet, ClientStoreSet } from './types'

export const createAuthActions = (
  set: ClientStoreSet,
  get: ClientStoreGet,
): Pick<ClientStore, 'logIn' | 'logOut'> => ({
  logOut: async () => {
    if (get().logoutPending) {
      return
    }

    set({ logoutError: null, logoutPending: true })

    try {
      await logClientOut()

      set({
        data: null,
        page: 'auth',
        logoutError: null,
        trainingDecks: [],
        logoutPending: false,
        selectedDeckKeys: [],
      })
    } catch (error) {
      set({
        logoutPending: false,
        logoutError: getErrorMessage(error, 'Не удалось выйти'),
      })
    }
  },

  logIn: async (name, password) => {
    if (get().authPending) {
      return
    }

    set({ authError: null, authPending: true })

    try {
      const loggedIn = await logClientIn(name, password)

      if (!loggedIn) {
        set({
          authPending: false,
          authError: 'Не удалось войти',
        })

        return
      }

      const data = await getClientData()

      if (!data) {
        set({
          page: 'auth',
          authPending: false,
          authError: 'Вход выполнен, но данные ученика не получены',
        })

        return
      }

      set({
        data,
        page: 'main',
        authError: null,
        trainingDecks: [],
        authPending: false,
        selectedDeckKeys: [],
      })
    } catch (error) {
      set({
        authPending: false,
        authError: getErrorMessage(error, 'Не удалось войти'),
      })
    }
  },
})
