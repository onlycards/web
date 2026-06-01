import { nouns } from './nouns'
import { verbs } from './verbs'
import type { GroupForClient } from '../../types'

export const enPersonal: GroupForClient = {
  id: 1,
  description: '',
  decks: [nouns, verbs],
  name: 'Индивидуальное обучение English',
}
