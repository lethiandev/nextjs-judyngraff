import clsx from 'clsx/lite'
import { ReactNode } from 'react'
import Heading from './Heading'

export type SectionHeaderProps = {
  heading?: ReactNode
  hr?: boolean
  singleLine?: boolean
  children?: ReactNode
}

export default function SectionHeader({ heading, hr, singleLine, children }: SectionHeaderProps) {
  const className = clsx(
    !singleLine && 'has-[>:only-child]:grid-cols-1 md:grid-cols-2',
    singleLine && 'grid-cols-2',
  )

  return (
    <header>
      <div className={clsx('mb-16 grid items-center gap-8', className)}>
        {heading ? <Heading level={2}>{heading}</Heading> : null}
        {children ? <div className="[&_span]:text-primary">{children}</div> : null}
      </div>
      {hr ? <hr className="relative -top-8 border-current opacity-10" /> : null}
    </header>
  )
}
