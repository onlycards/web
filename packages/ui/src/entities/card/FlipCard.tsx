import { FC } from 'react'
import { example } from '@onlycards/product'

export const FlipCard: FC = () => {
  console.log('FlipCard rendered')

  return (
    <>
      <div className="flip-card">Flip Card {example}</div>
    </>
  )
}
