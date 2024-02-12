'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export type NavigationLinkProps = PropsWithChildren<LinkProps>

const NavigationLink = ({ children, ...props }: NavigationLinkProps) => {
  const pathname = usePathname()
  const isActive = resolveIsActive(String(props.href), pathname)

  return (
    <Link className={`group mx-4 ${isActive ? 'is-active' : ''}`} {...props}>
      <span className="font-semibold group-[.is-active]:text-primary">{children}</span>
    </Link>
  )
}

export default NavigationLink

const resolveIsActive = (linkUri: string, pathname: string) => {
  return linkUri.length < 2 ? linkUri === pathname : pathname.startsWith(linkUri)
}
