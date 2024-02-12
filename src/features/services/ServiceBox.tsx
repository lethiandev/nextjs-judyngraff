import PanelBox from '@/components/PanelBox'
import PanelDivider from '@/components/PanelDivider'
import PanelHeader from '@/components/PanelHeader'
import { ServiceList } from './ServiceList'
import ServiceListCard from './ServiceListCard'
import { Service, defaultServices } from './service'

export type ServiceBoxProps = {
  services?: Service[]
}

export const ServiceBox = ({ services = defaultServices }: ServiceBoxProps) => (
  <PanelBox variant="dark">
    <PanelHeader actions={headerSideContent}>
      <h3 className="text-5xl font-semibold ">
        My <span className="text-primary">Services</span>
      </h3>
    </PanelHeader>
    <PanelDivider />
    <ServiceList>
      {services.map((service, index) => (
        <ServiceListCard key={index} service={service} />
      ))}
    </ServiceList>
  </PanelBox>
)

export default ServiceBox

const headerSideContent = (
  <p className="text-base font-normal">
    Below are some of my services, to see all the services available,{' '}
    <span className="text-primary">please visit the services section.</span>
  </p>
)
