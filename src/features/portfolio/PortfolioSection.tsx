import Button from '@/components/Button'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Portfolio from './Portfolio'
import { defaultProjects } from './models'

export default function PortfolioSection({ projects = defaultProjects }) {
  // prettier-ignore
  const PortfolioHeading = () => <>My <span>Portfolio</span></>

  return (
    <Section variant="surface-light">
      <SectionHeader heading={<PortfolioHeading />} horizontalRule>
        <div className="flex justify-end">
          <Button type="button">See More</Button>
        </div>
      </SectionHeader>
      <Portfolio projects={projects.filter(({ featured }) => featured)} />
    </Section>
  )
}
