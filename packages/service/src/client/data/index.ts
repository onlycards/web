import { egePrep } from './ege-prep'
import { esThemes } from './es-themes'
import { esCourses } from './es-courses'
import { enPersonal } from './en-personal'
import type { ClientData } from '../types'

const exampleData: ClientData = {
  id: 777,
  name: 'Иван Петров',
  groups: [enPersonal, esCourses, esThemes, egePrep],
}

export const getClientData = () =>
  new Promise<ClientData | null>(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.4 ? exampleData : null)
    }, 400)
  })
