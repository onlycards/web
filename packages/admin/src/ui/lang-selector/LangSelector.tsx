import { FC } from 'react'
import { SupportedLang } from '@onlycards/product'

import { LangSelectorProps } from './types'

const langs: Record<SupportedLang, string> = {
  ru: 'Русский',
  de: 'Немецкий',
  es: 'Испанский',
  en: 'Английский',
  it: 'Итальянский',
  fr: 'Французский',
  pt: 'Португальский',
}

export const LangSelector: FC<LangSelectorProps> = ({
  name,
  value,
  title,
  onChange,
}) => (
  <label className="ui-label">
    <span>{title}</span>

    <select
      name={name}
      value={value}
      className="lang-selector ui-input"
      onChange={({ target }) => onChange(target.value as SupportedLang)}
    >
      {Object.entries(langs).map(([langCode, langName]) => (
        <option key={langCode} value={langCode}>
          {langName}
        </option>
      ))}
    </select>
  </label>
)
