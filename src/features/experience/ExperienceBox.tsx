import { PropsWithChildren, ReactNode } from 'react'

export type ExperienceBoxProps = PropsWithChildren<{
  heading: ReactNode
}>

const ExperienceBox = ({ heading, children }: ExperienceBoxProps) => (
  <div>
    <h4 className="mb-2 text-3xl font-semibold md:-mt-2">{heading}</h4>
    <div className="mb-4 md:mb-16">{children}</div>
  </div>
)

export default ExperienceBox
