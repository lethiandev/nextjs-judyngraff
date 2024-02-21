import Navigation from '@/components/Navigation'
import NavigationLink from '@/components/NavigationLink'
import Link from 'next/link'
import Image from 'next/image'

const RootNavigation = () => (
  <nav className="py-8">
    <Navigation>
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
      <NavigationLink href="/service">Service</NavigationLink>
      <Link href="/" className="order-first mx-auto shrink-0 px-4 sm:my-1 md:order-none md:-my-1">
        <Image alt="Logo" src="/logo.svg" height={40} width={84} />
      </Link>
      <NavigationLink href="/resume">Resume</NavigationLink>
      <NavigationLink href="/portfolio">Portfolio</NavigationLink>
      <NavigationLink href="/contact">Contact</NavigationLink>
    </Navigation>
  </nav>
)

export default RootNavigation
