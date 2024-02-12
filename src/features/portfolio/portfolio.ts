export type Portfolio = {
  projectName: string
  imageUrl: string
}

export const defaultProjects: Portfolio[] = [
  { projectName: 'Website', imageUrl: '/portfolio/website.jpeg' },
  { projectName: 'Mobile App', imageUrl: '/portfolio/mobile-app.jpeg' },
  { projectName: 'Logo Design', imageUrl: '/portfolio/logo-design.jpeg' },
]
