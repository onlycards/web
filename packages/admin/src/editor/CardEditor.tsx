import { FC, useState } from 'react'
import { CardFace } from '@onlycards/ui'
import { SupportedLang } from '@onlycards/service'

import { CheckBox, MultiLine, TextInput, NumberInput, LangSelector } from '@/ui'

export const CardEditor: FC = () => {
  const [title, setTitle] = useState('')
  const [backSize, setBackSize] = useState(32)
  const [frontSize, setFrontSize] = useState(32)
  const [backPlayable, setBackPlayable] = useState(true)
  const [backText, setBackText] = useState<string[]>([])
  const [frontText, setFrontText] = useState<string[]>([])
  const [frontPlayable, setFrontPlayable] = useState(false)
  const [backPrefix, setBackPrefix] = useState<string[]>([])
  const [frontPrefix, setFrontPrefix] = useState<string[]>([])
  const [backPostfix, setBackPostfix] = useState<string[]>([])
  const [frontPostfix, setFrontPostfix] = useState<string[]>([])
  const [firstLang, setFirstLang] = useState<SupportedLang>('ru')
  const [secondLang, setSecondLang] = useState<SupportedLang>('ru')

  return (
    <div className="card-editor">
      <div className="common">
        <TextInput
          name="title"
          value={title}
          onChange={setTitle}
          title="Название набора"
        />

        <div className="double">
          <LangSelector
            value={firstLang}
            name="first-lang"
            onChange={setFirstLang}
            title="Язык лицевой стороны"
          />

          <LangSelector
            value={secondLang}
            name="second-lang"
            onChange={setSecondLang}
            title="Язык обратной стороны"
          />
        </div>

        <div className="double">
          <CheckBox
            value={frontPlayable}
            name="front-has-speaker"
            onChange={setFrontPlayable}
            title="Динамик на лицевой стороне"
          />

          <CheckBox
            value={backPlayable}
            name="front-has-speaker"
            onChange={setBackPlayable}
            title="Динамик на обратной стороне"
          />
        </div>
      </div>

      <div className="side">
        <div className="form">
          <MultiLine
            name="prefix"
            linesLimit={2}
            value={frontPrefix}
            onChange={setFrontPrefix}
            title="Предварительный текст"
          />

          <MultiLine
            name="text"
            linesLimit={3}
            value={frontText}
            title="Основной текст"
            onChange={setFrontText}
          />

          <NumberInput
            name="size"
            value={frontSize}
            title="Размер шрифта"
            onChange={setFrontSize}
          />

          <MultiLine
            name="posfix"
            linesLimit={2}
            value={frontPostfix}
            onChange={setFrontPostfix}
            title="Заключительный текст"
          />
        </div>

        <div className="example">
          <CardFace
            setTitle={title}
            otherLang={secondLang}
            currentLang={firstLang}
            playable={frontPlayable}
            content={{
              text: frontText,
              size: frontSize,
              prefix: frontPrefix,
              postfix: frontPostfix,
            }}
          />
        </div>
      </div>

      <div className="side">
        <div className="form">
          <MultiLine
            name="prefix"
            linesLimit={2}
            value={backPrefix}
            onChange={setBackPrefix}
            title="Предварительный текст"
          />

          <MultiLine
            name="text"
            linesLimit={3}
            value={backText}
            title="Основной текст"
            onChange={setBackText}
          />

          <NumberInput
            name="size"
            value={backSize}
            title="Размер шрифта"
            onChange={setBackSize}
          />

          <MultiLine
            name="posfix"
            linesLimit={2}
            value={backPostfix}
            onChange={setBackPostfix}
            title="Заключительный текст"
          />
        </div>

        <div className="example">
          <CardFace
            backside
            setTitle={title}
            otherLang={firstLang}
            playable={backPlayable}
            currentLang={secondLang}
            content={{
              text: backText,
              size: backSize,
              prefix: backPrefix,
              postfix: backPostfix,
            }}
          />
        </div>
      </div>
    </div>
  )
}
