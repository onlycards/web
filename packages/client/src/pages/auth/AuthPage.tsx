import { FC } from 'react'

import { useAuthPage } from './use-auth-page'

export const AuthPage: FC = () => {
  const {
    name,
    disabled,
    errorText,
    submitAction,
    isPageVisible,
    handleFormFocus,
    handleNameChange,
  } = useAuthPage()

  return (
    <>
      {isPageVisible && (
        <div className="auth-page">
          <form action={submitAction} onFocus={handleFormFocus}>
            <label>
              <span>Имя</span>

              <input
                required
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                disabled={disabled}
                placeholder="Введите имя"
                onChange={handleNameChange}
              />
            </label>

            <label>
              <span>Пароль</span>

              <input
                required
                type="password"
                name="password"
                disabled={disabled}
                placeholder="Введите пароль"
              />
            </label>

            <button type="submit" disabled={disabled}>
              Войти
            </button>

            <p className="error">{errorText}</p>
          </form>
        </div>
      )}
    </>
  )
}
