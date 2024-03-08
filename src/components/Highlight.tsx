export type HighlightProps = {
  nth?: number
  children?: string
}

export default function Highlight({ nth = 1, children }: HighlightProps) {
  const words = children?.match(/([^\s]+)/gi) ?? []
  const highlighted = highlightWords(words.splice(-nth))
  return [words.join(' '), ' ', highlighted]
}

function highlightWords(words: string[]) {
  return <span className="text-primary">{words.join(' ')}</span>
}
