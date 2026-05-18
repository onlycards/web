import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found')
}

createRoot(root).render(
  <StrictMode>
    <ul>
      <li>
        <a href="https://docs.onlycards.online">Docs</a>
      </li>

      <li>
        <a href="https://admin.onlycards.online">Admin</a>
      </li>

      <li>
        <a href="https://app.onlycards.online">App</a>
      </li>
    </ul>
  </StrictMode>,
)
