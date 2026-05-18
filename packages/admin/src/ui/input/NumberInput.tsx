import { FC } from 'react'

import { NumberInputProps } from './types'

export const NumberInput: FC<NumberInputProps> = ({
  name,
  title,
  value,
  onChange,
}) => (
  <label className="ui-label">
    <span>{title}</span>

    <input
      name={name}
      type="number"
      value={value}
      className="ui-input"
      onChange={({ target }) => onChange(parseInt(target.value))}
    />
  </label>
)
