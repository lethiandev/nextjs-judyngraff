import { PropsWithChildren } from 'react'

export type PanelBoxProps = PropsWithChildren

const PanelBox = ({ children }: PanelBoxProps) => (
  <div className="rounded-[64px] bg-zinc-800 px-16 py-24">{children}</div>
)

export default PanelBox
