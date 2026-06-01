import type { DeckForClient } from '../../types'

export const basicWords: DeckForClient = {
  id: 12,
  backLang: 'es',
  description: '',
  frontLang: 'ru',
  backPlayable: true,
  name: 'Ru/Es Базовые слова',
  cards: [
    {
      id: 1301,
      back: {
        size: 72,
        text: ['Sol'],
        prefix: ['sustantivo masculino'],
        postfix: ['La estrella', 'del sistema solar'],
      },
      front: {
        size: 48,
        text: ['Солнце'],
        prefix: ['сущ., средний род'],
        postfix: ['Звезда в центре', 'Солнечной системы'],
      },
    },
    {
      id: 14,
      front: {
        size: 48,
        text: ['Город'],
        prefix: ['сущ., мужской род'],
        postfix: ['Крупный населенный пункт'],
      },
      back: {
        size: 48,
        text: ['Ciudad'],
        prefix: ['sustantivo femenino'],
        postfix: ['Un asentamiento grande'],
      },
    },
    {
      id: 159,
      front: {
        size: 60,
        text: ['Друг'],
        postfix: ['Близкий человек'],
        prefix: ['сущ., мужской род'],
      },
      back: {
        size: 48,
        text: ['Amigo'],
        prefix: ['sustantivo masculino'],
        postfix: ['Una persona cercana'],
      },
    },
  ],
}
