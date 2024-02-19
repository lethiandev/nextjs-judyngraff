import Button from '@/components/Button'
import Portfolio from './Portfolio'
import { defaultProjects } from './models'

export const PortfolioSection = ({ projects = defaultProjects }) => (
  <section className="rounded-[64px] bg-surface-light p-16 text-on-surface-light">
    <header className="grid md:grid-cols-2">
      <h2 className="text-5xl font-semibold">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <div className="flex justify-end">
        <Button>See More</Button>
      </div>
    </header>
    <hr className="my-8 border-current opacity-10" />
    <Portfolio projects={projects} />
  </section>
)

export const PortfolioSectionFilter = ({ projects = defaultProjects }) => (
  <section className="py-16">
    <div className="mb-8 flex justify-center gap-8">
      <Button isActive={true}>Web/App Design</Button>
      <Button isActive={false}>Brand Design</Button>
      <Button isActive={false}>Clothing</Button>
      <Button isActive={false}>Other</Button>
    </div>
    <Portfolio projects={projects} />
  </section>
)
