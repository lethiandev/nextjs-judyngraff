import Footer from '@/partials/Footer'
import React, { ReactNode } from 'react'

export default function FooterLayout({ children }: { children?: ReactNode }) {
  return (
    <React.Fragment>
      {children}
      <Footer hasContact={false} />
    </React.Fragment>
  )
}
