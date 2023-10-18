import { PropsWithChildren } from 'react'

const Navigation = ({ children }: PropsWithChildren) => (
  <nav className="flex flex-wrap justify-center items-center rounded-full bg-zinc-800 px-8 py-6 md:gap-4 lg:gap-12">
    {children}
  </nav>
)

export default Navigation
