import { SupportedLang } from '@onlycards/service'

export type LangSelectorProps = {
  name: string
  title: string
  value: SupportedLang
  onChange: (lang: SupportedLang) => void
}
