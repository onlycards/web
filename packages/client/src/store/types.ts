import { StoreApi } from 'zustand'
import { ClientData } from '@onlycards/service'

type AuthActions = {
  logOut: () => Promise<void>
  logIn: (name: string, password: string) => Promise<boolean>
}

type DataActions = {
  fetchData: () => Promise<boolean>
}

type TrainingActions = {
  stopTraining: () => void
  startTraining: () => void
  toggleSelectedDeck: (id: number) => void
}

type ClientStoreActions = AuthActions & DataActions & TrainingActions

export type AppPage = 'auth' | 'main' | 'training'

export type ClientStoreState = {
  selectedDecks: number[]
  trainingInProgress: boolean
  clientData: null | ClientData
}

export type ClientStore = ClientStoreState & ClientStoreActions

type CreateActions<T> = (
  set: StoreApi<ClientStore>['setState'],
  get: StoreApi<ClientStore>['getState'],
) => T

export type CreateAuthActions = CreateActions<AuthActions>
export type CreateDataActions = CreateActions<DataActions>
export type CreateTrainingActions = CreateActions<TrainingActions>
