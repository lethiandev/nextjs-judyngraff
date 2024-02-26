'use client'
import Link, { LinkProps } from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ForwardedRef, ReactNode, forwardRef } from 'react'

const PreserveSearchLink = (
  { href, ...props }: LinkProps & { children?: ReactNode },
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const searchParams = useSearchParams()
  const pathname = typeof href === 'object' ? href.pathname : href
  return <Link ref={ref} href={{ pathname, query: searchParams.toString() }} {...props} />
}

export default forwardRef(PreserveSearchLink)
