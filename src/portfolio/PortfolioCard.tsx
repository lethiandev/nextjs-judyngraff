import OverlayPreview from '@/components/OverlayPreview'
import Image, { ImageProps } from 'next/image'

export type PortfolioCardProps = {
  name: string
  imageSrc: ImageProps['src']
}

export default function PortfolioCard({ name, imageSrc }: PortfolioCardProps) {
  return (
    <article className="rounded-[2rem] bg-background p-2 text-background shadow-lg shadow-gray-100">
      <div className="overflow-hidden rounded-[1.5rem]">
        <OverlayPreview label={name}>
          <div className="w-full pb-[64%]" />
          <Image src={imageSrc} alt="" fill aria-hidden />
        </OverlayPreview>
      </div>
    </article>
  )
}
