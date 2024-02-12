import { ReactNode } from 'react'

export type PanelHeaderProps = {
  actions?: ReactNode
  children?: ReactNode
}

const PanelHeader = ({ actions, children }: PanelHeaderProps) => (
  <header className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
    <div className={actions ? undefined : 'col-span-2'}>{children}</div>
    {actions ? <div className="flex justify-end gap-4">{actions}</div> : null}
  </header>
)

export default PanelHeader
