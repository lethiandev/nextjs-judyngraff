'use client'

import ServiceCard from './ServiceCard'
import { Service, withServices } from './services'

export default function Service() {
  const services = withServices()

  return (
    <div className="-mx-8 overflow-x-auto md:mx-0 md:overflow-visible">
      <div className="w-fit px-8 md:w-full md:px-0">
        <div className="grid grid-cols-[repeat(4,minmax(250px,1fr))] gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
