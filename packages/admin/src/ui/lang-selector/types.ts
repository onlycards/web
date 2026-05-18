import { SupportedLang } from '@onlycards/product'

export type LangSelectorProps = {
  name: string
  title: string
  value: SupportedLang
  onChange: (lang: SupportedLang) => void
}
