import type { FlipCardProps } from '@/card'

export type SwipeMode = 'check' | 'cross'

export type TrainingCard = {
  id: number
  props: FlipCardProps
}

export type CurrentCardProps = {
  card: TrainingCard
  swiping?: SwipeMode
}

export type NextCardProps = {
  swiping?: SwipeMode
  card: FlipCardProps
}

export type ControlsProps = {
  handleCheck: () => void
  handleCross: () => void
}

export type TrainingDeckProps = {
  cards: TrainingCard[]
}
