import Image from 'next/image'
import Link from 'next/link'
import FooterContact from './FooterContact'

import logoImage from '../../public/logo.svg'

const Footer = ({ hasContact = false }) => (
  <footer className="rounded-t-[4rem] bg-surface-light text-on-surface-light">
    {hasContact ? <FooterContact /> : null}
    <section className="rounded-t-[4rem] bg-surface px-16 py-[6rem] text-on-surface">
      <div className="grid grid-cols-4 gap-16">
        <div className="col-span-2 flex flex-col gap-8">
          <Image src={logoImage} alt="Judyn Graff Logo" />
          <p className="text-justify">
            Creative graphic designer with extensive experience and excellent eye for detail.
            Hard-working with ability to work under pressure within very tight deadlines on multiple
            projects simultaneously. Passionate about creating user-friendly, responsive, and
            visually appealing websites and applications.
          </p>
          <div className="flex gap-4"></div>
        </div>
        <div className="col-span-1">
          <h3 className="my-6 text-lg font-semibold text-primary">Navigation</h3>
          <FooterNavigation />
        </div>
        <div className="col-span-1"></div>
      </div>
    </section>
  </footer>
)

export default Footer

const FooterNavigation = () => (
  <nav className="flex flex-col gap-6">
    <Link className="font-semibold" href="/">
      Home
    </Link>
    <Link className="font-semibold" href="/about">
      About
    </Link>
  </nav>
)
