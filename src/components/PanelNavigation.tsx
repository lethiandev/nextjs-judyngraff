import Image from 'next/image'
import { PropsWithChildren } from 'react'

export type PanelNavigationProps = PropsWithChildren

const PanelNavigation = ({ children }: PanelNavigationProps) => (
  <div className="group relative">
    {children}
    <div className="absolute bottom-4 right-4">
      <div className="rounded-full bg-surface-variant p-3 transition-colors group-hover:bg-primary">
        <Image src="/arrow.svg" alt="" width={24} height={24} />
      </div>
    </div>
  </div>
)

export default PanelNavigation
