import { ReactNode } from 'react'
import Heading from './Heading'

export type SectionHeaderProps = {
  heading?: ReactNode
  horizontalRule?: boolean
  children?: ReactNode
}

export default function SectionHeader({ heading, horizontalRule, children }: SectionHeaderProps) {
  return (
    <header>
      <div className="mb-16 grid items-center gap-8 has-[>:only-child]:grid-cols-1 md:grid-cols-2">
        {heading ? <Heading level={2}>{heading}</Heading> : null}
        {children ? <div className="[&_span]:text-primary">{children}</div> : null}
      </div>
      {horizontalRule ? <hr className="relative -top-8 border-current opacity-10" /> : null}
    </header>
  )
}
