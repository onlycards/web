import { SupportedLang, CardFaceContent } from '@/common'

export type CardForClient = {
  id: number
  back: CardFaceContent
  front: CardFaceContent
}

export type DeckForClient = {
  id: number
  name: string
  description: string
  cards: CardForClient[]
  backPlayable?: boolean
  frontPlayable?: boolean
  backLang: SupportedLang
  frontLang: SupportedLang
}

export type GroupForClient = {
  id: number
  name: string
  description: string
  decks: DeckForClient[]
}

export type ClientData = {
  id: number
  name: string
  groups: GroupForClient[]
}
