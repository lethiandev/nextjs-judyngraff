import { PropsWithChildren } from 'react'

export const PortfolioList = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>
)

export default PortfolioList
