import { ClientData } from './types'

const exampleData: ClientData = {
  id: 777,
  name: 'Иван Петров',
  groups: [
    {
      id: 1,
      description: '',
      name: 'Индивидуальное обучение English',
      decks: [
        {
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
                postfix: [
                  '“The forest is very deep”',
                  '— «Этот лес очень глубокий»',
                ],
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
        },
        {
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
        },
      ],
    },
    {
      id: 13,
      description: '',
      name: 'Курсы испанского',
      decks: [
        {
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
        },
        {
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
        },
        {
          id: 16,
          cards: [],
          backLang: 'es',
          description: '',
          frontLang: 'ru',
          backPlayable: true,
          name: 'Заполню позже',
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
      resolve(Math.random() > 0.4 ? exampleData : null)
    }, 400)
  })
