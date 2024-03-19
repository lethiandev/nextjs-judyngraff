import Footer from '@/partials/Footer'
import React, { ReactNode } from 'react'

export type FooterLayoutProps = {
  hasContact?: boolean
  children?: ReactNode
}

export default function FooterLayout({ hasContact = false, children }: FooterLayoutProps) {
  return (
    <React.Fragment>
      {children}
      <Footer hasContact={hasContact} />
    </React.Fragment>
  )
}
