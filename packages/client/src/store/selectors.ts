import { create } from 'zustand'
import { ClientData } from '@onlycards/service'

import { initialState } from './state'
import { AppPage, ClientStore } from './types'
import { createAuthActions, createDataActions } from './actions'

const useClientStore = create<ClientStore>((set, get) => ({
  ...initialState,
  ...createAuthActions(set, get),
  ...createDataActions(set, get),
}))

export const useCurrentPage = (): AppPage =>
  useClientStore(({ clientData, trainingInProgress }) =>
    trainingInProgress ? 'training' : clientData ? 'main' : 'auth',
  )

export const useNonNullClientData = (): ClientData => {
  const clientData = useClientStore(({ clientData }) => clientData)

  if (!clientData) {
    throw new Error('clientData is null')
  }

  return clientData
}

export const useLogIn = () => useClientStore(({ logIn }) => logIn)
export const useFetchData = () => useClientStore(({ fetchData }) => fetchData)
