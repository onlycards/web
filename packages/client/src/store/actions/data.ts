import { getClientData } from '@onlycards/service'

import { CreateDataActions } from '../types'

export const createDataActions: CreateDataActions = set => {
  let fetchPromise: Promise<boolean> | null = null

  return {
    fetchData() {
      if (fetchPromise) {
        return fetchPromise
      }

      fetchPromise = getClientData().then(clientData => {
        set(() => ({ clientData }))

        fetchPromise = null

        return Boolean(clientData)
      })

      return fetchPromise
    },
  }
}
