import { ReactNode } from 'react'
import FooterLayout from '../(with-footer)/layout'

export type FooterContactLayoutProps = {
  children?: ReactNode
}

export default function FooterContactLayout({ children }: FooterContactLayoutProps) {
  return <FooterLayout hasContact>{children}</FooterLayout>
}
