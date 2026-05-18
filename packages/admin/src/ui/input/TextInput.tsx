import { FC } from 'react'

import { TextInputProps } from './types'

export const TextInput: FC<TextInputProps> = ({
  name,
  title,
  value,
  onChange,
}) => (
  <label className="ui-label">
    <span>{title}</span>

    <input
      name={name}
      type="text"
      value={value}
      className="ui-input"
      onChange={({ target }) => onChange(target.value)}
    />
  </label>
)
