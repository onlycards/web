import { logClientIn, logClientOut } from '@onlycards/service'

import { CreateAuthActions } from '../types'

export const createAuthActions: CreateAuthActions = (set, get) => ({
  async logOut() {
    set({ clientData: null, trainingInProgress: false })

    return logClientOut()
  },
  async logIn(name, password) {
    const logInResult = await logClientIn(name, password)

    if (!logInResult) {
      return false
    }

    return get().fetchData()
  },
})
