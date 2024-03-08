export type HighlightProps = {
  nth?: number
  children?: string
}

export default function Highlight({ nth = 1, children }: HighlightProps) {
  const words = children?.match(/([^\s]+)/gi) ?? []
  const highlighted = words.splice(-nth).map(highlightWord)
  return [words.join(' ') + ' ', ...highlighted]
}

function highlightWord(word: string) {
  return <span className="text-primary">{word + ' '}</span>
}
