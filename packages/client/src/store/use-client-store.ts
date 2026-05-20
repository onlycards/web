import { create } from 'zustand'

import { createAuthActions } from './auth'
import { createDataActions } from './data'
import { createTrainingActions } from './training'
import type { ClientStore, ClientStoreState } from './types'

const initialState: ClientStoreState = {
  data: null,
  page: 'loading',
  loadError: null,
  authError: null,
  logoutError: null,
  trainingDecks: [],
  loadPending: false,
  authPending: false,
  logoutPending: false,
  selectedDeckKeys: [],
}

export const useClientStore = create<ClientStore>((set, get) => ({
  ...initialState,
  ...createTrainingActions(set, get),
  ...createAuthActions(set, get),
  ...createDataActions(set, get),
}))
