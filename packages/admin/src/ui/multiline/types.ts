export type MultiLineProps = {
  name: string
  title: string
  value: string[]
  linesLimit: number
  onChange: (value: string[]) => void
}
