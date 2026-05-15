import { FC } from 'react'

import { CardFaceProps } from '../types'

export const CardFace: FC<CardFaceProps> = ({
  onClick,
  disabled,
  setTitle,
  playable,
  backside,
  otherLang,
  currentLang,
  content: { text, size, prefix, postfix },
}) => {
  const speak = () => {
    const textToSpeak = new SpeechSynthesisUtterance(text.join(' '))

    textToSpeak.lang = currentLang

    speechSynthesis.cancel()
    speechSynthesis.speak(textToSpeak)
  }

  return (
    <div className={`card-face ${backside ? 'back' : 'front'}`}>
      <div className="info">
        <div className={`flag ${currentLang}`} />
        <span>{setTitle}</span>
        <div className={`flag ${otherLang}`} />
      </div>

      <div className="prefix">
        {prefix.map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </div>

      <div className="main" style={{ fontSize: size }}>
        {text.map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </div>

      <div className="postfix">
        {postfix.map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </div>

      <button className="cover" onClick={onClick} disabled={disabled} />

      {playable && (
        <button onClick={speak} className="play" disabled={disabled} />
      )}
    </div>
  )
}
