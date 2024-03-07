import { ReactNode } from 'react'

export type SectionHeaderProps = {
  heading?: ReactNode
  horizontalRule?: boolean
  children?: ReactNode
}

export default function SectionHeader({ heading, horizontalRule, children }: SectionHeaderProps) {
  const HeadingElement = ({ heading }: { heading?: ReactNode }) =>
    heading ? <h2 className="text-5xl font-semibold [&>span]:text-primary">{heading}</h2> : null

  const ContentElement = ({ content }: { content?: ReactNode }) =>
    content ? <p className="text-base font-normal [&>span]:text-primary">{content}</p> : null

  return (
    <header>
      <div className="mb-16 grid items-center gap-8 has-[>:only-child]:grid-cols-1 md:grid-cols-2">
        <HeadingElement heading={heading} />
        <ContentElement content={children} />
      </div>
      {horizontalRule ? <hr className="relative -top-8 border-current opacity-10" /> : null}
    </header>
  )
}
