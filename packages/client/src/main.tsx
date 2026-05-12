import { StrictMode } from 'react'
import { FlipCard } from '@onlycards/ui'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

createRoot(root).render(
  <StrictMode>
    <FlipCard />
  </StrictMode>,
)
