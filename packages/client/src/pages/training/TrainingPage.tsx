import { FlipCard } from '@onlycards/ui'

import { useClientStore } from '@/store'

export const TrainingPage = () => {
  const returnToMain = useClientStore(state => state.returnToMain)
  const trainingDecks = useClientStore(state => state.trainingDecks)
  const trainingDeck = trainingDecks.find(({ deck }) => deck.cards.length > 0)
  const card = trainingDeck?.deck.cards[0]

  return (
    <main>
      <button type="button" onClick={returnToMain}>
        Вернуться к колодам
      </button>

      {!trainingDeck || !card ? (
        <p>В выбранных колодах нет карточек для тренировки</p>
      ) : (
        <FlipCard
          backsideContent={card.back}
          frontsideContent={card.front}
          setTitle={trainingDeck.deck.name}
          backsideLang={trainingDeck.deck.backLang}
          frontsideLang={trainingDeck.deck.frontLang}
          playableBackside={trainingDeck.deck.backPlayable}
          playableFrontside={trainingDeck.deck.frontPlayable}
        />
      )}
    </main>
  )
}
