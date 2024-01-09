import { PropsWithChildren } from 'react'

export type PanelBoxProps = PropsWithChildren<{
  variant?: 'dark' | 'light'
}>

const PanelBox = ({ variant = 'dark', children }: PanelBoxProps) => {
  const className = { dark: 'bg-zinc-800', light: 'bg-neutral-100' }
  return <div className={`rounded-[64px] px-16 py-24 ${className[variant]}`}>{children}</div>
}

export default PanelBox
