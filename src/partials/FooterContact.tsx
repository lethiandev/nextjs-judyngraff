import Heading from '@/components/Heading'
import FooterContactForm from './FooterContactForm'
import Highlight from '@/components/Highlight'
import Section from '@/components/Section'

const FooterContact = () => (
  <Section variant="surface-light">
    <header className="mb-16 flex flex-col items-center">
      <Heading level={2}>
        <Highlight>Get in Touch</Highlight>
      </Heading>
      <p className="max-w-[640px] text-center">
        Were you to invest in your company&apos;s design, I would be more than happy to provide
        assistance for <span className="text-primary">all your desires and needs</span>.
      </p>
    </header>
    <FooterContactForm />
  </Section>
)

export default FooterContact
