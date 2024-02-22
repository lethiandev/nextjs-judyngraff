import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

import previewImage from './preview.svg'

const OverlayPreview = ({ label, children }: PropsWithChildren<{ label?: ReactNode }>) => (
  <div className="group relative">
    {children}
    <div className="absolute inset-0 opacity-0 group-hover:block group-hover:bg-primary group-hover:bg-opacity-60 group-hover:opacity-100">
      <div className="flex h-full w-full items-center justify-center opacity-50 transition-opacity group-hover:opacity-100">
        <div className="relative translate-y-4 text-3xl font-semibold transition-transform group-hover:translate-y-0">
          {label}
          <div className="absolute left-1/2 top-[calc(100%+1rem)]">
            <Image
              className="max-w-none -translate-x-1/2"
              src={previewImage}
              alt="Preview Project"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default OverlayPreview
