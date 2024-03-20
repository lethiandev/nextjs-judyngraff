import OverlayCascade from '@/components/OverlayCascade'
import OverlayNavigate from '@/components/OverlayNavigate'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

export type ServiceCardProps = {
  label: ReactNode
  color: string
  imageSrc: ImageProps['src']
}

export default function ServiceCard({ label, color, imageSrc }: ServiceCardProps) {
  return (
    <div className="rounded-[32px] bg-surface-variant text-on-surface-variant transition-colors hover:bg-primary">
      <OverlayNavigate>
        <p className="mb-[42px] text-nowrap p-6 pb-0 text-xl font-semibold">{label}</p>
        <OverlayCascade color={color}>
          <div className="w-full pb-[90%]" />
          <Image className="rounded-[32px]" alt="" src={imageSrc} fill aria-hidden />
        </OverlayCascade>
      </OverlayNavigate>
    </div>
  )
}
