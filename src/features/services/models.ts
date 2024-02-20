import { ReactNode } from 'react'

export type Service = {
  label: ReactNode
  imageUrl: string
  color: string
}

export const defaultServices: Service[] = [
  { label: 'Web Design', imageUrl: '/services/web-design.jpg', color: '#DDA17C' },
  { label: 'Mobile App Design', imageUrl: '/services/mobile-app.jpg', color: '#417EAA' },
  { label: 'Brand Identity', imageUrl: '/services/brand-identity.jpg', color: '#407757' },
  { label: 'Custom Clothing', imageUrl: '/services/custom-clothing.jpg', color: '#B25F47' },
]
