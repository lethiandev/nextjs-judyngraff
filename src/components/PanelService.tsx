import Image from 'next/image'
import { ReactNode } from 'react'

export type PanelServiceProps = {
  label: ReactNode
  src: string
  color: string
}

const PanelService = ({ label, src, color }: PanelServiceProps) => (
  <div className="group relative overflow-hidden rounded-[32px] bg-neutral-700 p-6 transition-colors hover:bg-lime-500">
    <p className="mb-[42px] text-xl font-semibold text-white">{label}</p>
    <div className="relative -m-6 mt-0">
      <div className="w-full pb-[90%]">
        <div
          className="absolute -top-6 h-full w-full origin-top scale-90 rounded-[32px] opacity-25"
          style={{ background: color }}
        />
        <div
          className="absolute -top-3 h-full w-full origin-top scale-95 rounded-[32px] opacity-50"
          style={{ background: color }}
        />
        <Image className="rounded-[32px]" alt="" src={src} fill aria-hidden />
      </div>
    </div>
    <div className="absolute bottom-4 right-4 ">
      <div className="rounded-full bg-neutral-700 p-3 transition-colors group-hover:bg-lime-500">
        <Image src="/arrow.svg" alt="" width={24} height={24} />
      </div>
    </div>
  </div>
)

export default PanelService
