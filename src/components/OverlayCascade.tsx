import { PropsWithChildren } from 'react'

export type OverlayCascadeProps = PropsWithChildren<{
  color?: string
}>

const OverlayCascade = ({ color, children }: OverlayCascadeProps) => (
  <div className="relative mt-6">
    <div
      className="absolute -top-6 h-full w-full origin-top scale-90 rounded-[32px] opacity-25"
      style={{ backgroundColor: color }}
    />
    <div
      className="absolute -top-3 h-full w-full origin-top scale-95 rounded-[32px] opacity-50"
      style={{ backgroundColor: color }}
    />
    {children}
  </div>
)

export default OverlayCascade
