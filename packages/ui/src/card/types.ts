import { SupportedLang, CardFaceContent } from '@onlycards/product'

export type CardFaceProps = {
  setTitle: string
  disabled?: boolean
  playable?: boolean
  backside?: boolean
  onClick?: () => void
  content: CardFaceContent
  otherLang: SupportedLang
  currentLang: SupportedLang
}

export type FlipCardProps = {
  setTitle: string
  inverted?: boolean
  playableBackside?: boolean
  backsideLang: SupportedLang
  playableFrontside?: boolean
  frontsideLang: SupportedLang
  backsideContent: CardFaceContent
  frontsideContent: CardFaceContent
}
