import Navigation from '@/components/Navigation'
import NavigationLink from '@/components/NavigationLink'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <Navigation>
    <NavigationLink href="/">Home</NavigationLink>
    <NavigationLink href="/about">About</NavigationLink>
    <NavigationLink href="/service">Service</NavigationLink>
    <Link href="/" className="-my-1 mx-auto px-4">
      <Image alt="Logo" src="/logo.svg" height={40} width={84} />
    </Link>
    <NavigationLink href="/resume">Resume</NavigationLink>
    <NavigationLink href="/portfolio">Portfolio</NavigationLink>
    <NavigationLink href="/contact">Contact</NavigationLink>
  </Navigation>
)

export default Header
