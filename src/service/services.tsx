import { ReactNode } from 'react'

export type Service = {
  label: ReactNode
  imageSrc: string
  color: string
}

export function withServices() {
  return services
}

const services: Service[] = [
  { label: 'Web Design', imageSrc: require('./assets/web-design.jpg'), color: '#DDA17C' },
  { label: 'Mobile App Design', imageSrc: require('./assets/mobile-app.jpg'), color: '#417EAA' },
  { label: 'Brand Identity', imageSrc: require('./assets/brand-identity.jpg'), color: '#407757' },
  { label: 'Custom Clothing', imageSrc: require('./assets/custom-clothing.jpg'), color: '#B25F47' },
]
