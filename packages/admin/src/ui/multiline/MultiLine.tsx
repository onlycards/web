import { FC } from 'react'

import { MultiLineProps } from './types'

const EOL = '\n'

export const MultiLine: FC<MultiLineProps> = ({
  name,
  title,
  value,
  onChange,
  linesLimit,
}) => {
  const textValue = value.join(EOL)

  const handleChange = (newText: string) => {
    onChange(newText.split(EOL).slice(0, linesLimit))
  }

  return (
    <label className="ui-label">
      <span>{title}</span>

      <textarea
        name={name}
        value={textValue}
        rows={linesLimit + 1}
        className="multi-line ui-input"
        onChange={({ target }) => handleChange(target.value)}
      />
    </label>
  )
}
