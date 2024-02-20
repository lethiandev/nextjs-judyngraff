import Services from './Services'
import { defaultServices } from './models'

export const ServicesSection = ({ services = defaultServices }) => (
  <section className="rounded-[64px] bg-surface p-16 text-on-surface">
    <header className="grid md:grid-cols-2">
      <h2 className="text-5xl font-semibold">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <p className="text-base font-normal">
        Below are some of my services, to see all the services available,{' '}
        <span className="text-primary">please visit the services section.</span>
      </p>
    </header>
    <hr className="my-8 border-current opacity-10" />
    <Services services={services} />
  </section>
)

export default ServicesSection
