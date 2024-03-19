'use client'

import { withProject } from './projects'

export type PortfolioContentProps = {
  slug: string
}

export default function PortfolioContent({ slug }: PortfolioContentProps) {
  const { default: Project } = withProject(slug)
  return <Project />
}
