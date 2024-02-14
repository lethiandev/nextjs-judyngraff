import { PropsWithChildren } from 'react'

const ModalBackdrop = ({ children }: PropsWithChildren) => (
  <div className="absolute left-0 top-0 h-full w-full bg-background p-8 opacity-50">{children}</div>
)

export default ModalBackdrop
