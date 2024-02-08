import { PropsWithChildren } from 'react'

const Navigation = ({ children }: PropsWithChildren) => (
  <nav className="bg-surface text-on-surface flex flex-wrap items-center justify-center gap-6 rounded-full px-8 py-6">
    {children}
  </nav>
)

export default Navigation
