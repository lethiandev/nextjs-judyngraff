'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const ModalLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <dialog className="m-4 rounded bg-slate-400 p-4" onClose={() => router.back()} open>
      <button type="button" onClick={() => router.back()}>
        Close
      </button>
      <p>This is Modal Layout</p>
      <div>{children}</div>
    </dialog>
  )
}

export default ModalLayout
