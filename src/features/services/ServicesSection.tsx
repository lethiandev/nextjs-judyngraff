import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Services from './Services'
import { defaultServices } from './models'

export default function ServicesSection({ services = defaultServices }) {
  // prettier-ignore
  const ServicesHeading = () => <>My <span>Portfolio</span></>

  return (
    <Section variant="surface">
      <SectionHeader heading={<ServicesHeading />} hr>
        Below are some of my services, to see all the services available,{' '}
        <span>please visit the services section.</span>
      </SectionHeader>
      <Services services={services} />
    </Section>
  )
}
