import { useMemo } from 'react'
import { create } from 'zustand'
import { ClientData, DeckForClient } from '@onlycards/service'

import { initialState } from './state'
import { AppPage, ClientStore } from './types'
import {
  createAuthActions,
  createDataActions,
  createTrainingActions,
} from './actions'

const useClientStore = create<ClientStore>((set, get) => ({
  ...initialState,
  ...createAuthActions(set, get),
  ...createDataActions(set, get),
  ...createTrainingActions(set, get),
}))

export const useCurrentPage = (): AppPage =>
  useClientStore(({ clientData, trainingInProgress }) =>
    trainingInProgress ? 'training' : clientData ? 'main' : 'auth',
  )

export const useNonNullClientData = (): ClientData =>
  useClientStore(({ clientData }) => {
    if (!clientData) {
      throw new Error('useNonNullClientData requires clientData')
    }

    return clientData
  })

export const useTrainingDecks = (): DeckForClient[] => {
  const clientData = useClientStore(({ clientData }) => clientData)
  const selectedDecks = useClientStore(({ selectedDecks }) => selectedDecks)

  if (!clientData) {
    throw new Error('useTrainingDecks requires clientData')
  }

  return useMemo(
    () =>
      clientData.groups
        .flatMap(group => group.decks)
        .filter(deck => selectedDecks.includes(deck.id)),
    [clientData, selectedDecks],
  )
}

export const useLogIn = () => useClientStore(({ logIn }) => logIn)
export const useLogOut = () => useClientStore(({ logOut }) => logOut)
export const useFetchData = () => useClientStore(({ fetchData }) => fetchData)

export const useSelectedDecks = () =>
  useClientStore(({ selectedDecks }) => selectedDecks)

export const useToggleSelectedDeck = () =>
  useClientStore(({ toggleSelectedDeck }) => toggleSelectedDeck)

export const useStartTraining = () =>
  useClientStore(({ startTraining }) => startTraining)

export const useStopTraining = () =>
  useClientStore(({ stopTraining }) => stopTraining)
