import React, { ReactNode } from 'react'
import Footer from '@/partials/Footer'

export default function FooterContactLayout({ children }: { children?: ReactNode }) {
  return (
    <React.Fragment>
      {children}
      <Footer hasContact={true} />
    </React.Fragment>
  )
}
