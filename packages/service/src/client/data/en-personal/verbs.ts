import type { DeckForClient } from '../../types'

export const verbs: DeckForClient = {
  id: 8,
  backLang: 'en',
  description: '',
  frontLang: 'ru',
  backPlayable: true,
  name: 'Ru/En Глаголы',
  cards: [
    {
      id: 9,
      front: {
        size: 60,
        text: ['Идти'],
        prefix: ['глагол'],
        postfix: ['Передвигаться шагом'],
      },
      back: {
        size: 96,
        text: ['Go'],
        prefix: ['verb'],
        postfix: ['To move', 'from one place to another'],
      },
    },
    {
      id: 10,
      back: {
        size: 72,
        text: ['See'],
        prefix: ['verb'],
        postfix: ['To notice', 'with the eyes'],
      },
      front: {
        size: 40,
        text: ['Видеть'],
        prefix: ['глагол'],
        postfix: ['Воспринимать глазами'],
      },
    },
  ],
}
