import { useState } from 'react'
import type { FormEvent } from 'react'

import { useClientStore } from '@/store'

import type { AuthPageProps } from './types'

export const AuthPage = ({ loadError }: AuthPageProps) => {
  const logIn = useClientStore(state => state.logIn)
  const authError = useClientStore(state => state.authError)
  const authPending = useClientStore(state => state.authPending)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    void logIn(name, password)
  }

  return (
    <main>
      <h1>Вход для ученика</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Имя</span>

          <input
            required
            name="name"
            type="text"
            value={name}
            disabled={authPending}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label>
          <span>Пароль</span>

          <input
            required
            name="password"
            type="password"
            value={password}
            disabled={authPending}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>

        <button type="submit" disabled={authPending}>
          {authPending ? 'Входим...' : 'Войти'}
        </button>
      </form>

      {loadError && <p>{loadError}</p>}
      {authError && <p>{authError}</p>}
    </main>
  )
}
