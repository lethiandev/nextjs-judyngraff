import PanelBox from '@/components/PanelBox'
import ServiceListCard from './ServiceListCard'
import { Service } from './service'

const defaultServices: Service[] = [
  { label: 'Web Design', imageUrl: '/services/web-design.jpg', color: '#DDA17C' },
  { label: 'Mobile App Design', imageUrl: '/services/mobile-app.jpg', color: '#417EAA' },
  { label: 'Brand Identity', imageUrl: '/services/brand-identity.jpg', color: '#407757' },
  { label: 'Custom Clothing', imageUrl: '/services/custom-clothing.jpg', color: '#B25F47' },
]

export type ServiceListProps = {
  services?: Service[]
}

export const ServiceList = ({ services = defaultServices }: ServiceListProps) => (
  <PanelBox>
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <h3 className="text-5xl font-semibold ">
        My <span className="text-primary">Services</span>
      </h3>
      <p className="text-base font-normal">
        Below are some of my services, to see all the services available,{' '}
        <span className="text-primary">please visit the services section.</span>
      </p>
    </div>
    <hr className="my-8 border-on-surface opacity-10" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <ServiceListCard key={index} service={service} />
      ))}
    </div>
  </PanelBox>
)

export default ServiceList
