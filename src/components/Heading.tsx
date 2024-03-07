import classNames from 'classnames'
import { ElementType } from 'react'

export type HeadingLevel = 1 | 2 | 3

export type HeadingProps = JSX.IntrinsicElements[`h${HeadingLevel}`] & {
  level?: HeadingLevel
}

export default function Heading({ level = 1, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType<any, `h${typeof level}`>
  return <Tag className={classNames(selectVariant(level), className)} {...props} />
}

function selectVariant(level: HeadingLevel) {
  const className = {
    1: 'font-semibold [&_span]:text-primary text-[4rem]',
    2: 'font-semibold [&_span]:text-primary text-[3rem]',
    3: 'font-semibold [&_span]:text-primary text-[2rem]',
  }

  return className[level]
}
