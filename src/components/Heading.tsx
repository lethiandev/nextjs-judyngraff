import clsx from 'clsx/lite'
import { ElementType } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4

export type HeadingProps = JSX.IntrinsicElements[`h${HeadingLevel}`] & {
  as?: ElementType<any, `h${HeadingLevel}`>
  level?: HeadingLevel
}

export default function Heading({ as, level = 1, className, ...props }: HeadingProps) {
  const Tag = as ?? (`h${level}` as ElementType<any, `h${HeadingLevel}`>)
  return <Tag className={clsx(selectVariant(level), className)} {...props} />
}

function selectVariant(level: HeadingLevel) {
  const className = {
    1: 'font-semibold [&_span]:text-primary text-[4rem] leading-[1.2]',
    2: 'font-semibold [&_span]:text-primary text-[3rem] leading-[1.2]',
    3: 'font-semibold [&_span]:text-primary text-[2rem] leading-[1.5]',
    4: 'font-semibold [&_span]:text-primary text-[1.25rem] leading-[1.5]',
  }

  return className[level]
}
