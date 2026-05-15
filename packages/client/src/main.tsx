import { StrictMode } from 'react'
import { FlipCard } from '@onlycards/ui'
import { createRoot } from 'react-dom/client'

import './index.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

createRoot(root).render(
  <StrictMode>
    <FlipCard
      playableBackside
      backsideLang="en"
      frontsideLang="ru"
      setTitle="Топ-100 существительные"
      frontsideContent={{
        size: 72,
        text: ['Лес'],
        prefix: ['сущ., мужской род'],
        postfix: ['Обширное пространство,', 'покрытое деревьями'],
      }}
      backsideContent={{
        size: 48,
        text: ['Forest'],
        prefix: ['мужской род, A / The'],
        postfix: ['“The forest is very deep”', '— «Этот лес очень глубокий»'],
      }}
    />
  </StrictMode>,
)
