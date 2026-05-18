import { FC } from 'react'

import { CheckBoxProps } from './types'

export const CheckBox: FC<CheckBoxProps> = ({
  name,
  title,
  value,
  onChange,
}) => (
  <label className="check-box">
    <input
      name={name}
      checked={value}
      type="checkbox"
      onChange={({ target }) => onChange(target.checked)}
    />

    <span>{title}</span>
  </label>
)
