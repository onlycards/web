import { FC } from 'react'

import {
  useLogOut,
  useSelectedDecks,
  useStartTraining,
  useNonNullClientData,
  useToggleSelectedDeck,
} from '@/store'

export const MainPage: FC = () => {
  const logOut = useLogOut()
  const selectedDecks = useSelectedDecks()
  const startTraining = useStartTraining()
  const clientData = useNonNullClientData()
  const toggleSelectedDeck = useToggleSelectedDeck()

  return (
    <div className="main-page">
      <div className="profile">
        <div className="name">{clientData.name},</div>
        <div className="id">id {clientData.id}</div>
        <button onClick={logOut}>Выйти из профиля</button>
      </div>

      {clientData.groups.map(group => (
        <div key={group.id} className="group">
          <div className="name">{group.name}</div>

          {group.decks.length ? (
            <ul>
              {group.decks.map(deck => (
                <li key={deck.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDecks.includes(deck.id)}
                      onChange={() => toggleSelectedDeck(deck.id)}
                    />

                    <span>{deck.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <div>Колоды не добавлены</div>
          )}
        </div>
      ))}

      <button
        className="start"
        onClick={startTraining}
        disabled={!selectedDecks.length}
      >
        Начать тренировку
      </button>
    </div>
  )
}
