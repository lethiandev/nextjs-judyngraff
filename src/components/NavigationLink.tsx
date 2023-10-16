'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export type NavigationLinkProps = PropsWithChildren<LinkProps>

const NavigationLink = ({ children, ...props }: NavigationLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link className={`group mx-4 ${isActive ? 'is-active' : ''}`} {...props}>
      <span className="font-semibold text-white group-[.is-active]:text-lime-500">{children}</span>
    </Link>
  )
}

export default NavigationLink
