import { colors } from './colors'
import { numbers0To20 } from './numbers-0-20'
import type { GroupForClient } from '../../types'

export const esThemes: GroupForClient = {
  id: 20,
  description: '',
  decks: [numbers0To20, colors],
  name: 'Тематические наборы Español',
}
