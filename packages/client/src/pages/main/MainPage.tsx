import { createDeckKey, useClientStore } from '@/store'

export const MainPage = () => {
  const data = useClientStore(state => state.data)
  const logOut = useClientStore(state => state.logOut)
  const logoutError = useClientStore(state => state.logoutError)
  const startTraining = useClientStore(state => state.startTraining)
  const logoutPending = useClientStore(state => state.logoutPending)
  const selectedDeckKeys = useClientStore(state => state.selectedDeckKeys)
  const toggleDeckSelection = useClientStore(state => state.toggleDeckSelection)

  if (!data) {
    return <p>Данные ученика не загружены</p>
  }

  return (
    <main>
      <header>
        <h1>{data.name}</h1>

        <p>ID: {data.id}</p>

        <button type="button" onClick={logOut} disabled={logoutPending}>
          {logoutPending ? 'Выходим...' : 'Выйти'}
        </button>

        {logoutError && <p>{logoutError}</p>}
      </header>

      <section>
        <h2>Группы и колоды</h2>

        {data.groups.map(group => (
          <section key={group.id}>
            <h3>{group.name}</h3>

            {group.description && <p>{group.description}</p>}

            {group.decks.length === 0 ? (
              <p>В группе пока нет доступных колод</p>
            ) : (
              <ul>
                {group.decks.map(deck => {
                  const key = createDeckKey(group.id, deck.id)
                  const selected = selectedDeckKeys.includes(key)

                  return (
                    <li key={key}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleDeckSelection(key)}
                        />

                        <span>{deck.name}</span>
                      </label>

                      {deck.description && <p>{deck.description}</p>}

                      <p>Карточек: {deck.cards.length}</p>
                    </li>
                  )
                })}
              </ul>
            )}
          </section>
        ))}
      </section>

      <button
        type="button"
        onClick={startTraining}
        disabled={selectedDeckKeys.length === 0}
      >
        Начать тренировку
      </button>
    </main>
  )
}
