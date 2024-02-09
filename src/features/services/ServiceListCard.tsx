import PanelCascade from '@/components/PanelCascade'
import PanelNavigation from '@/components/PanelNavigation'
import Image from 'next/image'
import { Service } from './service'

export type ServiceListCardProps = {
  service: Service
}

export const ServiceListCard = ({ service }: ServiceListCardProps) => (
  <div className="rounded-[32px] bg-surface-variant text-on-surface-variant transition-colors hover:bg-primary">
    <PanelNavigation>
      <p className="mb-[42px] p-6 pb-0 text-xl font-semibold">{service.label}</p>
      <PanelCascade color={service.color}>
        <div className="w-full pb-[90%]" />
        <Image className="rounded-[32px]" alt="" src={service.imageUrl} fill aria-hidden />
      </PanelCascade>
    </PanelNavigation>
  </div>
)

export default ServiceListCard
