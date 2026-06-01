import { fillLater } from './fill-later'
import { basicWords } from './basic-words'
import { simpleNouns } from './simple-nouns'
import { specialWords } from './special-words'
import type { GroupForClient } from '../../types'

export const esCourses: GroupForClient = {
  id: 13,
  description: '',
  name: 'Курсы испанского',
  decks: [simpleNouns, basicWords, specialWords, fillLater],
}
