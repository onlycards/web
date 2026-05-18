import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CardEditor } from '@/editor'

import './index.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

createRoot(root).render(
  <StrictMode>
    <CardEditor />
  </StrictMode>,
)
