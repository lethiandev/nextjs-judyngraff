'use client'

import ServiceCard from './ServiceCard'
import { Service, withServices } from './services'

export default function Service() {
  const services = withServices()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  )
}
