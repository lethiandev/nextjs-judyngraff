import { PropsWithChildren } from 'react'

const Navigation = ({ children }: PropsWithChildren) => (
  <nav className="flex items-center gap-12 rounded-full bg-zinc-800 px-8 py-6">{children}</nav>
)

export default Navigation
