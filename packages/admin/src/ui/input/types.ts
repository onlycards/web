type BasicInputProps = {
  name: string
  title: string
}

export type TextInputProps = BasicInputProps & {
  value: string
  onChange: (text: string) => void
}

export type NumberInputProps = BasicInputProps & {
  value: number
  onChange: (n: number) => void
}
