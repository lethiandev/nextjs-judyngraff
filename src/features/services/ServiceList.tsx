import { PropsWithChildren } from 'react'

export const ServiceList = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">{children}</div>
)

export default ServiceList
