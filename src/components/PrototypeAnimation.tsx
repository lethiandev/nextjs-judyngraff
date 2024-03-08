'use client'

import clsx from 'clsx/lite'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import proto1Image from '../assets/prototype/proto-1.png'
import proto2Image from '../assets/prototype/proto-2.png'
import proto3Image from '../assets/prototype/proto-3.png'
import proto4Image from '../assets/prototype/proto-4.png'

export default function PrototypeAnimation() {
  const [visible, setVisible] = useState(-1)

  useEffect(() => {
    return takeInterval(() => setVisible(v => ++v), { ticks: 400, takes: 4 })
  }, [setVisible])

  return (
    <div className="relative mx-auto aspect-[1088/497] w-full max-w-[1088px] overflow-hidden">
      <div className="absolute left-0 top-[14.084%] w-[41.911%]">
        <div className={clsx('w-full animate-[pop-in_400ms_ease-out]', visible < 0 && 'hidden')}>
          <Image className="w-full rounded-[1rem]" src={proto1Image} alt="Prototype" />
        </div>
      </div>
      <div className="absolute left-[17.095%] top-[5.030%] w-[41.911%]">
        <div className={clsx('w-full animate-[pop-in_400ms_ease-out]', visible < 1 && 'hidden')}>
          <Image className="w-full rounded-[1rem]" src={proto2Image} alt="Prototype" />
        </div>
      </div>
      <div className="absolute left-[43.474%] top-0 w-[41.911%]">
        <div className={clsx('w-full animate-[pop-in_400ms_ease-out]', visible < 2 && 'hidden')}>
          <Image className="w-full rounded-[1rem]" src={proto3Image} alt="Website" />
        </div>
      </div>
      <div className="absolute left-[83.066%] top-[25.943%] w-[15.257%]">
        <div className={clsx('w-full animate-[pop-in_400ms_ease-out]', visible < 3 && 'hidden')}>
          <Image className="w-full rotate-[7deg] rounded-[1rem]" src={proto4Image} alt="Mobile" />
        </div>
      </div>
    </div>
  )
}

function takeInterval(callback: () => void, { ticks = 0, takes = 0 }) {
  const invokeCallback = () => {
    callback()
    if (--takes <= 0) {
      clearTimers()
    }
  }

  const clearTimers = () => {
    clearTimeout(timeoutId)
    clearInterval(intervalId)
  }

  // Timeout invokes the first callback "immediately"
  const timeoutId = setTimeout(invokeCallback, 0)
  const intervalId = setInterval(invokeCallback, ticks)
  return () => clearTimers()
}
