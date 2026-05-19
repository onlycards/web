import { ClientData } from './types'

const exampleData: ClientData = {
  id: 777,
  name: 'Джон Доу',
  groups: [
    {
      id: 1,
      description: '',
      name: 'Индивидуальное обучение',
      decks: [
        {
          id: 3,
          backLang: 'en',
          description: '',
          frontLang: 'ru',
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
                postfix: [
                  '“The forest is very deep”',
                  '— «Этот лес очень глубокий»',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 2,
      decks: [],
      description: '',
      name: 'Подготовка к ЕГЭ',
    },
  ],
}

export const getClientData = () =>
  new Promise<ClientData | null>(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.5 ? exampleData : null)
    }, 400)
  })
