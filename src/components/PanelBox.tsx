import { PropsWithChildren } from 'react'

export type PanelBoxProps = PropsWithChildren<{
  variant?: 'dark' | 'light'
}>

const PanelBox = ({ variant = 'dark', children }: PanelBoxProps) => (
  <article className={`rounded-[64px] px-16 py-24 ${className[variant]}`}>{children}</article>
)

export default PanelBox

const className = {
  dark: 'bg-surface text-on-surface',
  light: 'bg-surface-light text-on-surface-light',
}
