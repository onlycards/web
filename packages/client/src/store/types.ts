import type { StoreApi } from 'zustand'
import type { ClientData, DeckForClient } from '@onlycards/service'

export type AppPage = 'auth' | 'loading' | 'main' | 'training'

export type DeckSelectionKey = `${number}:${number}`

export type SelectedTrainingDeck = {
  groupId: number
  deck: DeckForClient
  key: DeckSelectionKey
}

export type ClientStoreState = {
  page: AppPage
  loadPending: boolean
  authPending: boolean
  logoutPending: boolean
  data: ClientData | null
  loadError: string | null
  authError: string | null
  logoutError: string | null
  selectedDeckKeys: DeckSelectionKey[]
  trainingDecks: SelectedTrainingDeck[]
}

export type ClientStoreActions = {
  returnToMain: () => void
  startTraining: () => void
  logOut: () => Promise<void>
  loadData: () => Promise<void>
  toggleDeckSelection: (key: DeckSelectionKey) => void
  logIn: (name: string, password: string) => Promise<void>
}

export type ClientStore = ClientStoreState & ClientStoreActions

export type ClientStoreGet = StoreApi<ClientStore>['getState']

export type ClientStoreSet = StoreApi<ClientStore>['setState']
