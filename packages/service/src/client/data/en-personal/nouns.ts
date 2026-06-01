import type { DeckForClient } from '../../types'

export const nouns: DeckForClient = {
  id: 3,
  backLang: 'en',
  description: '',
  frontLang: 'ru',
  backPlayable: true,
  name: 'Ru/En Существительные',
  cards: [
    {
      id: 4,
      front: {
        size: 72,
        text: ['Лес'],
        prefix: ['сущ., мужской род'],
        postfix: ['Обширное пространство,', 'покрытое деревьями'],
      },
      back: {
        size: 48,
        text: ['Forest'],
        prefix: ['мужской род, A / The'],
        postfix: ['“The forest is very deep”', '— «Этот лес очень глубокий»'],
      },
    },
    {
      id: 5,
      front: {
        size: 72,
        text: ['Дом'],
        prefix: ['сущ., мужской род'],
        postfix: ['Здание для жилья'],
      },
      back: {
        size: 48,
        text: ['House'],
        prefix: ['noun'],
        postfix: ['A building', 'where people live'],
      },
    },
    {
      id: 6,
      back: {
        size: 60,
        text: ['Book'],
        prefix: ['noun'],
        postfix: ['A written', 'or printed work'],
      },
      front: {
        size: 48,
        text: ['Книга'],
        prefix: ['сущ., женский род'],
        postfix: ['Печатное издание'],
      },
    },
    {
      id: 7,
      back: {
        size: 48,
        text: ['Water'],
        prefix: ['noun'],
        postfix: ['A clear liquid'],
      },
      front: {
        size: 60,
        text: ['Вода'],
        prefix: ['сущ., женский род'],
        postfix: ['Прозрачная жидкость', 'без запаха'],
      },
    },
  ],
}
