import OverlayCascade from '@/components/OverlayCascade'
import OverlayNavigate from '@/components/OverlayNavigate'
import Image from 'next/image'
import { Service, defaultServices } from './models'

export const Services = ({ services = defaultServices }) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
)

export const ServiceCard = ({ service }: { service: Service }) => (
  <div className="rounded-[32px] bg-surface-variant text-on-surface-variant transition-colors hover:bg-primary">
    <OverlayNavigate>
      <p className="mb-[42px] p-6 pb-0 text-xl font-semibold">{service.label}</p>
      <OverlayCascade color={service.color}>
        <div className="w-full pb-[90%]" />
        <Image className="rounded-[32px]" alt="" src={service.imageUrl} fill aria-hidden />
      </OverlayCascade>
    </OverlayNavigate>
  </div>
)
