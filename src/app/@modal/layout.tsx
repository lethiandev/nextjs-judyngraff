'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const ModalLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <div className="fixed inset-0 p-8" role="dialog" aria-labelledby="modal-title" aria-modal>
      <div className="fixed inset-0 bg-background bg-opacity-50"></div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative max-h-full min-w-[768px] max-w-full rounded-[4rem] bg-background p-8 text-on-background drop-shadow-xl">
          <div className="absolute right-4 top-4">
            <button type="button" onClick={() => router.back()}>
              Close
            </button>
          </div>
          <div className="flex-grow scroll-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalLayout
