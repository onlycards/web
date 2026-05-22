import { FC, useState } from 'react'

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
  const [inverted, setInverted] = useState(false)
  const toggleSelectedDeck = useToggleSelectedDeck()

  const selectedCardsCount = clientData.groups
    .flatMap(({ decks }) => decks)
    .filter(({ id }) => selectedDecks.includes(id))
    .map(({ cards }) => cards.length)
    .reduce((acc, cur) => acc + cur, 0)

  return (
    <div className="main-page">
      <div className="profile">
        <div className="name">{clientData.name},</div>
        <div className="id">id {clientData.id}</div>
        <button onClick={logOut}>Выйти из профиля</button>
      </div>

      <h3 className="groups-header">Группы</h3>

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
                      disabled={!deck.cards.length}
                      checked={selectedDecks.includes(deck.id)}
                      onChange={() => toggleSelectedDeck(deck.id)}
                    />

                    <span>
                      {deck.name} ({deck.cards.length})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <div>Колоды не добавлены</div>
          )}
        </div>
      ))}

      <div className="settings">
        <h3>Параметры тренировки</h3>

        <label>
          <input
            type="checkbox"
            checked={inverted}
            onChange={({ target }) => setInverted(target.checked)}
          />

          <span>Карты рубашкой вверх</span>
        </label>
      </div>

      <button
        className="start"
        disabled={selectedCardsCount < 2}
        onClick={() => startTraining(inverted)}
      >
        Начать тренировку
      </button>
    </div>
  )
}
