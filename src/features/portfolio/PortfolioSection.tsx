import Button from '@/components/Button'
import Section from '@/components/Section'
import Portfolio from './Portfolio'
import { defaultProjects } from './models'

export const PortfolioSection = ({ projects = defaultProjects }) => (
  <Section variant="surface-light">
    <header className="grid md:grid-cols-2">
      <h2 className="text-5xl font-semibold">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <div className="flex justify-end">
        <Button>See More</Button>
      </div>
    </header>
    <hr className="my-8 border-current opacity-10" />
    <Portfolio projects={projects.filter(({ featured }) => featured)} />
  </Section>
)

export default PortfolioSection
