import type { DeckForClient } from '../../types'

export const specialWords: DeckForClient = {
  id: 222,
  backLang: 'es',
  description: '',
  frontLang: 'ru',
  backPlayable: true,
  name: 'Ru/Es Особые слова',
  cards: [
    {
      id: 15,
      back: {
        size: 48,
        postfix: [],
        text: ['Bosque'],
        prefix: ['sustantivo masculino'],
      },
      front: {
        size: 72,
        text: ['Лес'],
        prefix: ['сущ., мужской род'],
        postfix: ['Обширное пространство,', 'покрытое деревьями'],
      },
    },
  ],
}
